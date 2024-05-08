const addDateField = () => {
    const div = document.createElement('div');
    div.className = 'mb-3';
    div.innerHTML = `
        <label for="startDay" class="form-label">開始日</label>
        <input type="date" class="form-control" id="startDay" name="startDay">
        <label for="endDay" class="form-label">終了日</label>
        <input type="date" class="form-control" id="endDay" name="endDay">
        <button type="button" class="btn btn-primary" onclick="deleteDateField()">delete</button>
        `;
    const parent = document.getElementById('date-div');
    console.log(parent);
    parent.appendChild(div);
}

const deleteDateField = () => {
    const parent = document.getElementById('date-div');
    const child = parent.lastElementChild;
    parent.removeChild(child);
}
