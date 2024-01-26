document.addEventListener('DOMContentLoaded', function(){
    let productosCarrito = JSON.parse(localStorage.getItem('Productos')) || [];

    const carritoProductos = document.querySelector('.tablaProductos tbody');

    productosCarrito.forEach(producto=> {
        const productosTotales = Array.from(carritoProductos.children);
        const productoExistente = productosTotales.find(fila => {
            const btnEliminarProducto = fila.querySelector('.btnEliminarProducto');
            return btnEliminarProducto && btnEliminarProducto.getAttribute('id') === producto.id
        })
        if(productoExistente){
            const cantidadActual = parseInt(productoExistente.querySelector('.cantidadProducto').textContent.split(' ')[1]);
            const nuevaCantidad = cantidadActual + producto.cantidad;
            productoExistente.querySelector('.cantidadProducto').textContent = `Cantidad: ${nuevaCantidad}`;
        } else {
            const nuevoProducto = document.createElement('tr');
            nuevoProducto.innerHTML = `
                <td class="contenedorImagen"><img class="imagenProducto" src="${producto.img}" alt="${producto.nombre}"></td>
                <td>
                    <ul>
                        <li class="nombreProducto">${producto.nombre}</li>
                        <li class="descripcionProducto">${producto.descripcion}</li>
                        <li class="precioProducto">Precio: ${producto.precio}</li>
                        <li class="cantidadProducto">Cantidad: ${producto.cantidad}</li>
                        <li><button type="button" class="btnEliminarProducto" id="${producto.id}">Eliminar Producto</button></li>
                    </ul>
                </td>
            `;
            carritoProductos.appendChild(nuevoProducto);
        }
    });

    const botonesEliminarProducto = document.querySelectorAll('.btnEliminarProducto')

    botonesEliminarProducto.forEach(btnEliminarProducto =>{
        btnEliminarProducto.addEventListener('click', function () {
            const idProducto = this.getAttribute('id');

            productosCarrito = productosCarrito.filter(producto => producto.id !== idProducto);
            localStorage.setItem('Productos', JSON.stringify(productosCarrito));

            const eliminarProducto = this.closest('tr');
            eliminarProducto.remove();
        });
    });
});

