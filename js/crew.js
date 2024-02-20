// Obtén las referencias a los elementos del carrusel y las miniaturas
const slider = document.querySelectorAll('.carousel__slide');
const thumbnails = document.querySelectorAll('.thumbnails__container');

// Muestra la primera diapositiva
slider[0].style.display = 'block';

// Añade el evento click a cada miniatura
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    // Oculta todas las diapositivas
    slider.forEach(slide => {
      slide.style.display = 'none';
    });
    
    // Muestra la diapositiva correspondiente al índice seleccionado
    slider[index].style.display = 'block';
  });
});







// Obtener la referencia a todos los divs
const smallSlides = document.getElementsByClassName('smallSlide');
const smallIcons = document.getElementsByClassName('smallIcon');

// Función que cambia el color de fondo de un div específico
const cambiarColorFondo = (div, icon) => {
  const isActive = div.classList.contains('active');
  div.style.backgroundColor = isActive ? '#f2be22' : 'transparent';
  // div.style.color = isActive ? '#FFFFFF' : 'initial';
  // icon.style.filter = isActive ? 'invert(100%)' : 'none';
};

// Evento click en los divs
for (let i = 0; i < smallSlides.length; i++) {
  smallSlides[i].addEventListener('click', function() {
    for (let j = 0; j < smallSlides.length; j++) {
      if (j !== i) {
        smallSlides[j].classList.remove('active');
        cambiarColorFondo(smallSlides[j], smallIcons[j]);
      }
    }
    this.classList.toggle('active');
    cambiarColorFondo(this, smallIcons[i]);
  });
}



