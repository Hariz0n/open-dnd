import { PropsWithChildren } from "react";

export type AnswerContextProps = PropsWithChildren & {
  areas: Problem.Area[]
}