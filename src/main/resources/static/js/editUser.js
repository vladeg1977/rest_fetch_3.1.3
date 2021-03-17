document.getElementById("editForm").addEventListener("submit", editPost)

function editPost(e){
    e.preventDefault();

    let id = document.getElementById("idEdit").value;
    let name = document.getElementById("nameEdit").value;
    let login = document.getElementById("loginEdit").value;
    let password = document.getElementById("passwordEdit").value;
    let roles = setRoles(Array.from(document.getElementById("roleEdit").selectedOptions)
        .map(option => option.value));

    fetch("http://localhost:8080/editUser", {
        method:"PUT",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            id:id,
            name:name,
            login:login,
            password:password,
            roles:roles
        })
    }).finally(() => {
        $('#modalEdit').modal("hide")
        allUsers();
    })
}