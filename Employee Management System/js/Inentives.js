function deleteIncentive(incentiveId) {
    const confirmed = confirm("Are you sure you want to delete this incentive?");
    if (confirmed) {
        // Implement your deletion logic here
        // For example, let's remove the row from the table for now
        const row = document.querySelector(`tr[data-id="${incentiveId}"]`);
        if (row) {
            row.remove();
        }
    } else {
        // User clicked Cancel, do nothing or handle accordingly
        console.log("Incentive deletion canceled.");
    }
}
