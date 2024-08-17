import { ActionPicture } from "@/features/ActionPicture";
import { FC } from "react";
import { ActionProps } from "../types/ActionProps";

export const Action: FC<ActionProps> = ({ dropzone }) => {
  return (
    <section>
      <ActionPicture {...dropzone} />
    </section>
  );
};
