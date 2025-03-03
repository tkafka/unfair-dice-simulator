export interface Translations {
  title: string;
  subtitle: string;
  sourceCode: string;
  madeWith: string;
  whichDiceUnfair: string;
  dice1: string;
  dice2: string;
  correctGuess: string;
  wrongGuess: string;
  roll1: string;
  roll10: string;
  roll100: string;
  roll1000: string;
  roll10000: string;
  newDice: string;
  clearRolls: string;
  distribution: string;
  value: string;
  count: string;
  expectedDistribution: string;
  statistics: string;
  totalRolls: string;
  dice1Rolls: string;
  dice2Rolls: string;
}

const en: Translations = {
  title: "Dices are not fair!",
  subtitle: "Unfair dice simulation game",
  sourceCode: "Source code",
  madeWith: "Made with",
  whichDiceUnfair: "Which dice is unfair?",
  dice1: "Blue dice",
  dice2: "Green dice",
  correctGuess: "🎉 Correct! You found the unfair dice!",
  wrongGuess:
    "🤔 Hmm... Try to look better at the distribution of rolls, or roll a bit more",
  roll1: "Roll 1×",
  roll10: "10×",
  roll100: "100×",
  roll1000: "1,000×",
  roll10000: "10,000×",
  newDice: "New dice",
  clearRolls: "Clear rolls",
  distribution: "Roll distribution",
  value: "Value",
  count: "Count",
  expectedDistribution: "Expected distribution ±1σ",
  statistics: "Statistics",
  totalRolls: "Total rolls",
  dice1Rolls: "Blue dice: {0} rolls",
  dice2Rolls: "Green dice: {0} rolls",
};

const cs: Translations = {
  title: "Kostky nejsou fér!",
  subtitle: "Simulační hra s podvodnou kostkou",
  sourceCode: "Zdrojový kód",
  madeWith: "Vytvořeno pomocí",
  whichDiceUnfair: "Která kostka není fér?",
  dice1: "Modrá kostka",
  dice2: "Zelená kostka",
  correctGuess: "🎉 Správně! Našel jsi podvodnou kostku!",
  wrongGuess: "🤔 Hmm... Zkus se líp podívat na rozložení hodů, nebo házej dál",
  roll1: "Hodit 1×",
  roll10: "10×",
  roll100: "100×",
  roll1000: "1 000×",
  roll10000: "10 000×",
  newDice: "Nové kostky",
  clearRolls: "Vymazat hody",
  distribution: "Rozložení hodů",
  value: "Hodnota",
  count: "Počet",
  expectedDistribution: "Očekávané rozložení ±1σ",
  statistics: "Statistika",
  totalRolls: "Celkem hodů",
  dice1Rolls: "Modrá kostka: {0} hodů",
  dice2Rolls: "Zelená kostka: {0} hodů",
};

export class TranslationService {
  private static instance: TranslationService;
  private currentLanguage: "en" | "cs";
  private translations: { en: Translations; cs: Translations } = { en, cs };

  private constructor() {
    const savedLang = document.cookie
      .split("; ")
      .find((row) => row.startsWith("lang="));
    this.currentLanguage = (savedLang?.split("=")[1] as "en" | "cs") || "en";
  }

  public static getInstance(): TranslationService {
    if (!TranslationService.instance) {
      TranslationService.instance = new TranslationService();
    }
    return TranslationService.instance;
  }

  public getCurrentLanguage(): "en" | "cs" {
    return this.currentLanguage;
  }

  public setLanguage(lang: "en" | "cs"): void {
    this.currentLanguage = lang;
    document.cookie = `lang=${lang};path=/;max-age=31536000`; // 1 year
  }

  public t(key: keyof Translations, ...params: string[]): string {
    let text = this.translations[this.currentLanguage][key];
    params.forEach((param, index) => {
      text = text.replace(`{${index}}`, param);
    });
    return text;
  }
}
