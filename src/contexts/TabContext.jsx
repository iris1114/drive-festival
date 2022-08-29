import React, { createContext, useState } from "react";

const TabContext = createContext({
  tabData: {
    id: "voteHotCar",
  },
  setTabData: null,
});

export const TabProvider = ({ children }) => {
  const [TabContextData, setTabContextData] = useState({
    id: "voteHotCar",
  });
  return (
    <TabContext.Provider
      value={{
        tabData: TabContextData,
        setTabData: setTabContextData,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export default TabContext;
