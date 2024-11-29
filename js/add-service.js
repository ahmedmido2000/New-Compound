function addRow() {
    const serviceList = document.getElementById('service-list');
    const newRow = document.createElement('div');
    newRow.classList.add('row', 'align-items-center', 'bg-white', 'text-center', 'py-4', 'px-2', 'border-bottom');
    newRow.innerHTML = `
        <div class="col-5"><input type="text" class="form-control editable" value="اسم الخدمه"></div>
        <div class="col-5"><input type="text" class="form-control editable" value="سعر الخدمه"></div>
        <div class="col-2"><i class="fas fa-trash icon text-danger" onclick="handleTrashClick(event)"></i></div>
    `;
    serviceList.appendChild(newRow);
    addEventListeners(newRow);
}

function addEventListeners(element) {
    const inputs = element.querySelectorAll('input.editable');
    inputs.forEach(input => {
        input.addEventListener('blur', handleInputBlur);
    });
}

function handleInputBlur(event) {
    const input = event.target;
    const p = document.createElement('p');
    p.classList.add('text-grey', 'm-0', 'editable');
    p.textContent = input.value;
    input.replaceWith(p);
    addParagraphListeners(p);
}

function handleTrashClick(event) {
    const trashIcon = event.target;
    const rowToDelete = trashIcon.closest('.row');
    if (rowToDelete) {
        rowToDelete.remove();
    }
}

function addParagraphListeners(p) {
    p.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = p.textContent;
        input.classList.add('form-control', 'editable');
        p.replaceWith(input);
        input.focus();
        addEventListeners(input.closest('.row'));
    });
}

// Initialize event listeners for existing paragraphs and trash icons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.row.align-items-center.bg-white.text-center.py-4.px-2.border-bottom').forEach(row => {
        addEventListeners(row);
    });

    document.querySelectorAll('p.editable').forEach(p => {
        addParagraphListeners(p);
    });

    document.querySelectorAll('.fa-trash').forEach(icon => {
        icon.addEventListener('click', handleTrashClick);
    });
});