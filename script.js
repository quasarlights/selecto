window.addEventListener('resize', () => {
  location.reload(); // Forzar la recarga de la página en cambio de tamaño de pantalla
});

//CAROUSEL
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: window.innerWidth < 770 ? 1.5 : 3,
    //slidesPerView: 3,
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

/////MEDIA QUERY

wind.addEventListener('resize', ()=>{
  let myDiv= document.getElementsByClassName('.text-box');  
  if (window.innerWidth < 770) {
    myDiv.remove();
  }
})