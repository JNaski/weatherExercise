import React from 'react';

export const PrimaryButton = ({children, className, ...rest}) =>
  <button className={"border-gray-300 border text-white bg-blue-500 hover:bg-blue-300 rounded py-2 px-3 " + 
  (className || '')} {...rest}>
      {children}
  </button>;