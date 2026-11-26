import { joinClasses, pluralize } from "../../../utils/index.js";
import "./DepartmentCard.css";

export default function DepartmentCard({ department, employeeCount, isActive = false, getHref }) {
    const href = getHref(department.id);

    return (
        <article className={joinClasses("department-card", isActive && "department-card--active")}>
            <div className="department-card__header">
                <h3 className="department-card__title">
                    <a className="department-card__link" href={href} aria-current={isActive ? "page" : undefined}>
                        {department.name}
                    </a>
                </h3>
                <span className="department-card__count">{pluralize(employeeCount, "employee")}</span>
            </div>
            <p className="department-card__description">{department.description}</p>
        </article>
    );
}
