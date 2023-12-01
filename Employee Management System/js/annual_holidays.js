// annual_holidays.js

// Function to edit employee details
function editEmployee(employeeId) {
    const row = document.querySelector(`tr[data-id="${employeeId}"]`);
    const nameCell = row.querySelector('td:nth-child(2)');
    const entitledDaysCell = row.querySelector('td:nth-child(3)');
    const usedDaysCell = row.querySelector('td:nth-child(4)');
    const remainingDaysCell = row.querySelector('td:nth-child(5)');
    const startDateCell = row.querySelector('td:nth-child(6)');
    const endDateCell = row.querySelector('td:nth-child(7)');
    const actionCell = row.querySelector('td:nth-child(8)');
  
    // Save the original values before editing
    const originalValues = {
      name: nameCell.textContent,
      entitledDays: entitledDaysCell.textContent,
      usedDays: usedDaysCell.textContent,
      remainingDays: remainingDaysCell.textContent,
      startDate: startDateCell.textContent,
      endDate: endDateCell.textContent,
    };
  
    // Replace table cell content with input fields for editing
    nameCell.innerHTML = `<input type="text" id="editName-${employeeId}" value="${originalValues.name}">`;
    entitledDaysCell.innerHTML = `<input type="text" id="editEntitledDays-${employeeId}" value="${originalValues.entitledDays}">`;
    usedDaysCell.innerHTML = `<input type="text" id="editUsedDays-${employeeId}" value="${originalValues.usedDays}">`;
    remainingDaysCell.innerHTML = `<input type="text" id="editRemainingDays-${employeeId}" value="${originalValues.remainingDays}">`;
    startDateCell.innerHTML = `<input type="text" id="editStartDate-${employeeId}" value="${originalValues.startDate}">`;
    endDateCell.innerHTML = `<input type="text" id="editEndDate-${employeeId}" value="${originalValues.endDate}">`;
  
    // Replace the "Edit" button with a "Save" button
    actionCell.innerHTML = `<button onclick="saveChanges(${employeeId})">Save</button>`;
  }
  
  // Function to save changes after editing
  function saveChanges(employeeId) {
    const row = document.querySelector(`tr[data-id="${employeeId}"]`);
    const nameCell = row.querySelector('td:nth-child(2) input');
    const entitledDaysCell = row.querySelector('td:nth-child(3) input');
    const usedDaysCell = row.querySelector('td:nth-child(4) input');
    const remainingDaysCell = row.querySelector('td:nth-child(5) input');
    const startDateCell = row.querySelector('td:nth-child(6) input');
    const endDateCell = row.querySelector('td:nth-child(7) input');
    const actionCell = row.querySelector('td:nth-child(8)');
  
    // Get the updated values from the input fields
    const updatedValues = {
      name: nameCell.value,
      entitledDays: entitledDaysCell.value,
      usedDays: usedDaysCell.value,
      remainingDays: remainingDaysCell.value,
      startDate: startDateCell.value,
      endDate: endDateCell.value,
    };
  
    // Replace input fields with updated values
    nameCell.parentNode.innerHTML = updatedValues.name;
    entitledDaysCell.parentNode.innerHTML = updatedValues.entitledDays;
    usedDaysCell.parentNode.innerHTML = updatedValues.usedDays;
    remainingDaysCell.parentNode.innerHTML = updatedValues.remainingDays;
    startDateCell.parentNode.innerHTML = updatedValues.startDate;
    endDateCell.parentNode.innerHTML = updatedValues.endDate;
  
    // Replace the "Save" button with the "Edit" button
    actionCell.innerHTML = `<button onclick="editEmployee(${employeeId})"><i class="fas fa-edit"></i></button>`;
  
    // Add logic here to save the changes to your backend or update your data source
    // For now, let's log a message to the console
    console.log(`Changes saved for employee with ID ${employeeId}`);
  }
  