import React, { useState } from 'react';
import QuizForm from './components/QuizForm';
import QuizModal from './components/QuizModal';
import QuizOptions from './components/QuizOptions';
import termsData from './data/terms';

function App() {
    const [terms, setTerms] = useState(termsData);
    const [showModal, setShowModal] = useState(false);
    const [quizOptions, setQuizOptions] = useState({});

    const handleAddTerm = (newTerm) => {
        setTerms([...terms, newTerm]);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleQuizOptionsChange = (options) => {
        setQuizOptions(options);
        handleCloseModal();
    };

    return (
        <div className="App">
            <h1>Quiz Application</h1>
            <QuizForm onAddTerm={handleAddTerm} />
            <button onClick={handleOpenModal}>Create Quiz</button>
            {showModal && (
                <QuizModal onClose={handleCloseModal}>
                    <QuizOptions onOptionsChange={handleQuizOptionsChange} />
                </QuizModal>
            )}
            {/* Render quiz based on quizOptions here */}
        </div>
    );
}

export default App;