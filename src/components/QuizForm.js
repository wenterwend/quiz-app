import React, { useState, useEffect } from "react";

const QuizForm = () => {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [termsList, setTermsList] = useState([]);

  useEffect(() => {
    const storedTerms = JSON.parse(localStorage.getItem("termsList"));
    if (storedTerms) {
      setTermsList(storedTerms);
    }
  }, []);

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleDefinitionChange = (e) => {
    setDefinition(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term && definition) {
      const newTermsList = [...termsList, { term, definition }];
      setTermsList(newTermsList);
      localStorage.setItem("termsList", JSON.stringify(newTermsList));
      setTerm("");
      setDefinition("");
    }
  };

  return (
    <div>
      <h2>Create a Term and Definition</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Term:</label>
          <input type="text" value={term} onChange={handleTermChange} required />
        </div>
        <div>
          <label>Definition:</label>
          <input type="text" value={definition} onChange={handleDefinitionChange} required />
        </div>
        <button type="submit">Add Term</button>
      </form>
      <h3>Terms List</h3>
      <ul>
        {termsList.map((item, index) => (
          <li key={index}>{item.term}: {item.definition}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizForm;