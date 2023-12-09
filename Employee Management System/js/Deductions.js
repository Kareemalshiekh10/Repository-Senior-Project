function deleteEmployee(employeeId) {
    // Implement your deletion logic here
    // For now, let's just remove the row from the table
    const row = document.querySelector(`tr[data-id="${employeeId}"]`);
    if (row) {
        row.remove();
    }
}
function editBranch(employeeId) {
    console.log(`Editing branch with ID: ${employeeId}`);
    // Implement your edit logic here for branches
    // For example, you might open a modal with a form to edit branch details
}