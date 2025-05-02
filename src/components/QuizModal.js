import React, { useState } from "react";
import "../css/QuizModal.css"; // Assuming you have a CSS file for styling the modal

const QuizModal = ({ isOpen, onClose, onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    type: "terms",
    trueFalse: false,
    multipleChoice: false,
    matching: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedOptions);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select Quiz Options</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Quiz Type:
              <select name="type" value={selectedOptions.type} onChange={handleChange}>
                <option value="terms">Terms</option>
                <option value="definitions">Definitions</option>
                <option value="both">Both</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              True/False:
              <input type="checkbox" name="trueFalse" checked={selectedOptions.trueFalse} onChange={handleChange} />
            </label>
          </div>
          <div>
            <label>
              Multiple Choice:
              <input type="checkbox" name="multipleChoice" checked={selectedOptions.multipleChoice} onChange={handleChange} />
            </label>
          </div>
          <div>
            <label>
              Matching Term:
              <input type="text" name="matching" value={selectedOptions.matching} onChange={handleChange} placeholder="Enter definitions separated by commas" />
            </label>
          </div>
          <button type="submit">Create Quiz</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default QuizModal;