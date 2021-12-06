import React from 'react';


export const FormSelect = ({id, inputRef, label, options, defaultValue, onChange}) =>
  <div className="mb-3 outline relative h-10 border border-gray rounded focus-within:border-gray mt-2">
    <div className="realtive">
      <select
        className="text-sm block p-2 w-full mr-2 ml-3 appearance-none focus:outline-none bg-transparent"
        id={id}
        name={id}
        {...inputRef}
        onChange={onChange}
        defaultValue={defaultValue || ''}>
        {
          options.map((el, i) => <option key={i} value={el.value}>{el.text}</option>)
        }
      </select>
      <label
        htmlFor={id}
        className={"absolute rounded text-sm text-gray-600 top-0 bg-transparent p-2 pt-3 -z-1 origin-0 leading-tight"}
      >
        {label}
      </label>
    </div>
  </div>;