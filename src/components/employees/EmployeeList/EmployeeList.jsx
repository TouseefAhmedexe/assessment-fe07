import { findDepartment, joinClasses } from "../../../utils/index.js";
import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import "./EmployeeList.css";

export default function EmployeeList({
    employees,
    departments,
    compact = false,
    showSalary = true,
    formatSalary,
    onEmail,
    emptyMessage = "No employees match this filter."
}) {
    if (employees.length === 0) {
        return <p className="employee-list__empty">{emptyMessage}</p>;
    }

    return (
        <ul className={joinClasses("employee-list", compact && "employee-list--compact")}>
            {employees.map((employee) => {
                const department = findDepartment(departments, employee.departmentId);

                return (
                    <li key={employee.id}>
                        <EmployeeCard
                            employee={employee}
                            departmentName={department === undefined ? "Unassigned" : department.name}
                            compact={compact}
                            showSalary={showSalary}
                            formatSalary={formatSalary}
                            onEmail={onEmail}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
