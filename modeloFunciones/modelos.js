import { Productos } from "../index";


document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  Productos.forEach((producto, index) => {
    const item = document.createElement("div");
    item.classList.add("image");
    item.setAttribute("data-category", producto.categoria);
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
                ${Array.from(
                  { length: 10 },
                  (_, i) => `
                    <li><a class="dropdown-item" onclick="updateQuantity('cantidadSeleccionada${index}', ${
                    i + 1
                  })">${i + 1}</a></li>
                `
                ).join("")}
            </ul>
            <p>Seleccionados: <span id="cantidadSeleccionada${index}">0</span></p>
                    <button class="btn btn-primary" onclick="addToCart(${index})">Agregar al carrito</button>
                </div>
            </div>
        `;
    gallery.appendChild(item);
  });
});


/**<button class="btn btn-secondary dropdown-toggle" type="button" id="cantidadDropdown${index}" data-bs-toggle="dropdown" aria-expanded="false">
                        Cantidad
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="cantidadDropdown${index}">
                        ${Array.from(
                          { length: 10 },
                          (_, i) => `
                            <li><a class="dropdown-item" onclick="updateQuantity('cantidadSeleccionada${index}', ${
                            i + 1
                          })">${i + 1}</a></li>
                        `
                        ).join("")}
                    </ul>
                    <p>Seleccionados: <span id="cantidadSeleccionada${index}">0</span></p> */