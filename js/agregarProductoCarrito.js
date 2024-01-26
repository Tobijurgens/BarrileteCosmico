let btnAgregarCarrito = document.querySelectorAll('.botonCarrito')

let carritoProductos = JSON.parse(localStorage.getItem('Productos')) || [];

btnAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', agregarProducto);
})

function agregarProducto(e){
    e.preventDefault()

    const seleccionarProducto = e.target.parentElement
    alert('Producto agregado al carrito')
    guardarDatosProducto(seleccionarProducto);
};

function guardarDatosProducto(producto){
    const infoProducto = {
        nombre: producto.querySelector('h3').textContent,
        img: producto.querySelector('img').src,
        descripcion: producto.querySelector('figcaption').textContent,
        precio: producto.querySelector('h4').textContent,
        id: producto.querySelector('button').getAttribute('idProducto'),
        cantidad: 1
    }

    carritoProductos.push(infoProducto)

    localStorage.setItem('Productos', JSON.stringify(carritoProductos))
}