import React, { createContext, useState } from "react";

const DialogContext = createContext({
  dialogData: {},
  setDialogData: null,
});

export const DialogProvider = ({ children }) => {
  const [dialogContextData, setDialogContextData] = useState({});
  return (
    <DialogContext.Provider
      value={{
        dialogData: dialogContextData,
        setDialogData: setDialogContextData,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export default DialogContext;
