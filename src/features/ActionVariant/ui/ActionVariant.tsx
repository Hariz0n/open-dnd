import { ProblemDraggable, ProblemVariant } from "@/entities/Problem";
import { FC } from "react";
import { ActionVariantProps } from "../types/ActionVariantProps";
import { Badge, cn } from "@/shared";
import { useAnswerContext } from "@/entities/Answer";
import { useDndContext } from "@dnd-kit/core";

export const ActionVariant: FC<ActionVariantProps> = ({
  id,
  text,
  chipChar,
  chipTitle,
}) => {
  const { answer } = useAnswerContext();
  const { active } = useDndContext();
  const isAnswered = Object.values(answer).some((ans) => ans && ans.id === id);
  const isActive = active?.id === id;

  return (
    <ProblemVariant text={text}>
      <div
        className={cn(
          "flex items-center gap-2 p-1 pr-2 text-our-blue bg-our-light-blue rounded-xl transition-colors",
          (isAnswered || isActive) && "bg-our-light-gray text-our-gray"
        )}
      >
        {isAnswered ? (
          <Badge variant="shadow">{chipChar}</Badge>
        ) : (
          <ProblemDraggable id={id} chipChar={chipChar} />
        )}
        <span>{chipTitle}</span>
      </div>
    </ProblemVariant>
  );
};
