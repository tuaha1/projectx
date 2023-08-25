import React from "react";
import Select from "react-select";

const options = [
  { value: "Java", label: "Java" },
  { value: "JS", label: "JS" },
  { value: "HTML", label: "HTML" },
  // Add more options as needed
];

const MultiSelect = () => {
  return (
    <div>
      <Select isMulti options={options} />
    </div>
  );
};

export default MultiSelect;
