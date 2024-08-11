import React, { createContext, useState, useContext } from 'react';

const OffsetContext = createContext();

export const OffsetProvider = ({ children }) => {
  const [offset, setOffset] = useState(-8 * window.innerHeight / 100);

  return (
    <OffsetContext.Provider value={{ offset, setOffset }}>
      {children}
    </OffsetContext.Provider>
  );
};

export const useOffset = () => useContext(OffsetContext);
