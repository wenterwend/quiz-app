import React, { useState } from 'react';

const QuizOptions = ({ onOptionsChange }) => {
    const [selectedOptions, setSelectedOptions] = useState({
        terms: false,
        definitions: false,
        trueFalse: false,
        multipleChoice: false,
        matching: false,
    });

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [name]: checked,
        }));
        onOptionsChange({ ...selectedOptions, [name]: checked });
    };

    return (
        <div className="quiz-options">
            <h3>Select Quiz Options</h3>
            <label>
                <input
                    type="checkbox"
                    name="terms"
                    checked={selectedOptions.terms}
                    onChange={handleChange}
                />
                Include Terms
            </label>
            <label>
                <input
                    type="checkbox"
                    name="definitions"
                    checked={selectedOptions.definitions}
                    onChange={handleChange}
                />
                Include Definitions
            </label>
            <label>
                <input
                    type="checkbox"
                    name="trueFalse"
                    checked={selectedOptions.trueFalse}
                    onChange={handleChange}
                />
                True/False Questions
            </label>
            <label>
                <input
                    type="checkbox"
                    name="multipleChoice"
                    checked={selectedOptions.multipleChoice}
                    onChange={handleChange}
                />
                Multiple Choice Questions
            </label>
            <label>
                <input
                    type="checkbox"
                    name="matching"
                    checked={selectedOptions.matching}
                    onChange={handleChange}
                />
                Matching Terms
            </label>
        </div>
    );
};

export default QuizOptions;