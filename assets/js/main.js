/***************** Función para hacer cambio de navbar con el evento scroll en window ***********************/

function cambioDeNavbar() {
    var distanciaY = window.pageYOffset || document.documentElement.scrollTop;
    // La navbar cambia de color al de la sección correspondiente al llegar a ella
    var navbar = document.getElementById('navbar');
    // Obtenemos el id donde esta el logo para luego asignarle otro src
    var logo = document.getElementById('logo');
    // Boton sign up
    var botonSignUp = document.getElementById('btn-sign-up');
    console.log(botonSignUp.style.visibility);

    if (distanciaY > 200) {
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