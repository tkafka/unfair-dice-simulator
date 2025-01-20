# Unfair Dice Simulator

A simulator that allows comparing fair and unfair dice rolls with visualization.

## Features

1. Two dice implementations:

   - Fair dice (equal probability for all faces)
   - Unfair dice (configurable weights for each face)

2. Rolling options:

   - Single roll (1 time)
   - Batch rolls (10, 100, 1000 times)

3. Visualization:
   - Column chart showing the distribution of rolls for both fair and unfair dice
   - Expected count line for fair dice
   - Standard deviation range (±1σ) for fair dice to show expected variation

## Technical Implementation

- Built with React + TypeScript
- Uses Recharts for data visualization
- Implements weighted random number generation for unfair dice
- Statistical analysis including expected values and standard deviation calculations
- Visualization of statistical bounds for fair dice distribution
