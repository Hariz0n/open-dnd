import { ProblemVariant } from "@/entities/Problem";
import { FC } from "react";
import { ActionVariantProps } from "../types/ActionVariantProps";
import { Badge } from "@/shared";

export const ActionVariant: FC<ActionVariantProps> = ({
  text,
  chipChar,
  chipTitle,
}) => {
  return (
    <ProblemVariant text={text}>
      <div className="flex items-center gap-2 p-1 pr-2 text-our-blue bg-our-light-blue rounded-xl">
        <Badge>{chipChar}</Badge>
        <span>{chipTitle}</span>
      </div>
    </ProblemVariant>
  );
};
