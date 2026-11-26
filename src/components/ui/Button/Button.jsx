import { joinClasses } from "../../../utils/index.js";
import "./Button.css";

export default function Button({
    children,
    onClick,
    variant = "primary",
    size = "medium",
    type = "button",
    disabled = false,
    ...rest
}) {
    return (
        <button
            className={joinClasses("button", `button--${variant}`, `button--${size}`)}
            type={type}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
}
