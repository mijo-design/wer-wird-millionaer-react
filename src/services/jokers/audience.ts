export function audienceJoker(
  correctAnswer: 0 | 1 | 2 | 3,
  correctnessProbability: number
): number[] {
  if (correctnessProbability < 0 || correctnessProbability > 1) {
    throw new Error("Correctness probability must be between 0 and 1");
  }

  const distribution = [0, 0, 0, 0];

  // Assign the correct answer a base number of votes
  distribution[correctAnswer] = correctnessProbability * 100;

  // Distribute the remaining votes randomly among the incorrect answers
  const remainingVotes = 100 - distribution[correctAnswer];
  for (let i = 0; i < 4; i++) {
    if (i !== correctAnswer) {
      // Randomly distribute remaining votes
      const votesForOption = (Math.random() * remainingVotes) / 3;
      distribution[i] = votesForOption;
    }
  }

  // Normalize the distribution to ensure it sums up to 100
  const sum = distribution.reduce((acc, val) => acc + val, 0);
  const audienceVotes = distribution.map((val) =>
    Math.round((val / sum) * 100)
  );
  return adjustArrayToSum100(audienceVotes);
}

function adjustArrayToSum100(numbers: number[]): number[] {
  if (numbers.length !== 4) {
    throw new Error("The array must contain exactly 4 numbers.");
  }

  const targetSum = 100;
  let currentSum = numbers.reduce((acc, num) => acc + num, 0);

  while (currentSum !== targetSum) {
    const randomIndex = Math.floor(Math.random() * 4);
    const adjustment = currentSum < targetSum ? 1 : -1;

    numbers[randomIndex] += adjustment;
    currentSum += adjustment;
  }

  return numbers;
}
