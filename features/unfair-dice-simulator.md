# Unfair Dice Simulator

A simulator that allows comparing fair and unfair dice rolls with visualization.

The application includes a descriptive subtitle "Unfair dice simulation game" (with Czech translation "Simulační hra s podvodnou kostkou") that appears below the main title.

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
   - Expected count line and standard deviation range (±1σ) appear only after first roll
   - Expected value is always positioned at 2/3 of the chart height for optimal visibility
   - Chart automatically scales to maintain this proportion while accommodating actual roll counts
   - Responsive chart that adjusts to screen width
   - Responsive grid layout with optimized element ordering:
     - Mobile: Game → Roll Actions → Chart → Stats
     - Desktop: Two-column layout with controls on left, chart on right

## Technical Implementation

- Built with React + TypeScript
- Uses Recharts for data visualization with optimized margins to ensure axis labels are fully visible
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
- Footer with links to source code on GitHub and Cline (with translations)
