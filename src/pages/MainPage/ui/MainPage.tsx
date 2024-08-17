import { ProblemInfo } from "@/entities/Problem";
import { FC } from "react";

export const MainPage: FC = () => {
  const { title, description } = window.problem;

  return (
    <article className="p-5">
      <ProblemInfo title={title} description={description} />
    </article>
  );
};
