document.addEventListener('DOMContentLoaded', function() {
    // Obtener el carrito del almacenamiento local
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    const limpiarCarritoBtn = document.getElementById('limpiar-carrito');
    const terminarCompraBtn = document.getElementById('terminar-compra');
    const formMessages = document.getElementById('form-messages');

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

    // Agregar event listener para el botón de limpiar carrito
    limpiarCarritoBtn.addEventListener('click', limpiarCarrito);

    // Agregar event listener para el botón de terminar compra
    terminarCompraBtn.addEventListener('click', function() {
        // Verificar si el carrito está vacío
        if (cart.length === 0) {
            formMessages.textContent = 'El carrito está vacío, no se puede realizar la compra.';
            return;
        }

        // Validar formulario
        const nombreApellido = document.getElementById('nombreApellido').value.trim();
        const numeroTarjeta = document.getElementById('numeroTarjeta').value.trim();
        const mail = document.getElementById('mail').value.trim();
        const numeroSeguridad = document.getElementById('numeroSeguridad').value.trim();
        const direccionEnvio = document.getElementById('direccionEnvio').value.trim();
        let formIsValid = true;
        let errorMessage = '';

        // Validar Nombre y Apellido
        if (!nombreApellido.match(/^[a-zA-Z\s]+$/)) {
            errorMessage += 'Nombre y Apellido debe contener solo letras y espacios.\n';
            formIsValid = false;
        }

        // Validar Número de la Tarjeta
        if (!numeroTarjeta.match(/^\d{18}$/)) {
            errorMessage += 'Número de la Tarjeta debe contener 18 dígitos.\n';
            formIsValid = false;
        }

        // Validar Email
        if (!mail) {
            errorMessage += 'Email del Destinatario es obligatorio.\n';
            formIsValid = false;
        }

        // Validar Número de Seguridad
        if (!numeroSeguridad.match(/^\d{3}$/)) {
            errorMessage += 'Número de Seguridad debe contener 3 dígitos.\n';
            formIsValid = false;
        }

        // Validar Dirección de Envío
        if (!direccionEnvio) {
            errorMessage += 'Dirección de Envío es obligatoria.\n';
            formIsValid = false;
        }

        // Mostrar mensaje de error si la validación falla
        if (!formIsValid) {
            formMessages.textContent = errorMessage;
            return;
        }

        // Mostrar mensaje de compra terminada y limpiar el carrito
        alert(`Compra terminada, usted gastó ${totalPrice} Kiwy Pesos.`);
        limpiarCarrito();
    });

    // Función para limpiar el carrito
    function limpiarCarrito() {
        localStorage.removeItem('cart');
        location.reload();
    }
});
