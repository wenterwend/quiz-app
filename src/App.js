import React, { useState } from "react";
import questions from "./data/questions";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSubmit = (answer) => {
    setUserAnswers({ ...userAnswers, [currentQuestion.id]: answer });

    // Validate the answer
    const isCorrect = currentQuestion.validateAnswer(answer);
    console.log(`Question ${currentQuestion.id} is ${isCorrect ? "correct" : "incorrect"}`);

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz completed!");
    }
  };

  return (
    <div className="App">
      <h1>Quiz Application</h1>
      <div className="quiz-container">
        <h2>{currentQuestion.prompt}</h2>
        {/* Render options dynamically based on question type */}
        {currentQuestion.type === "multiple-choice-single" && (
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswerSubmit(index)}>{option}</button>
              </li>
            ))}
          </ul>
        )}
        {currentQuestion.type === "true-false" && (
          <div>
            <button onClick={() => handleAnswerSubmit(true)}>True</button>
            <button onClick={() => handleAnswerSubmit(false)}>False</button>
          </div>
        )}
        {currentQuestion.type === "fill-in-the-blank" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const answer = e.target.elements.answer.value;
              handleAnswerSubmit(answer);
            }}
          >
            <input type="text" name="answer" placeholder="Your answer" />
            <button type="submit">Submit</button>
          </form>
        )}
        {/* Add rendering logic for other question types */}
      </div>
    </div>
  );
}

export default App;