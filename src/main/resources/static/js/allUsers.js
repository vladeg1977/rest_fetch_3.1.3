function allUsers() {
    fetch("http://localhost:8080/allUsers")
        .then((res) => res.json())
        .then((data) => {
            let output = "";
            data.forEach(function (user) {

                output += `
                <tr>
                <td id="id${user.id}">${user.id}</td>
                <td id="name${user.id}">${user.name}</td> 
                <td id="login${user.id}">${user.login}</td>
                <td hidden id="password${user.id}">${user.password}</td>
                <td id="roles${user.id}">${user.roles.map(role => role.role)}</td>
                <td>
                <a class="btn btn-info" role="button" data-target="#modalEdit" 
                data-toggle="modal" onclick="openModalWindowEdit(${user.id})">Edit</a>
                </td>
                <td>
                <a class="btn btn-danger" role="button" data-target="#modalDelete" 
                data-toggle="modal" onclick="openModalWindowDelete(${user.id})">Delete</a>
                </td>
              </tr>

          `;
            });
            document.getElementById("allUsers").innerHTML = output;
        })
}

function openModalWindowEdit(id) {
    document.getElementById("idEdit").value = id;
    document.getElementById("nameEdit").value = $("#name" + id).text();
    document.getElementById("loginEdit").value = $("#login" + id).text();
    document.getElementById("passwordEdit").value = $("#password" + id).text();
}

function openModalWindowDelete(id) {
    document.getElementById("idDelete").value = id;
    document.getElementById("nameDelete").value = $("#name" + id).text();
    document.getElementById("loginDelete").value = $("#login" + id).text();
    document.getElementById("passwordDelete").value = $("#password" + id).text();

}

allUsers()