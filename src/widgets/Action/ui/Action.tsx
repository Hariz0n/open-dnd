import { ActionPicture } from "@/features/ActionPicture";
import { FC } from "react";
import { ActionProps } from "../types/ActionProps";
import { ActionVariant } from "@/features/ActionVariant";

export const Action: FC<ActionProps> = ({ dropzone, variants }) => {
  return (
    <section className="flex flex-col gap-8">
      <ActionPicture {...dropzone} />
      <ul>
        {variants.map((variant) => (
          <ActionVariant key={variant.chipTitle + variant.text} {...variant} />
        ))}
      </ul>
    </section>
  );
};
