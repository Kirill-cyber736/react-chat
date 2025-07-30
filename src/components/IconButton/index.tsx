import type { ReactElement } from "react";
import "./style.css"

export interface IIconButtonProps {
  iconSrc: string;
  onClick: () => void;
  height?: string;
}

const DEFAULT_HEIGHT = "24px";

const IconButton = ({
  iconSrc,
  onClick,
  height = DEFAULT_HEIGHT,
}: IIconButtonProps): ReactElement => {
  return (
    <button className="icon-button" onClick={onClick}>
      <img src={iconSrc} height={height}/>
    </button>
  );
};

export default IconButton;