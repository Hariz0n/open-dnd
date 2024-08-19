import { createContext } from "react";
import { AnswerContextType } from "../types/AnswerContextType";

const DEFAULT_CONTEXT: AnswerContextType = {
  answer: {},
  setAnswer: () => {},
};

export const answerContext = createContext<AnswerContextType>(DEFAULT_CONTEXT);
