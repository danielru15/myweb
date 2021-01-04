window.addEventListener('load',animationInicio)

function animationInicio (){
 const tit = document.getElementById('prototipo1')
 const cel = document.getElementById('cel')
 const pc=document.getElementById('pc')
 const positionobj1 = (tit,cel,pc).getBoundingClientRect().top
 const tamañodepantalla = window.innerHeight;
  
 if (positionobj1 < tamañodepantalla) {
    tit.classList.add('animate__animated', 'animate__backInDown');
    cel.classList.add('animate__animated', 'animate__fadeInUp');
    pc.classList.add('animate__animated', 'animate__slideInRight');
    
 }
}

// animacion habilidades
window.addEventListener('scroll',animationSkills)

function animationSkills (){
const th = document.getElementById('th')
 const skills = document.getElementById('skill')
 const positionobj2 = (skills,th).getBoundingClientRect().top
 const tamañodepantalla1 = window.innerHeight;
  
 if (positionobj2 < tamañodepantalla1) {
    th.classList.add('animate__animated' ,'animate__fadeInLeft' ,'animate__delay-1s')
     skills.classList.add('animate__animated','animate__fadeInUp','animate__delay-1s')
    }
}

// Servicios 
window.addEventListener('scroll',Servicios)

function Servicios (){
const t = document.getElementById('t')
const Service = document.getElementById('Service')
 const positionobj2 = (Service,t).getBoundingClientRect().top
 const tamañodepantalla1 = window.innerHeight;
  
 if (positionobj2 < tamañodepantalla1) {
    t.classList.add('animate__animated' ,'animate__fadeInRight' ,'animate__delay-1s')
    Service.classList.add('animate__animated' ,'animate__fadeInUp','animate__delay-1s' )
    }
}

// clientes
window.addEventListener('scroll',Clientes)

function Clientes (){
const t1 = document.getElementById('t1')
 const positionobj2 = (t1).getBoundingClientRect().top
 const tamañodepantalla1 = window.innerHeight;
  
 if (positionobj2 < tamañodepantalla1) {
    t1.classList.add('animate__animated' ,'animate__fadeInRight' ,'animate__delay-1s')
    }
}

// contacto 
window.addEventListener('scroll',Contacto)

function Contacto (){
const tt1 = document.getElementById('tt1')
const positionobj2 = (t1).getBoundingClientRect().top
const tamañodepantalla1 = window.innerHeight;
 
if (positionobj2 < tamañodepantalla1) {
   tt1.classList.add('animate__animated' ,'animate__fadeInDown' ,'animate__delay-3s')
   }
}