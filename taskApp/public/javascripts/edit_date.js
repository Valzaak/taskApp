const addDateField = () => {
    const div = document.createElement('div');
    div.className = 'mb-3';
    div.innerHTML = `
        <div class="mb-3 d-flex align-items-end">
            <div class="d-flex align-items-center eventDate">
                <div>
                    <label for="startDay" class="form-label">開始日</label>
                    <input type="date" class="form-control" id="startDay" name="startDay" value="<%= element.startDay %>">
                </div>
                <div>
                    <p class="mb-0 between">～</p>
                </div>
                <div>
                    <label for="endDay" class="form-label">終了日</label>
                    <input type="date" class="form-control" id="endDay" name="endDay" value="<%= element.endDay %>">
                </div>
            </div>
            <div>
                <button type="button" class="btn btn-primary" onclick="deleteDateField()">delete</button>
            </div>
        </div>
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
