import { joinClasses } from "../../../utils/index.js";
import "./PageHeader.css";

export default function PageHeader({ title, subtitle, level = 1, actions }) {
    const Heading = level === 1 ? "h1" : "h2";

    return (
        <header className={joinClasses("page-header", `page-header--level-${level}`)}>
            <div className="page-header__text">
                <Heading className="page-header__title">{title}</Heading>
                {subtitle !== undefined && <p className="page-header__subtitle">{subtitle}</p>}
            </div>
            {actions !== undefined && <div className="page-header__actions">{actions}</div>}
        </header>
    );
}
