# Translations Feature

The application supports multiple languages with a language switcher in the top-right corner. Currently supported languages:

- English (default)
- Czech (Čeština)

## Implementation Details

- Uses a singleton TranslationService to manage translations across the app
- Language preference is persisted in a cookie with 1-year expiration
- All UI strings are externalized into translation objects
- Supports parameterized translations (e.g., "{0} rolls")

## Translation Keys

The following translation keys are available:

```typescript
interface Translations {
  title: string; // Main title of the app
  whichDiceUnfair: string; // Question asking which dice is unfair
  dice1: string; // Label for first dice
  dice2: string; // Label for second dice
  correctGuess: string; // Message shown when correct dice is identified
  wrongGuess: string; // Message shown when wrong dice is selected
  roll1: string; // Label for rolling once
  roll10: string; // Label for rolling 10 times
  roll100: string; // Label for rolling 100 times
  roll1000: string; // Label for rolling 1,000 times
  roll10000: string; // Label for rolling 10,000 times
  newDice: string; // Label for new dice button
  clearRolls: string; // Label for clearing rolls
  distribution: string; // Title for distribution chart
  value: string; // Label for value axis
  count: string; // Label for count axis
  expectedDistribution: string; // Label for expected distribution
  statistics: string; // Title for statistics section
  totalRolls: string; // Label for total rolls count
  dice1Rolls: string; // Label for first dice rolls count
  dice2Rolls: string; // Label for second dice rolls count
}
```

## Usage

To use translations in components:

```typescript
const translationService = TranslationService.getInstance();

// Simple translation
translationService.t("key");

// Translation with parameters
translationService.t("dice1Rolls", count.toString());
```

## Adding New Languages

To add a new language:

1. Create a new translation object in `TranslationService.ts`
2. Add the language option to the language switcher in `App.tsx`
3. Update the type definition of `currentLanguage` in `TranslationService`
