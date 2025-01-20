export interface DiceConfig {
  faces: number;
  weights?: number[];
}

export interface RollResult {
  value: number;
  isFirst: boolean;
}

export class DiceService {
  private dice1: DiceConfig;
  private dice2: DiceConfig;
  private unfairIsFirst: boolean;

  static generateRandomWeights(faces: number): number[] {
    return Array.from({ length: faces }, () => 1 + Math.random());
  }

  constructor(unfairWeights: number[], unfairIsFirst?: boolean) {
    const faces = unfairWeights.length;
    const fairConfig = {
      faces,
      weights: Array(faces).fill(1 / faces),
    };

    // Normalize weights to sum to 1
    const sum = unfairWeights.reduce((a, b) => a + b, 0);
    const unfairConfig = {
      faces,
      weights: unfairWeights.map((w) => w / sum),
    };

    // Randomly assign which dice is unfair if not specified
    this.unfairIsFirst = unfairIsFirst ?? Math.random() < 0.5;
    this.dice1 = this.unfairIsFirst ? unfairConfig : fairConfig;
    this.dice2 = this.unfairIsFirst ? fairConfig : unfairConfig;
  }

  private rollWeighted(config: DiceConfig): number {
    const weights =
      config.weights || Array(config.faces).fill(1 / config.faces);
    const random = Math.random();
    let sum = 0;

    for (let i = 0; i < weights.length; i++) {
      sum += weights[i];
      if (random <= sum) {
        return i + 1;
      }
    }

    return weights.length; // Fallback to last face
  }

  private rollDice(isFirst: boolean): RollResult {
    const config = isFirst ? this.dice1 : this.dice2;
    return {
      value: this.rollWeighted(config),
      isFirst,
    };
  }

  rollMany(count: number, isFirst: boolean): RollResult[] {
    return Array.from({ length: count }, () => this.rollDice(isFirst));
  }

  getExpectedProbabilities(): {
    first: number[];
    second: number[];
    fairStdDev: number;
  } {
    const fairProb = 1 / this.dice1.faces;
    return {
      first: this.dice1.weights || Array(this.dice1.faces).fill(fairProb),
      second: this.dice2.weights || Array(this.dice2.faces).fill(fairProb),
      fairStdDev: Math.sqrt(fairProb * (1 - fairProb)),
    };
  }

  getFaces(): number {
    return this.dice1.faces;
  }

  isFirstUnfair(): boolean {
    return this.unfairIsFirst;
  }
}
