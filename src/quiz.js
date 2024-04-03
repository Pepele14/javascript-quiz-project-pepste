class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex += 1;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }

  checkAnswer(answer) {
    const currentQuestion = this.getQuestion();
    if (answer === currentQuestion.answer) {
      this.correctAnswers += 1;
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex === this.questions.length) {
      return true;
    }
    return false;
  }
}

// should increase 'correctAnswers' by 1 when a correct answer is passed as an argument
// should check if the answer is correct by comparing it to the 'answer' property of the current question

// should receive 1 argument (answer - string).
// should increase correctAnswers by 1 when called with a correct answer for the current question
