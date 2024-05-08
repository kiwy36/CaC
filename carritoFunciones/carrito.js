document.addEventListener('DOMContentLoaded', function() {
    // Obtener el carrito del almacenamiento local
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    const limpiarCarritoBtn = document.getElementById('limpiar-carrito'); // Obtener el botón de limpiar carrito
    const terminarCompraBtn = document.getElementById('terminar-compra'); // Obtener el botón de terminar compra

    
    let totalPrice = 0;
    
    // Mostrar cada producto en el carrito
    cart.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        
        const image = document.createElement('img');
        image.src = product.imagen;
        image.alt = product.alt;
        itemDiv.appendChild(image);
        
        const details = document.createElement('div');
        details.classList.add('details');
        details.innerHTML = `
            <p>Nombre: ${product.nombre}</p>
            <p>Cantidad: ${product.cantidad}</p>
            <p>Precio: ${product.precio * product.cantidad} Kiwy Pesos</p>
        `;
        itemDiv.appendChild(details);
        
        cartItemsContainer.appendChild(itemDiv);
        
        totalPrice += product.precio * product.cantidad;
    });
    // Mostrar el precio total
    totalPriceContainer.textContent = `Precio Total: ${totalPrice} Kiwy Pesos`;
    // Agregar un event listener para el botón de limpiar carrito
    limpiarCarritoBtn.addEventListener('click', limpiarCarrito);
    // Agregar un event listener para el botón de terminar compra
    terminarCompraBtn.addEventListener('click', terminarCompra);
});

function limpiarCarrito() {
    localStorage.removeItem('cart'); // Eliminar el carrito del almacenamiento local
    location.reload(); // Recargar la página para reflejar los cambios
}
function terminarCompra() {
    // Calcular el precio total antes de limpiar el carrito
    const totalPrice = calcularPrecioTotal();
    
    // Mostrar un mensaje de alerta con el precio total y limpiar el carrito
    alert(`Compra realizada por un total de ${totalPrice} Kiwy Pesos.`);
    limpiarCarrito();
}
function calcularPrecioTotal() {
    let totalPrice = 0;
    // Obtener el carrito del almacenamiento local
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Calcular el precio total sumando el precio de cada producto
    cart.forEach(product => {
        totalPrice += product.precio * product.cantidad;
    });
    
    return totalPrice;
}