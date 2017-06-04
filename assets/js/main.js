/***************** Función para hacer cambio de navbar con el evento scroll en window ***********************/

function cambioDeNavbar() {
    var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
    // La navbar cambia de color al de la sección correspondiente al llegar a ella
    var navbar = document.getElementById('navbar');
    // Obtenemos el id donde esta el logo para luego asignarle otro src
    var logo = document.getElementById('logo');
    // Boton sign up
    var botonSignUp = document.getElementById('btn-sign-up');

    if (distanciaY > 100) {
        navbar.classList.add('navbar-color');
        logo.setAttribute('src', 'assets/img/logo-pink.png');
        // Dar visibilidad al boton sign up que esta oculto desde el inicio
        botonSignUp.style.visibility = 'visible';
        botonSignUp.style.color = '#FF00BF';
        botonSignUp.style.border = '2px solid #FF00BF';
        // Si la navbar vuelve arriba regresar al color original, al logo original y al estilo de invisibilidad.
    } else {
        navbar.classList.remove('navbar-color');
        logo.setAttribute('src', 'assets/img/logo-white.png');
        botonSignUp.style.visibility = 'hidden';
    }
}

// Evento para el navegador al hacer scroll que detona la función que provoca los cambios de color en la navbar segun la distancia
window.addEventListener('scroll', cambioDeNavbar);


/***************** Función para hacer expandir el modal ***********************/
// Evento click para el input phone number
var presPhoneNumber = document.getElementById('phone-number');
presPhoneNumber.addEventListener('click', desplegarFormulario);

function desplegarFormulario() {
    var phoneNumber = document.getElementById('phone-number');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var city = document.getElementById('city');
    name.classList.remove('ocultar-input');
    email.classList.remove('ocultar-input');
    city.classList.remove('ocultar-input');

    var container = document.getElementById('container');
    container.classList.add('extended-card');
}

function ocultarFormulario() {
    var container = document.getElementById('container');
    container.classList.remove('extended-card');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var city = document.getElementById('city');
    name.classList.add('ocultar-input');
    email.classList.add('ocultar-input');
    city.classList.add('ocultar-input');
}

/****************************** Validaciones ***********************************/

// Función para validar que el telefono sean solo numeros y que minimo tengan 9 caracteres
function validarTelefono(value) {
    return !(isNaN(parseInt(value)));
}

// Función para que la primera letra sea mayuscula
function primeraMayus(value) {
    if (value[0] === value[0].toUpperCase()) {
        return true;
    }
}

// Función para validar el email
function validarCorreo(email) {
    var expRegCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!expRegCorreo.test(email)) {
        return true;
    }
}

// Función que acepte solo letras
function soloLetras(value) {
    return (isNaN(parseInt(value)));
}

// Función para limpiar el formulario
function limpiarForm() {
    var phoneNumber = document.getElementById('phone-number').value = '';
    var name = document.getElementById('name').value = '';
    var email = document.getElementById('email').value = '';
    var city = document.getElementById('city').value = '';
}

var botonBecome = document.getElementById('btn-become');
botonBecome.addEventListener('click', validaciones);

function validaciones() {
    var phoneNumber = document.getElementById('phone-number');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var city = document.getElementById('city');
    var container = document.getElementById('container');

    // si es igual a -1 no tiene la class extenden card
    if (Array.from(container.classList).indexOf('extended-card') === -1) {
        desplegarFormulario();
        return null;
    }

    if (phoneNumber.value === '') {
        phoneNumber.classList.add('invalid-input')
    }
    if (name.value === '') {
        name.classList.add('invalid-input')
    }
    if (email.value === '') {
        email.classList.add('invalid-input')
    }
    if (city.value === '') {
        city.classList.add('invalid-input')
    }

    // Si el telefono no tiene el formato valido le agrego la clase invalid-input, si no se la quito
    if (!validarTelefono(phoneNumber.value)) {
        phoneNumber.classList.add('invalid-input');
    } else {
        phoneNumber.classList.remove('invalid-input');
    }

    if (!primeraMayus(name.value) || !soloLetras(name.value)) {
        name.classList.add('invalid-input');
    } else {
        name.classList.remove('invalid-input');
    }

    if (validarCorreo(email.value)) {
        email.classList.add('invalid-input');
    } else {
        email.classList.remove('invalid-input');
    }

    if (!primeraMayus(city.value)) {
        city.classList.add('invalid-input');
    } else {
        city.classList.remove('invalid-input');
    }

    // Si todo esta correcto vaciamos el formulario y volvemos a la card original
    //validarTelefono(phoneNumber.value) && (!primeraMayus(name.value) || !soloLetras(name.value)) && !validarCorreo(email.value) && !primeraMayus(city.value)
    if (validarTelefono(phoneNumber.value) &&
        (primeraMayus(name.value) || soloLetras(name.value)) &&
        !validarCorreo(email.value) &&
        primeraMayus(city.value)
    ) {
        limpiarForm();
        alert('Registro completado');
        ocultarFormulario();
    }
}