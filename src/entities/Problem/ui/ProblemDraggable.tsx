import { Badge } from "@/shared";
import { useDraggable } from "@dnd-kit/core";
import { FC } from "react";
import { ProblemDraggableProps } from "../types/ProblemDraggableProps";

export const ProblemDraggable: FC<ProblemDraggableProps> = ({id,chipChar}) => {
  const { setNodeRef, listeners, attributes, isDragging } = useDraggable({
    id,
    data: {
      id,
      chipChar
    }
  });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      <Badge variant={isDragging ? 'shadow' : 'default'}>{chipChar}</Badge>
    </div>
  );
};
