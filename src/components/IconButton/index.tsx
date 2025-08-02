import { ICON_SRC_PREFIX, ICON_SRC_SUFFIX } from "../../utils/constants";
import type { ReactElement } from "react";
import "./style.css"

export interface IIconButtonProps {
  iconSrc: string;
  onClick: () => void;
  height: string;
}

const DEFAULT_HEIGHT = "24px";

const IconButton = ({
  iconSrc,
  onClick,
  height = DEFAULT_HEIGHT,
}: IIconButtonProps): ReactElement => {
  return (
    <button className="icon-button" onClick={onClick}>
      <img src={ICON_SRC_PREFIX + iconSrc + ICON_SRC_SUFFIX} height={height}/>
    </button>
  );
};

export default IconButton;