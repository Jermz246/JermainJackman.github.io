// template_9zovqaw
// service_7veufb8
// user_cFzj2GYWUG4b8G3yo9wOA

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;


function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += "dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}






function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      'service_7veufb8',
      'template_9zovqaw',
      event.target,
      'user_cFzj2GYWUG4b8G3yo9wOA'
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable, please contact me at jermain.aime@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }

  isModalOpen = true
  document.body.classList += " modal--open";
}


