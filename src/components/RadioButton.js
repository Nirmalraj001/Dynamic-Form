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
      <div className="radio-group">
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
      </div>
      {error && <span className='error'>{error}</span>}
    </>
  );
};

export default RadioButton;
