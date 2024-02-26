document.addEventListener("DOMContentLoaded", function() {
  var brandSlider = {};

  var slideCount = document.querySelectorAll('#brand-discount-slider ul li').length;
  var slideWidth = document.querySelector('#brand-discount-slider ul li').offsetWidth;
  var sliderUlWidth = slideCount * slideWidth;

  document.querySelector('#brand-discount-slider').style.width = slideWidth + " ";

  document.querySelector('#brand-discount-slider ul').style.width = sliderUlWidth + " ";
  document.querySelector('#brand-discount-slider ul').style.marginLeft = -slideWidth + " ";

  document.querySelector('#brand-discount-slider ul li:last-child').parentNode.insertBefore(document.querySelector('#brand-discount-slider ul li:last-child'), document.querySelector('#brand-discount-slider ul li:first-child'));

  function moveLeft() {
      var ulElement = document.querySelector('#brand-discount-slider ul');

      setTimeout(function() {
          ulElement.insertBefore(ulElement.lastElementChild, ulElement.firstElementChild);
          ulElement.style.transition = "none";
          ulElement.style.left = "";
      });
  }

  function moveRight() {
      var ulElement = document.querySelector('#brand-discount-slider ul');
  
      setTimeout(function() {
          ulElement.appendChild(ulElement.firstElementChild);
          ulElement.style.transition = "2000";
          ulElement.style.left = "";
        
      });
  }

  document.querySelector('.brand-arrow-prev').addEventListener("click", function() {
      moveLeft();
  });

  document.querySelector('.brand-arrow-next').addEventListener("click", function() {
      moveRight();
  });

  // setTimeout(moveLeft, 1000);
});





















// Obtén las referencias a los elementos del carrusel y las miniaturas
const slider = document.querySelectorAll('.carousel__slide');
const thumbnails = document.querySelectorAll('.brand-logo-container');

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







// // Obtener la referencia a todos los divs
// const smallSlides = document.getElementsByClassName('smallSlide');
// const smallIcons = document.getElementsByClassName('smallIcon');

// // Función que cambia el color de fondo de un div específico
// const cambiarColorFondo = (div) => {
//   const isActive = div.classList.contains('active');
//   div.style.backgroundColor = isActive ? '#f2be22' : 'transparent';
//   // div.style.color = isActive ? '#FFFFFF' : 'initial';
//   // icon.style.filter = isActive ? 'invert(100%)' : 'none';
// };

// // Evento click en los divs
// for (let i = 0; i < smallSlides.length; i++) {
//   smallSlides[i].addEventListener('click', function() {
//     for (let j = 0; j < smallSlides.length; j++) {
//       if (j !== i) {
//         smallSlides[j].classList.remove('active');
//         cambiarColorFondo(smallSlides[j], smallIcons[j]);
//       }
//     }
//     this.classList.toggle('active');
//     cambiarColorFondo(this, smallIcons[i]);
//   });
// }


// Obtener la referencia a todos los divs
const smallSlides = document.getElementsByClassName('smallSlide');
const smallIcons = document.getElementsByClassName('smallIcon');
let divActivoPrevio = null; // Almacena la referencia al div activo previo

// Función que cambia el color de fondo de un div específico
const cambiarColorFondo = (div, icon) => {
  const isActive = div.classList.contains('active');
  div.style.backgroundColor = isActive ? '#f2be22' : 'transparent';
  // Puedes agregar el cambio de color del icono aquí
  // icon.style.filter = isActive ? 'invert(100%)' : 'none';
};

// Evento click en los divs
for (let i = 0; i < smallSlides.length; i++) {
  smallSlides[i].addEventListener('click', function() {
    // Restaurar el estado del div activo previo
    if (divActivoPrevio && divActivoPrevio !== this) {
      divActivoPrevio.classList.remove('active');
      cambiarColorFondo(divActivoPrevio, smallIcons[i]); // Se usa 'i' solo como ejemplo, ajusta según necesites
    }

    // Establecer el nuevo div como activo
    this.classList.toggle('active');
    cambiarColorFondo(this, smallIcons[i]); // Se usa 'i' solo como ejemplo, ajusta según necesites

    // Actualizar el div activo previo
    divActivoPrevio = this;
  });
}
















