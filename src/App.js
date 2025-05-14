import React, { useState, useEffect } from "react";
import questions from "./data/questions";
import "./css/style.css";

function App() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    // Add or remove the "menu-open" class on the <body> element
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  const handleNavigation = (view) => {
    setCurrentView(view);
    setMenuOpen(false); // Close the menu when navigating
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <header className="app-header">
        <h1>Quiz Application</h1>
        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>
      </header>

      <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <button onClick={() => handleNavigation("displayQuizList")}>
              Display Quiz List
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("createNewQuiz")}>
              Create New Quiz
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("takeQuiz")}>
              Take Selected Quiz
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("removeQuiz")}>
              Remove Selected Quiz
            </button>
          </li>
        </ul>
      </nav>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {currentView === "dashboard" && (
        <div className="dashboard">
          <h2>Welcome to the Quiz App</h2>
          <p>Select an option from the menu to get started.</p>
        </div>
      )}

      {currentView === "displayQuizList" && (
        <div>
          <h2>Display Quiz List</h2>
          <p>This feature is under development.</p>
          <button onClick={() => handleNavigation("dashboard")}>Back to Dashboard</button>
        </div>
      )}

      {currentView === "createNewQuiz" && (
        <div>
          <h2>Create New Quiz</h2>
          <p>This feature is under development.</p>
          <button onClick={() => handleNavigation("dashboard")}>Back to Dashboard</button>
        </div>
      )}

      {currentView === "takeQuiz" && (
        <div>
          <h2>Take Selected Quiz</h2>
          <div className="quiz-container">
            <h2>{currentQuestion.prompt}</h2>
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
          </div>
          <button onClick={() => handleNavigation("dashboard")}>Back to Dashboard</button>
        </div>
      )}

      {currentView === "removeQuiz" && (
        <div>
          <h2>Remove Selected Quiz</h2>
          <p>This feature is under development.</p>
          <button onClick={() => handleNavigation("dashboard")}>Back to Dashboard</button>
        </div>
      )}
    </div>
  );
}

export default App;