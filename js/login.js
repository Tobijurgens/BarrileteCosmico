let btnLoguearUsuario = document.getElementById('loguearUsuario');
let abrirRegistro = document.getElementById('abrirRegistro');
let abrirLogin = document.getElementById('abrirLogin');
let btnCerrarSesion = document.getElementById('cerrarSesion');
let textoUser = document.getElementById('textoUser');

window.addEventListener('load', () => {
    let usuarioLogueado = JSON.parse(localStorage.getItem('UsuarioLogueado'));

    if (usuarioLogueado) {
        abrirLogin.style.display = 'none';
        btnCerrarSesion.style.display = 'block';
        abrirRegistro.style.display = 'none';
        textoUser.innerHTML = '¡FELICIDADES! USTED FORMA PARTE DE NUESTRA FAMILIA. ';
    } else{
        textoUser.innerHTML = 'REGISTRATE COMO USUARIO PARA NO PERDERTE NINGUNA NOVEDAD Y OBTENER BENEFICIOS EXCLUSIVOS'
    }
});

btnLoguearUsuario.addEventListener('click', (e) => {
    e.preventDefault();

    let correoUser = document.getElementById('correoUsuario').value;
    let passwordUser = document.getElementById('passwordUsuario').value;

    let usuariosRegistrados = JSON.parse(localStorage.getItem('Usuarios')) || [];
    
    let usuarioExistente = usuariosRegistrados.find(usuario => usuario.correo === correoUser && usuario.password === passwordUser);

    if (usuarioExistente) {
        alert('Inicio de sesión exitoso');

        localStorage.setItem('UsuarioLogueado', JSON.stringify(true));

        abrirLogin.style.display = 'none';
        btnCerrarSesion.style.display = 'block';
        abrirRegistro.style.display = 'none';
        textoUser.innerHTML = '¡FELICIDADES! USTED FORMA PARTE DE NUESTRA FAMILIA. ';

        window.location.reload();

    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
});

btnCerrarSesion.addEventListener('click', () => {
    alert('Sesión cerrada'); 

    localStorage.setItem('UsuarioLogueado', JSON.stringify(false));
    
    abrirLogin.style.display = 'block';
    abrirRegistro.style.display = 'block';
    btnCerrarSesion.style.display = 'none';
    textoUser.innerHTML = 'REGISTRATE COMO USUARIO PARA NO PERDERTE NINGUNA NOVEDAD Y OBTENER BENEFICIOS EXCLUSIVOS'
});
