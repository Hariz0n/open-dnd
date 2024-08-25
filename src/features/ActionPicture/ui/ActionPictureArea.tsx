import { CSSProperties, FC } from "react";
import { ActionPictureAreaProps } from "../types/ActionPictureAreaProps";
import { useDroppable } from "@dnd-kit/core";
import { ProblemDraggable } from "@/entities/Problem";
import { useAnswerContext } from "@/entities/Answer";

export const ActionPictureArea: FC<ActionPictureAreaProps> = ({
  id,
  x,
  y,
  width,
  height,
}) => {
  const style = {
    top: x,
    left: y,
    width,
    height,
  } satisfies CSSProperties;

  const { setNodeRef } = useDroppable({ id });
  const { answer } = useAnswerContext();

  return (
    <div
      ref={setNodeRef}
      className="absolute border-2 border-our-blue bg-our-blue/20 rounded-xl border-dashed p-2"
      style={style}
    >
      {answer[id] && (
        <ProblemDraggable id={answer[id].id} chipChar={answer[id].chipChar} />
      )}
    </div>
  );
};
