import {
    formatDate,
    joinClasses,
    photoPath,
    toClassName
} from "../../../utils/index.js";
import Button from "../../ui/Button/Button.jsx";
import ProfileImage from "../../ui/ProfileImage/ProfileImage.jsx";
import "./EmployeeCard.css";

export default function EmployeeCard({
    employee,
    departmentName,
    compact = false,
    showSalary = true,
    formatSalary,
    onEmail
}) {
    const statusClass = `status-badge--${toClassName(employee.status)}`;

    return (
        <article className={joinClasses("employee-card", compact && "employee-card--compact")}>
            <div className="employee-card__top">
                <ProfileImage
                    src={photoPath(employee.photo)}
                    name={employee.name}
                    size={compact ? "small" : "medium"}
                />
                <div className="employee-card__identity">
                    <h3 className="employee-card__name">{employee.name}</h3>
                    <p className="employee-card__role">{employee.jobTitle}</p>
                    <p className="employee-card__department">{departmentName}</p>
                </div>
                <span className={joinClasses("status-badge", statusClass)}>{employee.status}</span>
            </div>

            {!compact && (
                <dl className="employee-card__details">
                    <dt>Email</dt>
                    <dd>{employee.email}</dd>
                    {employee.phone !== undefined && (
                        <>
                            <dt>Phone</dt>
                            <dd>{employee.phone}</dd>
                        </>
                    )}
                    <dt>Joined</dt>
                    <dd>{formatDate(employee.hireDate)}</dd>
                    {showSalary && (
                        <>
                            <dt>Salary</dt>
                            <dd>{formatSalary(employee.salary)}</dd>
                        </>
                    )}
                </dl>
            )}

            {compact && showSalary && (
                <p className="employee-card__compact-salary">Salary: {formatSalary(employee.salary)}</p>
            )}

            {!compact && employee.skills.length > 0 && (
                <ul className="employee-card__skills" aria-label={`Skills for ${employee.name}`}>
                    {employee.skills.map((skill) => (
                        <li className="skill-tag" key={skill}>
                            {skill}
                        </li>
                    ))}
                </ul>
            )}

            {onEmail !== undefined && (
                <div className="employee-card__actions">
                    <Button variant="secondary" size="small" onClick={() => onEmail(employee)}>
                        Email {employee.name}
                    </Button>
                </div>
            )}
        </article>
    );
}
