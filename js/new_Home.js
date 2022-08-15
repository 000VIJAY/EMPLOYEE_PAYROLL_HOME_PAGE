window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});

function createInnerHtml() {
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                    " <th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for (const employeePayrollData of employeePayrollList)
    {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt=""
                src="${employeePayrollData._profilePic}">
            </td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>${getDeptHtml(employeePayrollData._department)}</td>
            <td>${employeePayrollData._salary}</td>
            <td>${employeePayrollData._startDate}</td>
            <td>
                <img name="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/delete-forever.png">
                <img name="${employeePayrollData._id}" alt="edit" onclick="update(this)" src="../assets/create-new.png">
            </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
//JSON Object created
const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _name: 'Vijay Kumar',
            _gender: 'male',
            _department: ['Engineering','Finance'],
            _salary: '500000',
            _startDate:'29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic:'../assets/Suriya-1024x1010.png'
        },
        {
            _name: 'Gyatri',
            _gender: 'female',
            _department: ['Engineering'],
            _salary: '400000',
            _startDate:'29 July 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic:'../assets/wallpapersden.com_cute-selena-gomez-photoshoot_2500x1875.png'
        }
    ];
    return employeePayrollListLocal;
}
const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}