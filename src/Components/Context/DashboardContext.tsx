import React, { createContext, ReactNode, useState } from 'react';

interface Props {
  children?: object;
  // any props that come into the component
}

export const DashBoardContext = createContext({} as any);
const DashboardContext = ({ children, ...props }: Props) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DashBoardContext.Provider
      value={{ darkMode, setDarkMode }}
      {...children}
    ></DashBoardContext.Provider>
  );
};

export default DashboardContext;
