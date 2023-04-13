import React from 'react';

export const PageContext = React.createContext<number>(1);
export const SetPageContext = React.createContext<
  React.Dispatch<React.SetStateAction<number>>
>(() => {});
