import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-teal-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-teal-300";
  return (
    <button
      className={`${buttonStyles} rounded-xl border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
