let btnRegistrarUsuario = document.getElementById('registrarUsuario');

let listaUsuarios = JSON.parse(localStorage.getItem('Usuarios')) || [];

btnRegistrarUsuario.addEventListener('click', () => {
    let formulario = document.querySelector('form')

    if (formulario.checkValidity()) {
        let nombreUser = document.getElementById('nombre').value;
        let dniUser = document.getElementById('dni').value;
        let telefonoUser = document.getElementById('telefono').value;
        let correoUser = document.getElementById('correo').value;
        let passwordUser= document.getElementById('password').value;

        if (verificarUsuarioRegistrado(correoUser, dniUser)) {
            alert('Este usuario ya está registrado. Por favor, inicia sesión en lugar de registrarte.');
            return;
        }
        
        let usuario = {
            nombre: nombreUser,
            dni: dniUser,
            telefono: telefonoUser,
            correo: correoUser,
            password: passwordUser,
        }
    
        listaUsuarios.push(usuario);
        
        localStorage.setItem('Usuarios', JSON.stringify(listaUsuarios));
        localStorage.setItem('UsuarioLogueado', JSON.stringify(true));
    
        alert('Su usuario se ha registrado')
        window.location.reload();
    } 
});

function verificarUsuarioRegistrado(correo, dni) {
    let usuariosRegistrados = JSON.parse(localStorage.getItem('Usuarios')) || [];

    return usuariosRegistrados.some(usuario => (usuario.correo === correo || usuario.dni == dni));
}




