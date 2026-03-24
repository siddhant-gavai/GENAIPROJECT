import React from 'react';

const InterviewCard = ({ title, date, score }) => {
  return (
    <div className="bg-[#1a1a1a] border border-[#333] p-4 rounded-xl shadow-md">
      <h4 className="text-lg font-bold">{title || "Software Engineer - Google"}</h4>
      <p className="text-sm text-gray-400">{date || "Today"}</p>
      <div className="mt-2 text-green-400 font-mono text-sm">Score: {score || "85/100"}</div>
    </div>
  );
};

export default InterviewCard;
