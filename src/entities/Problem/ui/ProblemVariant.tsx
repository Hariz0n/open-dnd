import { FC } from "react";
import { ProblemVariantProps } from "../types/ProblemVariantProps";

export const ProblemVariant: FC<ProblemVariantProps> = ({ text, children }) => {
  return (
    <li className="flex flex-col items-start gap-4 p-8 shadow-[8px_8px_24px_0px_rgba(0,0,0,0.05)] rounded-2xl">
      {children}
      <p>{text}</p>
    </li>
  );
};
