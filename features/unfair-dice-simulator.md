# Unfair Dice Simulator

A simulator that allows comparing fair and unfair dice rolls with visualization.

## Features

1. Interactive guessing game:

   - Two dice labeled as "Dice 1" and "Dice 2"
   - One randomly chosen to be unfair (with randomly generated weights)
   - Players can roll dice multiple times to observe distributions
   - Make a guess and get instant feedback with emoji reactions

2. Interactive features:

   - Roll dice (1, 10, 100, 1000, or 10000 times)
   - Generate new random dice with "New Random Dice" button
   - Clear current rolls with "Clear Rolls" button

3. Visualization:
   - Column chart showing the distribution of rolls for both fair and unfair dice
   - Expected count line for fair dice
   - Standard deviation range (±1σ) for fair dice to show expected variation
   - Responsive chart that adjusts to screen width
   - Two-column layout on larger screens with game controls on the left and chart on the right

## Technical Implementation

- Built with React + TypeScript
- Uses Recharts for data visualization
- Implements weighted random number generation for unfair dice
- Statistical analysis including expected values and standard deviation calculations
- Visualization of statistical bounds for fair dice distribution
- Responsive layout using Tailwind CSS

## Visual Design

- Clean, modern interface with card-based layout
- Consistent color scheme matching the visualization
- Interactive buttons with visual feedback
- Responsive containers with subtle shadows
- Clear visual hierarchy and spacing
- Compact header to maximize content space
- Optimized layout for both mobile and desktop views
