//CAROUSEL
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  /////WHATSAPP/////
  document.getElementById('whatsappLink').addEventListener('click', function(event) {
    // Verifica si el usuario está en una computadora o dispositivo móvil
    if (window.innerWidth >= 768) {
        // Usuario en una computadora
        event.preventDefault(); // Evita la acción predeterminada del enlace
        window.location.href = "https://web.whatsapp.com/send?phone=NUMERODETELEFONO";
    }
});

/////////MODAL/////////////
// Función para abrir el modal
function openModal(image) {
  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = image.src;
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
} 