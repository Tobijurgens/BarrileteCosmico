const URL = 'https://api.bluelytics.com.ar/v2/latest';


function cargarCotizacionDolarBlue() {
    return fetch(URL)
    .then(response => response.json())
    .then(data => data.blue.value_sell)
}

function formatearNumeroConPuntos(numero) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function actualizarPrecios(cotizacionDolarBlue) {
    document.querySelectorAll('.precioProducto').forEach(function (element) {
        const precioEnDolares = parseFloat(element.textContent.replace('U$D ', ''));
        const precioEnPesos = precioEnDolares * cotizacionDolarBlue;
        const precioFormateado = formatearNumeroConPuntos(precioEnPesos);

        element.textContent = `$${precioFormateado}`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarCotizacionDolarBlue()
        .then(cotizacion => actualizarPrecios(cotizacion))
});