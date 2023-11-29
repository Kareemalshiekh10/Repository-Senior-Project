function deleteHoliday(HolidayId) {
    // Implement your deletion logic here
    // For now, let's just remove the row from the table
    const row = document.querySelector(`tr[data-id="${HolidayId}"]`);
    if (row) {
        row.remove();
    }
}

function editHoliday(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);
    const cells = row.querySelectorAll('td');

    cells.forEach(cell => {
        const currentValue = cell.textContent.trim();
        cell.innerHTML = `<input type="text" value="${currentValue}" />`;
    });

    const actionCell = row.querySelector('td:last-child');
    actionCell.innerHTML = `<button onclick="saveHoliday(${id})">Save</button>
                            <button onclick="deleteHoliday(${id})">Delete</button>`;
}

function saveHoliday(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);
    const cells = row.querySelectorAll('td:not(:last-child)'); // Select all td except the last one

    cells.forEach(cell => {
        const newValue = cell.querySelector('input').value;
        cell.textContent = newValue;
    });

    const actionCell = row.querySelector('td:last-child');
    actionCell.innerHTML = `<button onclick="deleteHoliday(${id})">Delete</button>
                            <button onclick="editHoliday(${id})">Edit</button>`;
}

// Function to save the edited information after re-editing
function saveEditedHoliday(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);
    editHoliday(id); // Re-enable editing mode by calling the editEmployee function
}


