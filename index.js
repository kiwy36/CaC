const Productos = [
    {
        nombre: "Camisa de Manga Corta",
        categoria: "categoria1",
        descripcion: "Camisa de manga corta para hombres",
        precio: 44,
        imagen: "https://megasports.vteximg.com.br/arquivos/ids/207303-1000-1000/48203080001_0.jpg?v=637758612326300000",
        cantidad: 70,
        alt: "Camisa de manga corta para hombres"
    },
    {
        nombre: "Camisa de Manga Larga",
        categoria: "categoria1",
        descripcion: "Camisa de verde para hombres",
        precio: 50,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_988776-MLA69187709696_052023-O.webp",
        cantidad: 70,
        alt: "Camisa verde para hombres"
    },
    {
        nombre: "Gorra Casual",
        categoria: "categoria2",
        descripcion: "Gorra casual",
        precio: 38,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_915901-MLA51346257483_082022-O.webp",
        cantidad: 70,
        alt: "Gorra casuals"
    },
    {
        nombre: "Gorra Roja",
        categoria: "categoria2",
        descripcion: "Gorra Roja",
        precio: 55,
        imagen: "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/g/o/gorra-nike-legacy-91-rojo-511040bv1076657-1.jpg",
        cantidad: 70,
        alt: "Gorra Roja"
    },
    {
        nombre: "Zapatillas Deportivas",
        categoria: "categoria3",
        descripcion: "Zapatillas deportivas para hombres y mujeres",
        precio: 50,
        imagen: "https://acdn.mitiendanube.com/stores/001/332/272/products/whatsapp-image-2023-09-01-at-15-38-401-e1453fe7f32345a5ee16935981406053-1024-1024.png",
        cantidad: 70,
        alt: "Zapatillas deportivas para hombres y mujeres"
    },
    {
        nombre: "Zapatos F",
        categoria: "categoria3",
        descripcion: "Zapatos fs",
        precio: 40,
        imagen: "https://tiendapodium.com.ar/wp-content/uploads/2022/10/Zapatillas-Jaguar-Deportiva-4315-Mujer-Blanco-Rosa-Lila.jpg",
        cantidad: 70,
        alt: "Zapatos ffs"
    },
    {
        nombre: "medias negras",
        categoria: "categoria4",
        descripcion: "medias negras",
        precio: 25,
        imagen: "https://acdn.mitiendanube.com/stores/001/709/280/products/captura-de-pantalla-2020-12-17-a-las-16-23-371-94feff4a73d1fa669e16082404478824-640-01-e2b3edba6e293e67c316590378651947-640-0.png",
        cantidad: 70,
        alt: "medias negras"
    },
    {
        nombre: "medias rojas",
        categoria: "categoria4",
        descripcion: "medias rojas",
        precio: 20,
        imagen: "https://d368r8jqz0fwvm.cloudfront.net/6813-product_lg/medias-deportivas-genericas-compresion.jpg",
        cantidad: 70,
        alt: "medias rojas"
    },
    {
        nombre: "Guante protector",
        categoria: "categoria5",
        descripcion: "Guante protector",
        precio: 45,
        imagen: "https://media03.farmaciaslider.com.ar/25241-home_default/body-care-guante-para-deportes-y-levantamiento-de-pesas-talle-s.jpg",
        cantidad: 70,
        alt: "Guante protector"
    },
    {
        nombre: "Mochila",
        categoria: "categoria5",
        descripcion: "Mochila",
        precio: 55,
        imagen: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202401/05/00108434573617____6__640x640.jpg",
        cantidad: 70,
        alt: "Mochila"
    },
    {
        nombre: "Pantalon tela cool",
        categoria: "categoria6",
        descripcion: "Pantalon tela cool",
        precio: 70,
        imagen: "https://www.stockcenter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3964c839/products/UA1366213-001/UA1366213-001-1.JPG?sw=600&sh=600",
        cantidad: 70,
        alt: "Pantalon tela cool"
    },
    {
        nombre: "Pantalon tela nice",
        categoria: "categoria6",
        descripcion: "Pantalon tela nice",
        precio: 75,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_680599-MLA47902835457_102021-O.webp",
        cantidad: 70,
        alt: "Pantalon tela nice"
    }
];
function addToCart(image, price, quantity) {
    console.log('Producto agregado al carrito:');
    console.log('Imagen:', image);
    console.log('Precio:', price);
    console.log('Cantidad:', quantity);
    // Aquí puedes agregar la lógica para agregar el producto al carrito
}

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector('.gallery');

    Productos.forEach((producto, index) => {
        const item = document.createElement('div');
        item.classList.add('image');
        item.setAttribute('data-category', producto.categoria);
        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.alt}">
            <div class="caption">${producto.descripcion}</div>
            <div class="details">
                <p>Precio: ${producto.precio} Kiwy Pesos</p>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="cantidadDropdown${index}" data-bs-toggle="dropdown" aria-expanded="false">
                        Cantidad
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="cantidadDropdown${index}">
                        ${Array.from({length: 10}, (_, i) => `
                            <li><a class="dropdown-item" onclick="updateQuantity('cantidadSeleccionada${index}', ${i + 1})">${i + 1}</a></li>
                        `).join('')}
                    </ul>
                    <p>Seleccionados: <span id="cantidadSeleccionada${index}">0</span></p>
                    <button class="btn btn-primary" onclick="addToCart(${index})">Agregar al carrito</button>
                </div>
            </div>
        `;
        gallery.appendChild(item);
    });
});
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
function updateQuantity(spanId, cantidad) {
    // Actualizar el valor del span con la cantidad seleccionada
    const cantidadSpan = document.getElementById(spanId);
    cantidadSpan.textContent = cantidad;
}
function addToCart(index) {
    const cantidadDropdownId = `cantidadDropdown${index}`;
    const cantidadSeleccionada = document.getElementById(`cantidadSeleccionada${index}`).textContent;
    
    // Obtener el producto correspondiente al índice
    const producto = Productos[index];

    const product = {
        nombre: producto.nombre,
        categoria: producto.categoria,
        descripcion: producto.descripcion,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad: parseInt(cantidadSeleccionada),
        alt: producto.alt
    };

    // Obtener el carrito del almacenamiento local o crear uno nuevo si no existe
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Agregar el producto al carrito
    cart.push(product);

    // Guardar el carrito en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));

    // Notificar al usuario que el producto se agregó al carrito (puedes personalizar esto según tus necesidades)
    alert('Producto agregado al carrito');
}
