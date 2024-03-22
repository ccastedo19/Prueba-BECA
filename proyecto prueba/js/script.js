document.addEventListener('DOMContentLoaded', (event) => {
    
    let indiceActual = 0;
    const contenedorImagenes = document.querySelector('.content-img-carrusel');
    const imagenes = document.querySelectorAll('.img-card-info');
    const btnAnterior = document.getElementById('anterior');
    const btnSiguiente = document.getElementById('siguiente');
    const indicadores = document.querySelectorAll('.indicadores span');

    function mostrarImagenes() {
        let desplazamiento;
        
        if (window.innerWidth <= 767) {
            desplazamiento = -indiceActual * 100;
        } else {
            desplazamiento = -indiceActual * (100 / 3);
        }
        contenedorImagenes.style.transform = `translateX(${desplazamiento}%)`;
        indicadores.forEach((indicador, index) => {
            indicador.classList.toggle('activo', index === Math.floor(indiceActual / (window.innerWidth <= 767 ? 1 : 3)));
        });
    }

    btnAnterior.addEventListener('click', () => {
        let imagenesVisibles = window.innerWidth <= 767 ? 1 : 3;
        indiceActual = (indiceActual > 0) ? indiceActual - imagenesVisibles : imagenes.length - imagenesVisibles;
        mostrarImagenes();
    });

    btnSiguiente.addEventListener('click', () => {
        let imagenesVisibles = window.innerWidth <= 767 ? 1 : 3;
        indiceActual = (indiceActual < imagenes.length - imagenesVisibles) ? indiceActual + imagenesVisibles : 0;
        mostrarImagenes();
    });
    window.addEventListener('resize', mostrarImagenes);
    mostrarImagenes();


    // Acordeon Desplegable para FAQS
    document.querySelectorAll('.seccion-questions').forEach(seccion => {
        const button = seccion.querySelector('.questions');
        const respuesta = seccion.querySelector('.answers');
        
        button.addEventListener('click', () => {
            document.querySelectorAll('.seccion-questions').forEach(innerSeccion => {
                if(innerSeccion !== seccion) {
                    innerSeccion.querySelector('.answers').style.display = 'none';
                    innerSeccion.classList.remove('abierto');
                }
            });

            respuesta.style.display = respuesta.style.display === 'block' ? 'none' : 'block';
            seccion.classList.toggle('abierto');
        });
    });
});

// Funcion para el menú responsivo
function toggleMenu() {
    const menu = document.querySelector('.seccion-3');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
}
