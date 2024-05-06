document.addEventListener('DOMContentLoaded', function() {
    // Obtener el carrito del almacenamiento local
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    const limpiarCarritoBtn = document.getElementById('limpiar-carrito'); // Obtener el botón de limpiar carrito
    
    let totalPrice = 0;
    
    // Función para limpiar el carrito
    function limpiarCarrito() {
        localStorage.removeItem('cart'); // Eliminar el carrito del almacenamiento local
        cartItemsContainer.innerHTML = ''; // Limpiar el contenido del contenedor de items del carrito
        totalPriceContainer.textContent = 'Precio Total: 0 Kiwy Pesos'; // Reiniciar el precio total a 0
    }
    
    // Mostrar cada producto en el carrito
    cart.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        
        const image = document.createElement('img');
        image.src = product.imageSrc;
        image.alt = 'Producto';
        itemDiv.appendChild(image);
        
        const details = document.createElement('div');
        details.classList.add('details');
        details.innerHTML = `
            <p>Cantidad: ${product.quantity}</p>
            <p>Precio: ${product.price * product.quantity} Kiwy Pesos</p>
        `;
        itemDiv.appendChild(details);
        
        cartItemsContainer.appendChild(itemDiv);
        
        totalPrice += product.price * product.quantity;
    });
    
    // Mostrar el precio total
    totalPriceContainer.textContent = `Precio Total: ${totalPrice} Kiwy Pesos`;
    
    // Agregar un event listener para el botón de limpiar carrito
    limpiarCarritoBtn.addEventListener('click', limpiarCarrito);
});
