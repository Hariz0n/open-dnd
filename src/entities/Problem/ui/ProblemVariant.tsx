import { FC } from "react";
import { ProblemVariantProps } from "../types/ProblemVariantProps";

export const ProblemVariant: FC<ProblemVariantProps> = ({ text, children }) => {
  return (
    <li className="flex flex-col items-start gap-4 p-8 shadow-lg rounded-2xl">
      {children}
      <p>{text}</p>
    </li>
  );
};
