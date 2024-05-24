// Espera a que el DOM se haya cargado completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el formulario de contacto por su ID
    const form = document.getElementById('contactoForm');

    // Agrega un event listener para manejar el evento de envío del formulario
    form.addEventListener('submit', (event) => {
        // Previene el comportamiento por defecto del formulario, que es recargar la página
        event.preventDefault();

        // Obtiene los valores de los campos del formulario y los recorta para eliminar espacios en blanco al inicio y al final
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        // Verifica si el checkbox está marcado
        const suscripcion = document.getElementById('suscripcion').checked;

        // Verifica si alguno de los campos está vacío o si el checkbox no está marcado
        if (!nombre || !apellido || !email || !telefono || !mensaje || !suscripcion) {
            // Muestra una alerta indicando que todos los campos son obligatorios
            alert('Todos los campos son obligatorios y deben ser completados.');
            return; // Detiene la ejecución del event listener
        }

        // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, usando fetch o AJAX.
        // Ejemplo:
        // fetch('url/del/servidor', {
        //     method: 'POST',
        //     body: JSON.stringify({ nombre, apellido, email, telefono, mensaje, suscripcion }),
        //     headers: { 'Content-Type': 'application/json' }
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));

        // Muestra una alerta indicando que el formulario se envió correctamente
        alert('Formulario enviado correctamente.');
        // Resetea el formulario a sus valores iniciales
        form.reset();
    });
});
