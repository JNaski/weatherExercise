import React from "react";


export const FormTextInput = ({id, label, inputRef, autoComplete}) => 
  <div className="mb-5 outline relative border border-primary rounded focus-within:border-primary mt-2">
    <input
      className="block p-2 w-5/6 mr-2 ml-3 appearence-none focus:outline-none bg-transparent"
      id={id}
      name={id}
      {...inputRef}
      type='text'
      autoComplete={autoComplete || 'on'}
      placeholder=' '
    />
    <label htmlFor={id} className="absolute rounded text-sm text-gray-600 top-0 bg-gray-300 p-2 pt-3 -z-1 duration-300 origin-0 leading-tight">
      {label}
    </label>
  </div>;
