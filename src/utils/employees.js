export function findDepartment(departments, id) {
    if (id === null || id === undefined) {
        return undefined;
    }

    return departments.find((department) => department.id === id);
}

export function getEmployeesInDepartment(employees, departmentId) {
    return employees.filter((employee) => employee.departmentId === departmentId);
}

export function photoPath(fileName) {
    return fileName === undefined ? undefined : `/images/avatars/${fileName}`;
}
