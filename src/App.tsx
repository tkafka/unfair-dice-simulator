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

function App() {
  const [rolls, setRolls] = useState<RollResult[]>([]);
  const [diceService, setDiceService] = useState(() => {
    const unfairWeights = DiceService.generateRandomWeights(6);
    return new DiceService(unfairWeights);
  });
  const [selectedDice, setSelectedDice] = useState<number | null>(null);
  const [guessResult, setGuessResult] = useState<string | null>(null);

  const handleNewDice = () => {
    const unfairWeights = DiceService.generateRandomWeights(6);
    setDiceService(new DiceService(unfairWeights));
    setRolls([]); // Reset rolls when new dice is created
    setGuessResult(null); // Reset guess result
    setSelectedDice(null); // Reset selection
  };

  const handleGuess = () => {
    if (selectedDice === null) return;

    const isCorrect =
      (selectedDice === 1 && diceService.isFirstUnfair()) ||
      (selectedDice === 2 && !diceService.isFirstUnfair());

    setGuessResult(
      isCorrect
        ? "🎉 Correct! You've spotted the unfair dice!"
        : "🤔 Not quite... try observing the distributions more carefully"
    );
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
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>Unfair Dice Simulator</h1>
      <div
        className="guess-container"
        style={{ marginBottom: "30px", textAlign: "center" }}
      >
        <h2>Which dice is unfair?</h2>
        <div className="button-group">
          <button
            onClick={() => setSelectedDice(1)}
            style={{
              backgroundColor: selectedDice === 1 ? "#8884d8" : undefined,
              color: selectedDice === 1 ? "white" : undefined,
            }}
          >
            Dice 1
          </button>
          <button
            onClick={() => setSelectedDice(2)}
            style={{
              backgroundColor: selectedDice === 2 ? "#82ca9d" : undefined,
              color: selectedDice === 2 ? "white" : undefined,
            }}
          >
            Dice 2
          </button>
          <button
            onClick={handleGuess}
            disabled={selectedDice === null}
            style={{
              backgroundColor: "#f39c12",
              opacity: selectedDice === null ? 0.5 : 1,
            }}
          >
            Check Guess
          </button>
        </div>
        {guessResult && (
          <p
            style={{
              marginTop: "20px",
              fontSize: "1.2em",
              color: guessResult.includes("Correct") ? "#27ae60" : "#e67e22",
            }}
          >
            {guessResult}
          </p>
        )}
      </div>

      <div className="button-group" style={{ marginBottom: "30px" }}>
        <button onClick={() => handleRoll(1)}>Roll Once</button>
        <button onClick={() => handleRoll(10)}>Roll 10 Times</button>
        <button onClick={() => handleRoll(100)}>Roll 100 Times</button>
        <button onClick={() => handleRoll(1000)}>Roll 1 000 Times</button>
        <button onClick={() => handleRoll(10000)}>Roll 10 000 Times</button>
        <button onClick={handleNewDice} style={{ backgroundColor: "#2ecc71" }}>
          New Random Dice
        </button>
        <button
          onClick={() => setRolls([])}
          style={{ backgroundColor: "#e74c3c" }}
        >
          Clear Rolls
        </button>
      </div>

      <div className="chart-container" style={{ marginBottom: "30px" }}>
        <h2>Roll Distribution</h2>
        <BarChart width={800} height={400} data={stats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="face"
            label={{ value: "Face Value", position: "top" }}
          />
          <YAxis label={{ value: "Count", angle: -90, position: "left" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="firstCount" name="Dice 1" fill="#8884d8" />
          <Bar dataKey="secondCount" name="Dice 2" fill="#82ca9d" />
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
            label="Expected Fair ±1σ range"
          />
        </BarChart>
      </div>

      <div className="stats-container">
        <h2>Statistics</h2>
        <p>Total Rolls: {rolls.length}</p>
        <p>Dice 1 Rolls: {rolls.filter((r) => r.isFirst).length}</p>
        <p>Dice 2 Rolls: {rolls.filter((r) => !r.isFirst).length}</p>
      </div>
    </div>
  );
}

export default App;
