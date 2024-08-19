import { useContext } from "react";
import { answerContext } from "../lib/answerContext";

export const useAnswerContext = () => {
  return useContext(answerContext);
};
