const addDeadlineField = () => {
    const div = document.createElement('div');
    div.className = 'mb-3';
    div.innerHTML = `
        <label for="deadline" class="form-label">締め切り</label>
        <input type="date" class="form-control" id="deadline" name="deadline">
        <input type="text" class="form-control" id="deadlineDescription" name="deadlineDescription" placeholder="何の締め切りか入力してください">
        <button type="button" class="btn btn-primary" onclick="deleteDeadlineField()">delete</button>
        `;

    const parent = document.getElementById('deadline-div');
    parent.appendChild(div);
}

const deleteDeadlineField = () => {
    const parent = document.getElementById('deadline-div');
    const child = parent.lastElementChild;
    parent.removeChild(child);
}
