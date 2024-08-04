import React from 'react';

const CustomTextInput = ({ label, error, touched, ...props }) => {
  return (
    <div className="mb-4">
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error && touched ? 'border-red-500' : ''}`}
        {...props}
      />
      {error && touched && <div className="text-red-500 text-xs italic">{error}</div>}
    </div>
  );
};

export default CustomTextInput;
