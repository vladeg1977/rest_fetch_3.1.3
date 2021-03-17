document.getElementById("newUserForm").addEventListener("submit", addNewUser);

function addNewUser(e){
    e.preventDefault();

    let name = document.getElementById("nameNew").value;
    let login = document.getElementById("loginNew").value;
    let password = document.getElementById("passwordNew").value;
    let roles = setRoles(Array.from(document.getElementById("roleNew").selectedOptions)
        .map(option => option.value));

    fetch("http://localhost:8080/addUser", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            login: login,
            password: password,
            roles: roles
        })
    })
        .finally(() => {
            document.getElementById("idUsersTable").click();
            allUsers();
            document.getElementById("newUserForm").reset();
        })
}

function setRoles(someRoles) {
    let roles = [];
    if (someRoles.indexOf("ADMIN") >= 0) {
        roles.push({"id": 1});
    }
    if (someRoles.indexOf("USER") >= 0) {
        roles.push({"id": 2});
    }
    return roles;
}