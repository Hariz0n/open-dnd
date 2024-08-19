import { ActionPicture } from "@/features/ActionPicture";
import { FC, useState } from "react";
import { ActionProps } from "../types/ActionProps";
import { ActionVariant } from "@/features/ActionVariant";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { Badge } from "@/shared";
import { useAnswerContext } from "@/entities/Answer";

export const Action: FC<ActionProps> = ({ dropzone, variants }) => {
  const { answer, setAnswer } = useAnswerContext();
  const [active, setActive] = useState<Problem.Answer[string] | null>(null);

  const handleDragEnd = (e: DragEndEvent) => {
    if (!e.over) {
      const activeKey =
        Object.keys(answer).find((key) => answer[key]?.id === e.active.id) ||
        null;
      if (activeKey) {
        setAnswer((prev) => ({
          ...prev,
          [activeKey]: null
        }))
      }
    }
    if (e.over) {
      const overValue = answer[e.over!.id];
      const activeKey =
        Object.keys(answer).find((key) => answer[key]?.id === e.active.id) ||
        null;
      if (overValue) {
        if (activeKey) {
          setAnswer((prev) => ({
            ...prev,
            [e.over!.id]: prev[activeKey],
            [activeKey]: overValue,
          }));
        } else {
          setAnswer((prev) => ({
            ...prev,
            [e.over!.id]: {
              id: e.active.id as string,
              chipChar: e.active.data.current!.chipChar,
            },
          }));
        }
      } else {
        if (activeKey) {
          setAnswer((prev) => ({
            ...prev,
            [e.over!.id]: prev[activeKey],
            [activeKey]: null,
          }));
        } else {
          setAnswer((prev) => ({
            ...prev,
            [e.over!.id]: {
              id: e.active.id as string,
              chipChar: e.active.data.current!.chipChar,
            },
          }));
        }
      }
    }

    setActive(null);
  };

  const handleDragStart = (e: DragStartEvent) => {
    setActive({
      id: e.active.id as string,
      chipChar: e.active.data.current!.chipChar,
    });
  };

  return (
    <section className="flex flex-col gap-8">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <ActionPicture {...dropzone} />
        <ul>
          {variants.map((variant) => (
            <ActionVariant
              key={variant.chipTitle + variant.text}
              {...variant}
            />
          ))}
        </ul>
        <DragOverlay>
          {active ? <Badge>{active.chipChar}</Badge> : null}
        </DragOverlay>
      </DndContext>
    </section>
  );
};
