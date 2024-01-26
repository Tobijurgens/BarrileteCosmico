const btnAbrirRegistro = document.querySelector("#abrirRegistro");

const btnCerrarRegistro = document.querySelector("#cerrarRegistro");

const registro = document.querySelector("#ventanaRegistro");

btnAbrirRegistro.addEventListener("click", () => {
    registro.showModal();
})

btnCerrarRegistro.addEventListener("click", () => {
    registro.close();
})

const btnAbrirLogin = document.querySelector("#abrirLogin");

const btnCerrarLogin = document.querySelector("#cerrarLogin");

const login = document.querySelector("#ventanaLogin");


btnAbrirLogin.addEventListener("click", () => {
    login.showModal();
})

btnCerrarLogin.addEventListener("click", () => {
    login.close();
})