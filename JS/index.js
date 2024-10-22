// Inicialización del primer carrusel (Swiper) para la clase .mySwiper-1
var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1, // Solo se muestra 1 slide (diapositiva) a la vez.
    spaceBetween: 30, // Espacio de 30px entre las diapositivas.
    loop: true, // Activa el loop, lo que significa que al final del carrusel vuelve a empezar desde la primera diapositiva.
    pagination: {
        el: ".swiper-pagination", // Selector del elemento donde se mostrará la paginación.
        clickable: true, // Permite que la paginación sea clicable para cambiar de diapositiva.
    },
    navigation: {
        nextEl: ".swiper-button-next", // Selector para el botón de siguiente.
        prevEl: ".swiper-button-prev", // Selector para el botón de anterior.
    }
});

// Inicialización del segundo carrusel (Swiper) para la clase .mySwiper-2
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3, // Muestra 3 slides a la vez.
    spaceBetween: 20, // Espacio de 20px entre las diapositivas.
    loop: true, // Activa el loop en este carrusel también.
    loopFillGroupWithBlank: true, // Llena el grupo incompleto con un slide en blanco (si es necesario) para que el loop no se rompa.
    navigation: {
        nextEl: ".swiper-button-next", // Selector para el botón de siguiente.
        prevEl: ".swiper-button-prev", // Selector para el botón de anterior.
    },
    breakpoints: { 
        // Define el comportamiento del carrusel según el tamaño de la pantalla.
        0: {
            slidesPerView: 1, // En pantallas pequeñas (desde 0px de ancho), solo se muestra 1 slide a la vez.
        },
        520: {
            slidesPerView: 2, // A partir de 520px de ancho, se muestran 2 slides.
        },
        950: {
            slidesPerView: 3, // A partir de 950px de ancho, se muestran 3 slides.
        }
    }
});

// Selecciona todos los elementos con la clase .tabInput
let tabInput = document.querySelectorAll(".tabInput");

// Recorre cada input seleccionado y añade un evento de cambio
tabInput.forEach(function(input) {
    input.addEventListener('change', function() {
        let id = input.value; // Obtiene el valor del input (que corresponde al ID del carrusel a actualizar).
        let thisSwiper = document.getElementById('swiper' + id); // Selecciona el carrusel correspondiente usando el valor del input.
        thisSwiper.swiper.update(); // Actualiza el carrusel seleccionado para reflejar cambios en su configuración o estructura.
    });
});
