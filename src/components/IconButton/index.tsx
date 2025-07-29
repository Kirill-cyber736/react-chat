import type { ReactElement } from "react";

export interface IIconButtonProps {
  src: string;
  onClick: () => void;
  height?: string;
  weight?: string;
}

const DEFAULT_HEIGHT = "24px";
const DEFAULT_WEIGHT = "24px";

const IconButton = ({
  src,
  onClick,
  height = DEFAULT_HEIGHT,
  weight = DEFAULT_WEIGHT,
}: IIconButtonProps): ReactElement => {
  return (
    <button className="icon-button" onClick={onClick}>
      <img src={src} height={height} />
    </button>
  );
};
