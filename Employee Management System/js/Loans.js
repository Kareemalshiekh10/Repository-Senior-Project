function deleteLoan(LoanId) {
    const confirmed = confirm("Are you sure you want to delete this Loan?");
    if (confirmed) {
        // Implement your deletion logic here
        // For example, let's remove the row from the table for now
        const row = document.querySelector(`tr[data-id="${LoanId}"]`);
        if (row) {
            row.remove();
        }
    } else {
        // User clicked Cancel, do nothing or handle accordingly
        console.log("Loan deletion canceled.");
    }
}
