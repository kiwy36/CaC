function filterImages(category) {
    const images = document.querySelectorAll('.image');
    
    images.forEach(image => {
        if (category === 'todas' || image.dataset.category === category) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
function updateQuantity(dropdownId, quantity) {
    const dropdownButton = document.getElementById(dropdownId);
    dropdownButton.textContent = quantity;
    const selectedQuantity = document.getElementById(dropdownId.replace("cantidadDropdown", "selectedQuantity"));
    selectedQuantity.textContent = "Cantidad seleccionada: " + quantity;
}
function addToCart(imageSrc, price, quantity) {
    const product = {
        imageSrc: imageSrc,
        price: price,
        quantity: parseInt(quantity)
    };
    
    // Obtener el carrito del almacenamiento local o crear uno nuevo si no existe
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Agregar el producto al carrito
    cart.push(product);

    // Guardar el carrito en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));
}
