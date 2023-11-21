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
// DOBLE MODAL PC
function openDobleModalPc() {
  
  const modal = document.getElementById("myDobleModalPc");
  modal.style.display = "block";
  modal.style.zIndex= "1000";
  // Obtener las imágenes
  const modalImage1 = document.getElementById("modalImage1pc");
  const modalImage2 = document.getElementById("modalImage2pc");

  // Configurar las URL de las imágenes
  const url1 = "https://bolson-selecto-bucket.s3.us-east-2.amazonaws.com/5.png";
  const url2 = "https://bolson-selecto-bucket.s3.us-east-2.amazonaws.com/6.png";

  // Establecer las fuentes de las imágenes
  modalImage1.src = url1;
  modalImage2.src = url2;
}

////OPEN DOBLE MODAL MOVILE
function openDobleModalMovile() {
  const modal = document.getElementById("myDobleModalMovile");
  modal.style.display = "block";

  // Obtener las imágenes
  const modalImage1 = document.getElementById("modalImage1");
  const modalImage2 = document.getElementById("modalImage2");

  // Configurar las URL de las imágenes
  const url1 = "https://bolson-selecto-bucket.s3.us-east-2.amazonaws.com/5.png";
  const url2 = "https://bolson-selecto-bucket.s3.us-east-2.amazonaws.com/6.png";

  // Establecer las fuentes de las imágenes
  modalImage1.src = url1;
  modalImage2.src = url2;
}
// Función para cerrar el modal DOBLE MOVILE
function closeDobleModalMovile() {
  document.getElementById("myDobleModalMovile").style.display = "none";
}
// Función para cerrar el modal DOBLE PC
function closeDobleModalPc() {
  const myDobleModalPc=document.getElementById("myDobleModalPc")
  myDobleModalPc.style.display = "none";
 //myDobleModalPc.style.zIndex= "2";
  
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
