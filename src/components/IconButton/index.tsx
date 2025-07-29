import type { ReactElement } from "react";
import "./style.css"

export interface IIconButtonProps {
  src: string;
  onClick: () => void;
  height?: string;
}

const DEFAULT_HEIGHT = "24px";

const IconButton = ({
  src,
  onClick,
  height = DEFAULT_HEIGHT,
}: IIconButtonProps): ReactElement => {
  return (
    <button className="icon-button" onClick={onClick}>
      <img src={src} height={height}/>
    </button>
  );
};

export default IconButton;