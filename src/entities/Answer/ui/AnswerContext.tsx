import { FC, useEffect, useState } from "react";
import { answerContext } from "../lib/answerContext";
import { AnswerContextProps } from "../types/AnswerContextProps";

export const AnswerContext: FC<AnswerContextProps> = ({ children, areas }) => {
  const [answer, setAnswer] = useState<Problem.Answer>(
    areas.reduce((prev, curr) => {
      prev[curr.id] = null;
      return prev;
    }, {} as Problem.Answer)
  );

  useEffect(() => {
    window.getState = () => JSON.stringify(answer);
  }, [answer]);

  useEffect(() => {
    window.setState = (json) => {
      setAnswer(JSON.parse(json));
    };
  }, [setAnswer]);

  return (
    <answerContext.Provider
      value={{
        answer,
        setAnswer,
      }}
    >
      {children}
    </answerContext.Provider>
  );
};
