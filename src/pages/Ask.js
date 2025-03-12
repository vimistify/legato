import React, { useState } from "react";
import "../styles.css";

const Ask = () => {
  const [question, setQuestion] = useState("");

  return (
    <div className="ask">
      <h2>Ask a Legal Question</h2>
      <input 
        type="text" 
        placeholder="Type your question here..." 
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button className="btn">Generate Song</button>
    </div>
  );
};

export default Ask;
