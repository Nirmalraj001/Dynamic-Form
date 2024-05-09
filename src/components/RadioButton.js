import React from "react";

const RadioButton = ({
  label,
  options,
  name,
  selectedOption,
  error,
  onChange,
  className
}) => {
  return (
    <>
      <label>{label}</label>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedOption === option}
            onChange={onChange}
            className={className}
          />
          {option}
        </label>
      ))}
      <br/>
      {error && <span className='error-message'>{error}</span>}
    </>
  );
};

export default RadioButton;
