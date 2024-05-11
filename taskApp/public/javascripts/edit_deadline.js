const addDeadlineField = () => {
    const div = document.createElement('div');
    div.className = 'mb-3';
    div.innerHTML = `
        <div class="mb-3 d-flex align-items-end">
            <div class="mb-3">
                <label for="deadline" class="form-label">締め切り</label>
                <input type="date" class="form-control mb-2 deadline-date" id="deadline" name="deadline" value="<%= element.deadline %>" required>
                <input type="text" class="form-control deadline-description" id="deadlineDescription" name="deadlineDescription"
                    placeholder="何の締め切りか入力してください" value="" required>
            </div>
            <div>
                <button type="button" class="btn btn-primary mb-3" onclick="deleteDeadlineField()">delete</button>
            </div>
        </div>
        `;

    const parent = document.getElementById('deadline-div');
    parent.appendChild(div);
}

const deleteDeadlineField = () => {
    const parent = document.getElementById('deadline-div');
    const child = parent.lastElementChild;
    parent.removeChild(child);
}
