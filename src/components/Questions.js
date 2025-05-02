class Question {
  constructor(id, prompt, type) {
    this.id = id;
    this.prompt = prompt;
    this.type = type; // e.g., "multiple-choice-single", "true-false"
  }

  validateAnswer(userAnswer) {
    throw new Error("validateAnswer must be implemented by subclass.");
  }
}

class MultipleChoiceSingle extends Question {
  constructor(id, prompt, options, correctIndex) {
    super(id, prompt, "multiple-choice-single");
    this.options = options;
    this.correctIndex = correctIndex;
  }

  validateAnswer(userAnswer) {
    return userAnswer === this.correctIndex;
  }
}

class MultipleChoiceMultiple extends Question {
  constructor(id, prompt, options, correctIndices) {
    super(id, prompt, "multiple-choice-multiple");
    this.options = options;
    this.correctIndices = correctIndices.sort();
  }

  validateAnswer(userAnswers) {
    return JSON.stringify(userAnswers.sort()) === JSON.stringify(this.correctIndices);
  }
}

class TrueFalse extends Question {
  constructor(id, prompt, correctAnswer) {
    super(id, prompt, "true-false");
    this.correctAnswer = correctAnswer; // true or false
  }

  validateAnswer(userAnswer) {
    return userAnswer === this.correctAnswer;
  }
}

class Matching extends Question {
  constructor(id, prompt, pairs) {
    super(id, prompt, "matching");
    this.pairs = pairs; // [{left: "HTTP", right: "Web"}, ...]
  }

  validateAnswer(userPairs) {
    return JSON.stringify(userPairs) === JSON.stringify(this.pairs);
  }
}

class FillInTheBlank extends Question {
  constructor(id, prompt, correctAnswer) {
    super(id, prompt, "fill-in-the-blank");
    this.correctAnswer = correctAnswer.toLowerCase();
  }

  validateAnswer(userAnswer) {
    return userAnswer.toLowerCase() === this.correctAnswer;
  }
}

class Ordering extends Question {
  constructor(id, prompt, correctOrder) {
    super(id, prompt, "ordering");
    this.correctOrder = correctOrder;
  }

  validateAnswer(userOrder) {
    return JSON.stringify(userOrder) === JSON.stringify(this.correctOrder);
  }
}

export {
  Question,
  MultipleChoiceSingle,
  MultipleChoiceMultiple,
  TrueFalse,
  Matching,
  FillInTheBlank,
  Ordering,
};
