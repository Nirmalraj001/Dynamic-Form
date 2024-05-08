import React from "react";

const SelectBox = ({ label, options, name, value, onChange, error ,className}) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} name={name} onChange={onChange} className={className}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default SelectBox;
