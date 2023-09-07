const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('user');

let usersWithBalances = [
    { username: "Eduardo", password: "12345", balance: 900 },
    { username: "Andrea", password: "67890", balance: 500 },
    { username: "Judith", password: "12345", balance: 700 },
    { username: "Haniel", password: "12345", balance: 900 }
];

if (username) {
    const currentUser = usersWithBalances.find(user => user.username === username);

    if (currentUser) {
        document.getElementById("usernameDisplay").textContent = currentUser.username;
        document.getElementById("saldoDisplay").textContent = `$${currentUser.balance.toFixed(2)}`;

        document.getElementById("ingresarMonto").addEventListener("click", function () {
            const monto = parseFloat(prompt("Ingrese la cantidad que desea depositar:"));
            if (!isNaN(monto) && monto >= 10 && monto <= 990) {
                const nuevoSaldo = currentUser.balance + monto;
                if (nuevoSaldo <= 990) {
                    currentUser.balance = nuevoSaldo;
                    actualizarSaldo();
                    alert(`Monto depositado: $${monto.toFixed(2)}\nNuevo saldo: $${nuevoSaldo.toFixed(2)}`);
                } else {
                    alert("El monto ingresado excede el límite máximo de $990.");
                }
            } else {
                alert("Ingrese una cantidad válida entre $10 y $990 para ingresar.");
            }
        });

        document.getElementById("retirarMonto").addEventListener("click", function () {
            const monto = parseFloat(prompt("Ingrese la cantidad que desea retirar:"));
            if (!isNaN(monto) && monto >= 10 && monto <= currentUser.balance) {
                const nuevoSaldo = currentUser.balance - monto;
                if (nuevoSaldo >= 10) {
                    currentUser.balance = nuevoSaldo;
                    actualizarSaldo();
                    alert(`Monto retirado: $${monto.toFixed(2)}\nNuevo saldo: $${nuevoSaldo.toFixed(2)}`);
                } else {
                    alert("No es posible retirar ese monto, asegúrese de mantener un saldo mínimo de $10.");
                }
            } else {
                alert("Monto inválido o excede el saldo disponible.");
            }
        });

        function actualizarSaldo() {
            document.getElementById("saldoDisplay").textContent = `$${currentUser.balance.toFixed(2)}`;
        }

        document.getElementById("logout").addEventListener("click", function () {
            window.location.href = "index.html";
        });
    } else {
        window.location.href = "index.html";
    }
} else {
    window.location.href = "index.html";
}
