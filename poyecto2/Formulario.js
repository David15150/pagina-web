document.getElementById('enviarBtn').addEventListener('click', function(event) {
    let isValid = true;
    const inputs = document.querySelectorAll('.user-box input');

    inputs.forEach(input => {
        if (input.name === 'nombre' && !/^[a-zA-Z\s]+$/.test(input.value.trim())) {
            isValid = false;
            input.classList.add('error');
            alert('El campo de nombre solo debe contener letras.');
        } else if (input.name === 'correo' && !input.value.includes('@')) {
            isValid = false;
            input.classList.add('error');
            alert('El campo de correo electrónico debe contener un @.');
        } else if (input.value.trim() === '') {
            isValid = false;
            input.classList.add('error');
            alert('Por favor, llena todos los campos.');
        } else {
            input.classList.remove('error');
        }
    });

    if (!isValid) {
        event.preventDefault(); // Evita la navegación
    } else {
        // Aquí puedes agregar la lógica para redirigir a index.html si todos los campos están llenos
        window.location.href = 'index.html';
    }
});

document.getElementById('eliminarBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita la navegación
    const inputs = document.querySelectorAll('.user-box input');

    inputs.forEach(input => {
        input.value = ''; // Limpia el valor de cada campo
    });

    alert('Todos los campos han sido eliminados.');
});
