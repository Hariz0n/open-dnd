import { AnswerContext } from "@/entities/Answer";
import { ProblemInfo } from "@/entities/Problem";
import { Action } from "@/widgets/Action";
import { FC } from "react";

export const MainPage: FC = () => {
  const { title, description, dropzone, variants } = window.problem;

  return (
    <article className="p-5 flex flex-col gap-8">
      <ProblemInfo title={title} description={description} />
      <AnswerContext areas={dropzone.areas}>
        <Action dropzone={dropzone} variants={variants} />
      </AnswerContext>
    </article>
  );
};
