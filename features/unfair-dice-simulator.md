# Unfair Dice Simulator

A simulator that allows comparing fair and unfair dice rolls with visualization.

## Features

1. Two dice implementations:

   - Two dice labeled as "Dice 1" and "Dice 2"
   - One randomly chosen to be unfair (with randomly generated weights)
   - Can you guess which one is unfair?

2. Interactive features:

   - Roll dice (1, 10, 100, or 1000 times)
   - Generate new random dice with "New Random Dice" button
   - Clear current rolls with "Clear Rolls" button

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
