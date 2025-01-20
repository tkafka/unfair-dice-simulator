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
} from "recharts";
import { DiceService, RollResult } from "./services/DiceService";

// Configure unfair dice weights (higher weight = higher probability)
const unfairWeights = [1, 2, 3, 4, 5, 6]; // Increasingly unfair 6-sided die
const diceService = new DiceService(unfairWeights);

function App() {
  const [rolls, setRolls] = useState<RollResult[]>([]);

  const handleRoll = (count: number) => {
    const fairRolls = diceService.rollMany(count, true);
    const unfairRolls = diceService.rollMany(count, false);
    setRolls([...fairRolls, ...unfairRolls]);
  };

  const stats = useMemo(() => {
    const faces = diceService.getFaces();
    const { fair: fairProbs, fairStdDev } =
      diceService.getExpectedProbabilities();

    // Count occurrences of each face value
    const fairCounts = new Array(faces).fill(0);
    const unfairCounts = new Array(faces).fill(0);

    rolls.forEach((roll) => {
      if (roll.isFair) {
        fairCounts[roll.value - 1]++;
      } else {
        unfairCounts[roll.value - 1]++;
      }
    });

    const fairRollCount = rolls.filter((r) => r.isFair).length;

    return Array.from({ length: faces }, (_, i) => ({
      face: i + 1,
      fairCount: fairCounts[i],
      unfairCount: unfairCounts[i],
      expectedFair: fairProbs[i] * fairRollCount,
      expectedFairLower: Math.max(
        0,
        fairProbs[i] * fairRollCount - fairStdDev * Math.sqrt(fairRollCount)
      ),
      expectedFairUpper:
        fairProbs[i] * fairRollCount + fairStdDev * Math.sqrt(fairRollCount),
    }));
  }, [rolls]);

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>Unfair Dice Simulator</h1>
      <div className="button-group">
        <button onClick={() => handleRoll(1)}>Roll Once</button>
        <button onClick={() => handleRoll(10)}>Roll 10 Times</button>
        <button onClick={() => handleRoll(100)}>Roll 100 Times</button>
        <button onClick={() => handleRoll(1000)}>Roll 1000 Times</button>
        <button onClick={() => handleRoll(10000)}>Roll 10000 Times</button>
      </div>

      <div className="chart-container">
        <h2>Roll Distribution</h2>
        <BarChart width={800} height={400} data={stats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="face"
            label={{ value: "Face Value", position: "bottom" }}
          />
          <YAxis label={{ value: "Count", angle: -90, position: "left" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="fairCount" name="Fair Dice" fill="#8884d8" />
          <Bar dataKey="unfairCount" name="Unfair Dice" fill="#82ca9d" />
          {stats.map((stat, index) => (
            <ReferenceLine
              key={`fair-${index}`}
              y={stat.expectedFair}
              stroke="#8884d8"
              strokeDasharray="3 3"
              label={index === 0 ? "Expected Fair" : undefined}
            />
          ))}
          {stats.map((stat, index) => (
            <ReferenceLine
              key={`fair-lower-${index}`}
              y={stat.expectedFairLower}
              stroke="#8884d8"
              strokeOpacity={0.3}
              label={index === 0 ? "-1σ" : undefined}
            />
          ))}
          {stats.map((stat, index) => (
            <ReferenceLine
              key={`fair-upper-${index}`}
              y={stat.expectedFairUpper}
              stroke="#8884d8"
              strokeOpacity={0.3}
              label={index === 0 ? "+1σ" : undefined}
            />
          ))}
        </BarChart>
      </div>

      <div className="stats-container">
        <h2>Statistics</h2>
        <p>Total Rolls: {rolls.length}</p>
        <p>Fair Dice Rolls: {rolls.filter((r) => r.isFair).length}</p>
        <p>Unfair Dice Rolls: {rolls.filter((r) => !r.isFair).length}</p>
      </div>
    </div>
  );
}

export default App;
