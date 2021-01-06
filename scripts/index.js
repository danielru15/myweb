

//_____________ cambia el color del header

window.addEventListener('scroll', function(){
    const Header = document.querySelector('header')
    Header.classList.toggle('sticky',window.scrollY > 1)
})

//___________________________ menu movil

const navbar = document.querySelector('nav ul')
const menus = document.querySelector('.menu-cel')   
  
menus.addEventListener('click',menusClick)
function menusClick () { 

  navbar.classList.toggle('mostrar')
  // aparece la x del menu
  menus.classList.toggle('change')
}

//___________________ cerrar menu al clickear un enlace.
const navLinks= document.querySelectorAll('nav a')

 // para una variable i que es menor a los a hreff 
 for (let i=0; i<navLinks.length;i++){
     navLinks[i].addEventListener('click',navLinksClick)

      // funcion que cuando haga click me esconda el menu
      function navLinksClick (event) {
          smoothScroll(event)// llama la funcion smoothscroll
         if (navbar.classList.contains('mostrar')){
            // si navbar tiene la clase mostrar , menu haga click y me esconda los links
            menus.click()
         }
          else {
             console.error('Error')
            }
        }
    }

// ___ deslizamiento suave

function smoothScroll(event)  {
    event.preventDefault()

    const targetId = event.currentTarget.getAttribute('href')
    console.log(targetId)
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop-70,
        behavior: 'smooth'
    })
}

// Validacion Formulario
var Formulario = document.getElementById('formulario')
const Nombre = document.getElementById('name')
const Email = document.getElementById('email')
const Texto = document.getElementById('texto')
const error = document.getElementById('Error')
const error2 = document.getElementById('Error2')
const error3 = document.getElementById('Error3')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
/*  
  cuando escribes  en el input 
*/
Formulario.addEventListener('keyup',validar1)
function validar1 (e){
    e.preventDefault()
    let entrar = false
    //nombre
    if(Nombre.value === null || Nombre.value === ''){
        error.innerHTML=('Porfavor ingresa tu Nombre.')
    }else if(Nombre.value.length<3){
        error.innerHTML=('Porfavor ingresa un Nombre valido.')
    }
    else if(Nombre.value !== null || Nombre.value !== '' && Nombre.value.length>=3){
        entrar =true
        error.innerHTML=''
    }
    // Email
    if (!mailformat.test(Email.value)) {
        error2.innerHTML=('Porfavor ingresa un correo valido.')
    }else {
        entrar =true
        error2.innerHTML=''
    }
    
    //texto
    if(Texto.value === null || Texto.value === ''){
        error3.innerHTML=('Porfavor ingresa tu Mensaje.')
    } 
    else if(Texto.value.length<10){
        error3.innerHTML=('El mensaje debe contener como minimo 10 caracteres.')
    }
    else if(Texto.value !== null || Texto.value !== '' && Texto.value.length>=10){
        entrar =true
        error3.innerHTML=''
    }

}
// boton arriba
const backToTopButton = document.querySelector("#up");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);


function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};





