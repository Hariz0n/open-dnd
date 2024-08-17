import { CSSProperties, FC } from "react";
import { ActionPictureAreaProps } from "../types/ActionPictureAreaProps";

export const ActionPictureArea: FC<ActionPictureAreaProps> = ({x, y, width, height}) => {
  const style = {
    top: x,
    left: y,
    width,
    height
  } satisfies CSSProperties;

  return <div className="absolute border-2 bg-white/20 rounded-xl border-dashed" style={style} />;
};
