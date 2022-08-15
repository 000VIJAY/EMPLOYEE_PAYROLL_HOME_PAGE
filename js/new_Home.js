window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});

function createInnerHtml() {
    const innerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td><img class="profile" alt=""
                src="../assets/Suriya-1024x1010.png">
        </td>
        <td>Vijay Kumar</td>
        <td>Male</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>400000</td>
        <td>1 Nov 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/delete-forever.png">
            <img id="1" alt="edit" onclick="update(this)" src="../assets/create-new.png">
        </td>
    </tr>
`;
    document.querySelector('#table-display').innerHTML = innerHtml;
}