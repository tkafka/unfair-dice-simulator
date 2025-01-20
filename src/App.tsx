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

  const handleNewDice = () => {
    const unfairWeights = DiceService.generateRandomWeights(6);
    setDiceService(new DiceService(unfairWeights));
    setRolls([]); // Reset rolls when new dice is created
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
      <div className="button-group">
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

      <div className="chart-container">
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
