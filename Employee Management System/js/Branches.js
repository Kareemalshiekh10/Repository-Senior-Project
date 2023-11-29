function deleteBranch(branchId) {
    // Implement your deletion logic here for branches
    // For now, let's just remove the row from the table
    const row = document.querySelector(`tr[data-id="${branchId}"]`);
    if (row) {
        row.remove();
    }
}

function editBranch(branchId) {
    console.log(`Editing branch with ID: ${branchId}`);
    // Implement your edit logic here for branches
    // For example, you might open a modal with a form to edit branch details
}
