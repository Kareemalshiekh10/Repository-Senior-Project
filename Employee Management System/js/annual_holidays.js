  
function deleteEmployee(employeeId) {
  const confirmed = confirm("Are you sure you want to delete this Holiday?");
  if (confirmed) {
      // Implement your deletion logic here
      // For now, let's just remove the row from the table
      const row = document.querySelector(`tr[data-id="${employeeId}"]`);
      if (row) {
          row.remove();
      }
  } else {
      // User clicked Cancel, do nothing or handle accordingly
      console.log("Deletion canceled.");
  }
}

function redirectToEditPage(employeeId) {
  // Assuming the page is in the same directory, adjust the path accordingly
  window.location.href = "Edit_Annual_Holidays.html";
}
