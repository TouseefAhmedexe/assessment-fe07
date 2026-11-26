import {
    Button,
    DepartmentCard,
    EmployeeList,
    PageHeader
} from "../../components/index.js";
import { departments } from "../../data/departments.js";
import { employees } from "../../data/employees.js";
import {
    buildHref,
    findDepartment,
    formatSalary,
    formatSalaryShort,
    getEmployeesInDepartment,
    navigateTo,
    pluralize,
    readQuery
} from "../../utils/index.js";
import "./EmployeeDirectoryPage.css";

export default function EmployeeDirectoryPage() {
    const selectedDepartmentId = readQuery("department");
    const isCompact = readQuery("view") === "compact";
    const showSalary = readQuery("salary") !== "hide";

    const selectedDepartment = findDepartment(departments, selectedDepartmentId);
    const shownEmployees =
        selectedDepartment === undefined
            ? employees
            : getEmployeesInDepartment(employees, selectedDepartment.id);

    function handleEmail(employee) {
        window.location.href = `mailto:${employee.email}?subject=${encodeURIComponent(`Hello ${employee.name}`)}`;
    }

    function getDepartmentHref(departmentId) {
        return buildHref({ department: departmentId === selectedDepartmentId ? null : departmentId });
    }

    const headerActions = (
        <>
            <Button
                variant="secondary"
                size="small"
                onClick={() => navigateTo({ view: isCompact ? null : "compact" })}
            >
                {isCompact ? "Card view" : "Compact view"}
            </Button>
            <Button
                variant="secondary"
                size="small"
                onClick={() => navigateTo({ salary: showSalary ? "hide" : null })}
            >
                {showSalary ? "Hide salaries" : "Show salaries"}
            </Button>
            {selectedDepartment !== undefined && (
                <Button variant="secondary" size="small" onClick={() => navigateTo({ department: null })}>
                    Show all departments
                </Button>
            )}
        </>
    );

    const employeesTitle =
        selectedDepartment === undefined ? "All Employees" : `${selectedDepartment.name} Employees`;

    return (
        <div className="directory-page">
            <PageHeader
                title="Employee Directory"
                subtitle={`${pluralize(employees.length, "employee")} across ${pluralize(departments.length, "department")}`}
                level={1}
                actions={headerActions}
            />

            <section className="directory-section" aria-labelledby="departments-heading">
                <PageHeader
                    title="Departments"
                    subtitle="Select a department to filter the employee list."
                    level={2}
                />
                <div className="department-grid">
                    {departments.map((department) => (
                        <DepartmentCard
                            key={department.id}
                            department={department}
                            employeeCount={getEmployeesInDepartment(employees, department.id).length}
                            isActive={department.id === selectedDepartment?.id}
                            getHref={getDepartmentHref}
                        />
                    ))}
                </div>
            </section>

            <section className="directory-section" aria-labelledby="employees-heading">
                <PageHeader
                    title={employeesTitle}
                    subtitle={`Showing ${pluralize(shownEmployees.length, "employee")} of ${employees.length}.`}
                    level={2}
                />
                <EmployeeList
                    employees={shownEmployees}
                    departments={departments}
                    compact={isCompact}
                    showSalary={showSalary}
                    formatSalary={isCompact ? formatSalaryShort : formatSalary}
                    onEmail={handleEmail}
                    emptyMessage={`No employees are currently assigned to ${selectedDepartment?.name ?? "this department"}.`}
                />
            </section>
        </div>
    );
}
