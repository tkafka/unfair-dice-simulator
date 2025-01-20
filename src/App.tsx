import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  ReferenceArea,
  ResponsiveContainer,
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
    <div className="bg-gray-100 min-h-screen w-screen flex flex-col">
      <div className="p-4 sm:p-6 lg:p-8 mx-auto flex-grow w-full">
        <div className="flex flex-col items-center md:flex-row md:justify-between w-full mb-4">
          <div className="mb-4 md:mb-0">
            <h1 className="text-gray-800 text-3xl">
              {translationService.t("title")}
            </h1>
            <p className="text-gray-600 text-lg mt-1">
              {translationService.t("subtitle")}
            </p>
          </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 sm:gap-6 lg:gap-8 w-full">
          {/* Game section */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md w-full text-center">
            <h2 className="text-gray-700 mt-0 mb-4 text-2xl lg:text-3xl">
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
                className={`px-4 py-2 text-base lg:text-lg font-bold border-2 border-[#8884d8] transition-all duration-300 ${
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
                className={`px-4 py-2 text-base lg:text-lg font-bold border-2 border-[#82ca9d] transition-all duration-300 ${
                  selectedDice === 2
                    ? "bg-[#82ca9d] text-white"
                    : "bg-white text-[#82ca9d]"
                }`}
              >
                {translationService.t("dice2")}
              </button>
            </div>
            {guessResult && (
              <p
                className={`mt-2 text-lg lg:text-xl ${
                  guessResult.includes("Správně")
                    ? "text-green-500"
                    : "text-orange-500"
                }`}
              >
                {guessResult}
              </p>
            )}
            <div className="mt-4">
              <button
                onClick={handleNewDice}
                className="text-blue-500 hover:text-blue-600 transition-colors duration-200 text-lg"
              >
                {translationService.t("newDice")}
              </button>
            </div>
          </div>

          {/* Roll actions */}
          <div className="flex flex-wrap gap-2 bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md w-full lg:col-start-1">
            <button
              onClick={() => handleRoll(1)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1.5 transition-colors duration-200"
            >
              {translationService.t("roll1")}
            </button>
            <button
              onClick={() => handleRoll(10)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1.5 transition-colors duration-200"
            >
              {translationService.t("roll10")}
            </button>
            <button
              onClick={() => handleRoll(100)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1.5 transition-colors duration-200"
            >
              {translationService.t("roll100")}
            </button>
            <button
              onClick={() => handleRoll(1000)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1.5 transition-colors duration-200"
            >
              {translationService.t("roll1000")}
            </button>
            <button
              onClick={() => handleRoll(10000)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1.5 transition-colors duration-200"
            >
              {translationService.t("roll10000")}
            </button>
            <button
              onClick={() => setRolls([])}
              className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-3 py-1.5 transition-colors duration-200"
            >
              {translationService.t("clearRolls")}
            </button>
          </div>

          {/* Chart */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md w-full lg:col-start-2 lg:row-start-1 lg:row-span-3">
            <h2 className="text-gray-700 text-xl lg:text-2xl mb-4">
              {translationService.t("distribution")}
            </h2>
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={stats}
                  margin={{ top: 8, right: 0, left: 16, bottom: 0 }}
                  maxBarSize={60}
                >
                  <XAxis dataKey="face" />
                  <YAxis
                    label={{
                      value: translationService.t("count"),
                      angle: -90,
                      position: "left",
                    }}
                    domain={[
                      0,
                      (dataMax: number) => {
                        // If we have rolls and expected value
                        if (rolls.length > 0 && stats[0]?.expectedFair) {
                          // Scale so expected value is at 2/3 of the chart height and round up to nice number
                          const targetMax = Math.max(
                            dataMax,
                            stats[0].expectedFair * 1.5
                          );
                          // Round up to next multiple of 10
                          return Math.ceil(targetMax / 10) * 10;
                        }
                        // Round up to next multiple of 10 even without expected value
                        return Math.ceil(dataMax / 10) * 10;
                      },
                    ]}
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
                  {rolls.length > 0 && (
                    <>
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
                    </>
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md w-full lg:col-start-1">
            <h2 className="text-gray-700 text-xl lg:text-2xl mb-4">
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

      <footer className="bg-white shadow-md py-4 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="container mx-auto text-center text-gray-600 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div>
            {translationService.t("madeWith")}{" "}
            <a
              href="https://github.com/cline/cline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
            >
              Cline
            </a>
          </div>
          <div>
            <a
              href="https://github.com/tkafka/unfair-dice-simulator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-500 transition-colors duration-200"
            >
              {translationService.t("sourceCode")} →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
