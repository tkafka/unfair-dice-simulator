import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ReferenceArea,
} from "recharts";
import { DiceService, RollResult } from "./services/DiceService";
import { TranslationService } from "./services/TranslationService";

function App() {
  const [translationService] = useState(() => TranslationService.getInstance());
  const [language, setLanguage] = useState(
    translationService.getCurrentLanguage()
  );
  const [rolls, setRolls] = useState<RollResult[]>([]);
  const [diceService, setDiceService] = useState(() => {
    const unfairWeights = DiceService.generateRandomWeights(6);
    return new DiceService(unfairWeights);
  });
  const [selectedDice, setSelectedDice] = useState<number | null>(null);
  const [guessResult, setGuessResult] = useState<string | null>(null);

  const handleLanguageChange = (lang: "en" | "cs") => {
    translationService.setLanguage(lang);
    setLanguage(lang);
  };

  const handleNewDice = () => {
    const unfairWeights = DiceService.generateRandomWeights(6);
    setDiceService(new DiceService(unfairWeights));
    setRolls([]); // Reset rolls when new dice is created
    setGuessResult(null); // Reset guess result
    setSelectedDice(null); // Reset selection
  };

  const handleRoll = (count: number) => {
    const firstRolls = diceService.rollMany(count, true);
    const secondRolls = diceService.rollMany(count, false);
    setRolls((prevRolls) => [...prevRolls, ...firstRolls, ...secondRolls]);
  };

  const stats = useMemo(() => {
    const faces = diceService.getFaces();
    const {
      first: firstProbs,
      second: secondProbs,
      fairStdDev,
    } = diceService.getExpectedProbabilities();

    // Count occurrences of each face value
    const firstCounts = new Array(faces).fill(0);
    const secondCounts = new Array(faces).fill(0);

    rolls.forEach((roll) => {
      if (roll.isFirst) {
        firstCounts[roll.value - 1]++;
      } else {
        secondCounts[roll.value - 1]++;
      }
    });

    const firstRollCount = rolls.filter((r) => r.isFirst).length;
    const secondRollCount = rolls.filter((r) => !r.isFirst).length;

    // Use probabilities from the fair dice for expected values
    const fairProbs = diceService.isFirstUnfair() ? secondProbs : firstProbs;
    const fairRollCount = diceService.isFirstUnfair()
      ? secondRollCount
      : firstRollCount;

    return Array.from({ length: faces }, (_, i) => ({
      face: i + 1,
      firstCount: firstCounts[i],
      secondCount: secondCounts[i],
      expectedFair: fairProbs[i] * fairRollCount,
      expectedFairLower: Math.max(
        0,
        fairProbs[i] * fairRollCount - fairStdDev * Math.sqrt(fairRollCount)
      ),
      expectedFairUpper:
        fairProbs[i] * fairRollCount + fairStdDev * Math.sqrt(fairRollCount),
    }));
  }, [rolls, diceService]);

  return (
    <div className="bg-gray-100 min-h-screen w-screen">
      <div className="p-10 max-w-[1000px] mx-auto flex flex-col items-center">
        <div className="flex justify-end w-full mb-5">
          <select
            value={language}
            onChange={(e) =>
              handleLanguageChange(e.target.value as "en" | "cs")
            }
            className="p-2 rounded-lg border border-gray-300 bg-white cursor-pointer"
          >
            <option value="en">English</option>
            <option value="cs">Čeština</option>
          </select>
        </div>

        <h1 className="mb-10 text-gray-800 text-4xl text-center">
          {translationService.t("title")}
        </h1>

        <div className="bg-white p-8 rounded-2xl shadow-md mb-8 w-full max-w-[800px] text-center">
          <h2 className="text-gray-700 mt-0 mb-6 text-3xl">
            {translationService.t("whichDiceUnfair")}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => {
                setSelectedDice(1);
                const isCorrect = diceService.isFirstUnfair();
                setGuessResult(
                  isCorrect
                    ? translationService.t("correctGuess")
                    : translationService.t("wrongGuess")
                );
              }}
              className={`px-6 py-2.5 text-lg font-bold border-2 border-[#8884d8] transition-all duration-300 ${
                selectedDice === 1
                  ? "bg-[#8884d8] text-white"
                  : "bg-white text-[#8884d8]"
              }`}
            >
              {translationService.t("dice1")}
            </button>
            <button
              onClick={() => {
                setSelectedDice(2);
                const isCorrect = !diceService.isFirstUnfair();
                setGuessResult(
                  isCorrect
                    ? translationService.t("correctGuess")
                    : translationService.t("wrongGuess")
                );
              }}
              className={`px-6 py-2.5 text-lg font-bold border-2 border-[#82ca9d] transition-all duration-300 ${
                selectedDice === 2
                  ? "bg-[#82ca9d] text-white"
                  : "bg-white text-[#82ca9d]"
              }`}
            >
              {translationService.t("dice2")}
            </button>
            {guessResult && (
              <p
                className={`m-0 text-xl min-w-[300px] ${
                  guessResult.includes("Správně")
                    ? "text-green-500"
                    : "text-orange-500"
                }`}
              >
                {guessResult}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-2.5 mb-8 bg-white p-8 rounded-2xl shadow-md w-full max-w-[800px]">
          <button
            onClick={() => handleRoll(1)}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-colors duration-200"
          >
            {translationService.t("roll1")}
          </button>
          <button
            onClick={() => handleRoll(10)}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-colors duration-200"
          >
            {translationService.t("roll10")}
          </button>
          <button
            onClick={() => handleRoll(100)}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-colors duration-200"
          >
            {translationService.t("roll100")}
          </button>
          <button
            onClick={() => handleRoll(1000)}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-colors duration-200"
          >
            {translationService.t("roll1000")}
          </button>
          <button
            onClick={() => handleRoll(10000)}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-colors duration-200"
          >
            {translationService.t("roll10000")}
          </button>
          <button
            onClick={handleNewDice}
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 transition-colors duration-200"
          >
            {translationService.t("newDice")}
          </button>
          <button
            onClick={() => setRolls([])}
            className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 transition-colors duration-200"
          >
            {translationService.t("clearRolls")}
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md mb-8 w-full max-w-[800px]">
          <h2 className="text-gray-700 text-2xl mb-6">
            {translationService.t("distribution")}
          </h2>
          <BarChart width={800} height={400} data={stats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="face"
              label={{ value: translationService.t("value"), position: "top" }}
            />
            <YAxis
              label={{
                value: translationService.t("count"),
                angle: -90,
                position: "left",
              }}
            />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="firstCount"
              name={translationService.t("dice1")}
              fill="#8884d8"
            />
            <Bar
              dataKey="secondCount"
              name={translationService.t("dice2")}
              fill="#82ca9d"
            />
            <ReferenceLine
              y={stats[0]?.expectedFair}
              stroke="#8884d8"
              strokeDasharray="3 3"
            />
            <ReferenceArea
              y1={stats[0]?.expectedFairLower}
              y2={stats[0]?.expectedFairUpper}
              fill="#8884d8"
              fillOpacity={0.1}
              label={translationService.t("expectedDistribution")}
            />
          </BarChart>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-[800px]">
          <h2 className="text-gray-700 text-2xl mb-6">
            {translationService.t("statistics")}
          </h2>
          <p className="text-gray-600">
            {translationService.t("totalRolls")}: {rolls.length}
          </p>
          <p className="text-gray-600">
            {translationService.t(
              "dice1Rolls",
              rolls.filter((r) => r.isFirst).length.toString()
            )}
          </p>
          <p className="text-gray-600">
            {translationService.t(
              "dice2Rolls",
              rolls.filter((r) => !r.isFirst).length.toString()
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
