import { FC } from "react";
import { ActionPictureProps } from "../types/ActionPictureProps";
import { ActionPictureArea } from "./ActionPictureArea";

export const ActionPicture: FC<ActionPictureProps> = ({ imageSrc, areas }) => {
  return (
    <div className="overflow-hidden rounded-2xl relative">
      <img src={imageSrc} alt="problem images" />
      {areas?.map((area) => (
        <ActionPictureArea key={area.x + area.y} {...area} />
      ))}
    </div>
  );
};
