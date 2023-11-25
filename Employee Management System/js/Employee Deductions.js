function deleteEmployee(employeeId) {
    // Implement your deletion logic here
    // For now, let's just remove the row from the table
    const row = document.querySelector(`tr[data-id="${employeeId}"]`);
    if (row) {
        row.remove();
    }
}


// Function to edit the row
function editEmployee(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);
    const cells = row.querySelectorAll('td');

    cells.forEach(cell => {
        const currentValue = cell.textContent.trim();
        cell.innerHTML = `<input type="text" value="${currentValue}" />`;
    });

    const actionCell = row.querySelector('td:last-child');
    actionCell.innerHTML = `<button onclick="saveEmployee(${id})">Save</button>
                            <button onclick="deleteEmployee(${id})">Delete</button>`;
}
// Function to save the edited information
function saveEmployee(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);
    const cells = row.querySelectorAll('td');

    cells.forEach(cell => {
        const newValue = cell.querySelector('input').value;
        cell.textContent = newValue;
    });

    const actionCell = row.querySelector('td:last-child');
    actionCell.innerHTML = `<button onclick="editEmployee(${id})">Edit</button>
                            <button onclick="saveEditedEmployee(${id})">Save</button>
                            <button onclick="deleteEmployee(${id})">Delete</button>`;
}

// Function to save the edited information after re-editing
function saveEditedEmployee(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);
    editEmployee(id); // Re-enable editing mode by calling the editEmployee function
}




function addDeductions(ID, Name, Department, Position, Salary, Deductions, SalaryAfterDeductions) {
    var tbody = document.getElementById('deductionsTableBody');

    // Create a new row
    var newRow = document.createElement('tr');
    newRow.setAttribute('data-id', ID); // Set a unique ID for the new row

    // Create table data cells
    var idCell = document.createElement('td');
    var nameCell = document.createElement('td');
    var departmentCell = document.createElement('td');
    var positionCell = document.createElement('td');
    var salaryCell = document.createElement('td');
    var deductionsCell = document.createElement('td');
    var salaryAfterDeductionsCell = document.createElement('td');
    var actionCell = document.createElement('td');

    // Set text content for the cells
    idCell.textContent = ID;
    nameCell.textContent = Name;
    departmentCell.textContent = Department;
    positionCell.textContent = Position;
    salaryCell.textContent = Salary;
    deductionsCell.textContent = Deductions;
    salaryAfterDeductionsCell.textContent = SalaryAfterDeductions;

    // Create "Edit" button
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        editEmployee(ID); // Call your edit function with the employee ID
    });

    // Create "Delete" button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteEmployee(ID); // Call your delete function with the employee ID
        newRow.remove(); // Remove the row after deleting
    });

    // Create a space element
    var space = document.createTextNode(' ');

    // Append buttons and space to the action cell
    actionCell.appendChild(deleteButton);
    actionCell.appendChild(space);
    actionCell.appendChild(editButton);

    // Append created cells to the new row
    newRow.appendChild(idCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(departmentCell);
    newRow.appendChild(positionCell);
    newRow.appendChild(salaryCell);
    newRow.appendChild(deductionsCell);
    newRow.appendChild(salaryAfterDeductionsCell);
    newRow.appendChild(actionCell);
}
