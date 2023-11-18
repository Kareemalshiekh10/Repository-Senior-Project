function deleteEmployee(employeeId) {
    // Implement your deletion logic here
    // For now, let's just remove the row from the table
    const row = document.querySelector(`tr[data-id="${employeeId}"]`);
    if (row) {
        row.remove();
    }
}
function editEmployee(employeeId) {
    console.log(`Editing employee with ID: ${employeeId}`);
    // Implement your edit logic here
    // For example, you might open a modal with a form to edit employee details
}
// Assume you have an array of employees with their respective department IDs
const employees = [
    { id: 1, name: 'John Doe', departmentId: 1 },
    { id: 2, name: 'Jane Smith', departmentId: 2 },
    { id: 2, name: 'Bob Johnson	', departmentId: 3 },
    // More employee data...
];

document.addEventListener('DOMContentLoaded', function() {
    const departmentRows = document.querySelectorAll('tbody tr');
    const employeeDetails = document.getElementById('employeeDetails');

    departmentRows.forEach(row => {
        row.addEventListener('click', function() {
            const departmentId = this.getAttribute('data-id');
            const departmentName = this.getAttribute('data-name');
            const employeesInDepartment = employees.filter(employee => employee.departmentId === parseInt(departmentId));

            if (employeesInDepartment.length > 0) {
                displayEmployees(employeesInDepartment, departmentName);
            } else {
                employeeDetails.innerHTML = `<li>No employees found in ${departmentName}</li>`;
            }
        });
    });
});

function displayEmployees(employees, departmentName) {
    const employeeList = document.getElementById('employeeDetails');
    employeeList.innerHTML = `<h3>Employees in ${departmentName}</h3>`;
    
    employees.forEach(employee => {
        const listItem = document.createElement('li');
        listItem.textContent = employee.name;
        employeeList.appendChild(listItem);
    });
}
