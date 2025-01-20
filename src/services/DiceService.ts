export interface DiceConfig {
  faces: number;
  weights?: number[];
}

export interface RollResult {
  value: number;
  isFair: boolean;
}

export class DiceService {
  private fairDice: DiceConfig;
  private unfairDice: DiceConfig;

  constructor(unfairWeights: number[]) {
    const faces = unfairWeights.length;
    this.fairDice = {
      faces,
      weights: Array(faces).fill(1 / faces),
    };

    // Normalize weights to sum to 1
    const sum = unfairWeights.reduce((a, b) => a + b, 0);
    this.unfairDice = {
      faces,
      weights: unfairWeights.map((w) => w / sum),
    };
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

  rollFair(): RollResult {
    return {
      value: this.rollWeighted(this.fairDice),
      isFair: true,
    };
  }

  rollUnfair(): RollResult {
    return {
      value: this.rollWeighted(this.unfairDice),
      isFair: false,
    };
  }

  rollMany(count: number, isFair: boolean): RollResult[] {
    const results: RollResult[] = [];
    const rollMethod = isFair
      ? this.rollFair.bind(this)
      : this.rollUnfair.bind(this);

    for (let i = 0; i < count; i++) {
      results.push(rollMethod());
    }

    return results;
  }

  getExpectedProbabilities(): {
    fair: number[];
    unfair: number[];
    fairStdDev: number;
  } {
    const fairProb = 1 / this.fairDice.faces;
    // For a fair dice, standard deviation = sqrt(np(1-p))
    // where n is number of trials and p is probability of success
    return {
      fair: Array(this.fairDice.faces).fill(fairProb),
      unfair:
        this.unfairDice.weights || Array(this.unfairDice.faces).fill(fairProb),
      fairStdDev: Math.sqrt(fairProb * (1 - fairProb)),
    };
  }

  getFaces(): number {
    return this.fairDice.faces;
  }
}
