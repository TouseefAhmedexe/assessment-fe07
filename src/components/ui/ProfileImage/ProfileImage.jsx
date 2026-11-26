import { getInitials, joinClasses } from "../../../utils/index.js";
import "./ProfileImage.css";

export default function ProfileImage({ src, name, size = "medium" }) {
    const className = joinClasses("profile-image", `profile-image--${size}`);

    if (src !== undefined && src !== "") {
        return <img className={className} src={src} alt={name} />;
    }

    return (
        <span className={className} role="img" aria-label={name}>
            {getInitials(name)}
        </span>
    );
}
