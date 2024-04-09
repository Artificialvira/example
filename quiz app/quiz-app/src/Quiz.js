// Quiz.js
import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Jupiter', 'Earth', 'Saturn'],
      correctAnswer: 'Jupiter'
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;

    setUserAnswers([...userAnswers, { question: questions[currentQuestion].question, selectedAnswer, isCorrect }]);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(null); // Set currentQuestion to null to indicate the end of the quiz
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(0);
  };

  return (
    <div className="quiz">
      {currentQuestion !== null ? (
        <>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>Quiz Completed!</h2>
          <h3>Your Score: {score} / {questions.length}</h3>
          <h3>Answers:</h3>
          <ul>
            {userAnswers.map((answer, index) => (
              <li key={index}>
                {answer.question}: {answer.isCorrect ? 'Correct' : 'Wrong'}
              </li>
            ))}
          </ul>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </>
      )}
    </div>
  );
};

export default Quiz;
