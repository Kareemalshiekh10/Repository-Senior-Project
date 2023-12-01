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