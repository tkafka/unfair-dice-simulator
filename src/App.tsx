import { useState, useMemo } from "react";
import "./App.css";
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
    <div style={{ background: "#f8f9fa", minHeight: "100vh", width: "100vw" }}>
      <div
        style={{
          padding: "40px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <select
            value={language}
            onChange={(e) =>
              handleLanguageChange(e.target.value as "en" | "cs")
            }
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <option value="en">English</option>
            <option value="cs">Čeština</option>
          </select>
        </div>

        <h1
          style={{
            marginBottom: "40px",
            color: "#2c3e50",
            fontSize: "2.5em",
            textAlign: "center",
          }}
        >
          {translationService.t("title")}
        </h1>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "30px",
            width: "100%",
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#34495e",
              marginTop: "0",
              marginBottom: "25px",
              fontSize: "1.8em",
            }}
          >
            {translationService.t("whichDiceUnfair")}
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
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
              style={{
                backgroundColor: selectedDice === 1 ? "#8884d8" : "white",
                color: selectedDice === 1 ? "white" : "#8884d8",
                border: "2px solid #8884d8",
                padding: "10px 25px",
                fontSize: "1.1em",
                fontWeight: "bold",
                transition: "all 0.3s ease",
              }}
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
              style={{
                backgroundColor: selectedDice === 2 ? "#82ca9d" : "white",
                color: selectedDice === 2 ? "white" : "#82ca9d",
                border: "2px solid #82ca9d",
                padding: "10px 25px",
                fontSize: "1.1em",
                fontWeight: "bold",
                transition: "all 0.3s ease",
              }}
            >
              {translationService.t("dice2")}
            </button>
            {guessResult && (
              <p
                style={{
                  margin: 0,
                  fontSize: "1.2em",
                  color: guessResult.includes("Správně")
                    ? "#27ae60"
                    : "#e67e22",
                  minWidth: "300px",
                }}
              >
                {guessResult}
              </p>
            )}
          </div>
        </div>

        <div
          className="button-group"
          style={{
            marginBottom: "30px",
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <button onClick={() => handleRoll(1)}>
            {translationService.t("roll1")}
          </button>
          <button onClick={() => handleRoll(10)}>
            {translationService.t("roll10")}
          </button>
          <button onClick={() => handleRoll(100)}>
            {translationService.t("roll100")}
          </button>
          <button onClick={() => handleRoll(1000)}>
            {translationService.t("roll1000")}
          </button>
          <button onClick={() => handleRoll(10000)}>
            {translationService.t("roll10000")}
          </button>
          <button
            onClick={handleNewDice}
            style={{ backgroundColor: "#2ecc71" }}
          >
            {translationService.t("newDice")}
          </button>
          <button
            onClick={() => setRolls([])}
            style={{ backgroundColor: "#e74c3c" }}
          >
            {translationService.t("clearRolls")}
          </button>
        </div>

        <div
          className="chart-container"
          style={{
            marginBottom: "30px",
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <h2>{translationService.t("distribution")}</h2>
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

        <div
          className="stats-container"
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <h2>{translationService.t("statistics")}</h2>
          <p>
            {translationService.t("totalRolls")}: {rolls.length}
          </p>
          <p>
            {translationService.t(
              "dice1Rolls",
              rolls.filter((r) => r.isFirst).length.toString()
            )}
          </p>
          <p>
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
