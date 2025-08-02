import sendingButton from "@assets/icons/sending-button-icon.svg";
import microIconIconSrc from "@assets/icons/micro-icon-disabled.svg";
import type { ReactElement } from "react";
import "./style.css";

interface ISendButtonProps {
    disabled: boolean;
    onClick: () => void;
}

const SendButton = ({ disabled, onClick }: ISendButtonProps): ReactElement => {
    return (
        <button
            type="submit"
            className={`send-button ${!disabled ? "active" : ""}`}
            disabled={disabled}
            onClick={onClick}
        >
            <img src={disabled ? microIconIconSrc : sendingButton} />
        </button>
    );
};

export default SendButton;

