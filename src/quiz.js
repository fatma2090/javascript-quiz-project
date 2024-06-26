class Quiz {
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    // 2. getQuestion()  
      getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    // 3. moveToNextQuestion()
        moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

        // 4. shuffleQuestions()
    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }

        // 5. checkAnswer(answer)
    checkAnswer(answer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (answer === currentQuestion.answer) {
            this.correctAnswers++;
        }
    }

    // 6. hasEnded()
        hasEnded() {
        return this.currentQuestionIndex === this.questions.length;
    }

        // 7. filterQuestionsByDifficulty()
    filterQuestionsByDifficulty(difficulty) {
        if (typeof difficulty === 'number' && difficulty >= 1 && difficulty <= 3) {
            this.questions = this.questions.filter(question => question.difficulty === difficulty);
        }
    }

    // 8. averageDifficulty()
    averageDifficulty() {
        const sumDifficulty = this.questions.reduce((acc, question) => acc + question.difficulty, 0);
        return sumDifficulty / this.questions.length;
    }
}

module.exports = Quiz;

