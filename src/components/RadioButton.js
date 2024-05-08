import React from "react";

const RadioButton = ({
  label,
  options,
  name,
  selectedOption,
  error,
  onChange,
}) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedOption === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default RadioButton;
