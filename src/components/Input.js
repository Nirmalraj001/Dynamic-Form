import React from 'react';

const Input = ({ type,name, value, onChange, error,className,placeHolder }) => {
    return (
      <div>
        <input type={type} name={name} value={value} onChange={onChange} className={className} placeHolder={placeHolder} />
        {error && <span className='error-message'>{error}</span>}
      </div>
    );
  };
  
  export default Input;