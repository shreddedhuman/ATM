document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = [
        { username: "Eduardo", password: "12345", balance: 900 },
        { username: "Andrea", password: "67890", balance: 500 },
        { username: "Judith", password: "12345", balance: 700 },
        { username: "Haniel", password: "12345", balance: 900 }
    ];

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        window.location.href = `account.html?user=${username}`;
    } else {
        alert("Usuario invalido, introduce el usuario o contraseña correcta");
    }
});
