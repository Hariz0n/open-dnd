import { ProblemInfo } from "@/entities/Problem";
import { FC } from "react";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "../libs/defaults";

export const MainPage: FC = () => {
  return <article className="p-5">
    <ProblemInfo title={DEFAULT_TITLE} description={DEFAULT_DESCRIPTION} />
  </article>
}