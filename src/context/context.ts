import { createContext } from "react";
import { answerProp, answerPropAdv } from "../types/types";
type AppContextInterface = {
  answer: answerPropAdv[];
  updateAnswer: (val: answerPropAdv) => void;
};

export const AppContext = createContext<AppContextInterface | undefined>(
  undefined
);

// export const value: AppContextInterface = {
//   answer: null,
//   updateAnswer: () => undefined
// };

// const AppContextProvider = ({ Children }) => (
//   <AppContext.Provider value={sampleAppContext}>{Children}</AppContext.Provider>
// );

// export default AppContextProvider;
