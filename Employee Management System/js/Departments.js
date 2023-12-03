function deleteDepartment(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);
    if (row) {
        row.remove();
    }
}

// Function to view employees in a department
function viewEmployees(id) {
    const departmentRow = document.querySelector(`tr[data-id="${id}"]`);
    if (departmentRow) {
        const departmentName = departmentRow.dataset.name;
        const employeesList = document.getElementById('employeeDetails');
        // Clear previous employee details
        employeesList.innerHTML = '';

        const departmentHeading = document.createElement('h3');
        departmentHeading.textContent = `Employees in ${departmentName}`;
        employeesList.appendChild(departmentHeading);

        const employeesData = getEmployeesForDepartment(id);

        employeesData.forEach(employee => {
            const listItem = document.createElement('li');
            listItem.textContent = `${employee.name} - ${employee.employeename}`;
            employeesList.appendChild(listItem);
        });

        console.log(`Viewing employees for department '${departmentName}':`, employeesData);
    }
}

// Simulating fetching employees for different departments (replace with actual data)
function getEmployeesForDepartment(id) {
    // Add logic to fetch employees based on department ID
    switch (id) {
        case 1:
            return [
                { name: 'Employee 1', employeename: 'John' },
                { name: 'Employee 2', employeename: 'Samy' },
                { name: 'Employee 3', employeename: 'Samy' },
                // Add specific employees for department 1
            ];
        case 2:
            return [
                { name: 'Employee 1', employeename: 'Many' },
                { name: 'Employee 2', employeename: 'Johny mod' },
             
            ];
            case 3:
                return [
                    { name: 'Employee 1', employeename: ' Mohamed ' },
                    { name: 'Employee 2', employeename: 'Kareem' },
                  
                ];
        // Add more cases for other department IDs as needed
        default:
            return [];
    }
}
