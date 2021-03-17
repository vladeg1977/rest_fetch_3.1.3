const url = "http://localhost:8080/getUser";
let output = ""

function getUser() {

    fetch(url)
        .then(res => res.json())
        .then((user) => {

            output += ` 
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.login}</td>
                <td>${user.roles.map(role => role.role)}</td>
                </tr>
            `;

            document.getElementById("userInfo").innerHTML = output;
        })
}

getUser()