import React from 'react';

const QuestionBox = ({ question }) => {
  return (
    <div className="bg-[#171717] border border-[#2a2a2a] p-4 rounded-xl">
      <h3 className="font-semibold">{question || "What is a closure in JavaScript?"}</h3>
    </div>
  );
};

export default QuestionBox;
