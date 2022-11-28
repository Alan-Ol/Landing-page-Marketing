const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
           nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


const navLink = document.querySelectorAll('.nav__link')

 function linkAction (){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
 }

 navLink.forEach(n => n.addEventListener('click', linkAction))


 const sections = document.querySelectorAll('section[id]')

 function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        seccionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('nav__menu a[href*=' + seccionId + ']').classList.add('active-link');
        }else{
            document.querySelector('nav__menu a[href*=' + seccionId + ']').classList.remove('active-link')
        }
    })
 }
 
 window.addEventListener('scroll', scrollActive);

 function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
 }
window.addEventListener('scroll', scrollHeader)

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');

    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)


window.addEventListener('scroll', scrollTop)
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});
sr.reveal(`.home__data, .home__img,
    .decoration__data, .float, .cart-house,
    .footer__content, .testimonial-container`,{
    origin: 'top',
    interval: 200
})
sr.reveal('.send__content, .left',{
    origin: 'left',
})
sr.reveal('.send__img, .right',{
    origin: 'right',
})



alertify.set('notifier','position', 'bottom-right');
alertify.message('Bienvenidos');

const suscribe = document.getElementById("suscription")

 

suscribe.addEventListener('click', () =>{
    alertify.success("suscripto con exito")
 })


document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active")
   
})
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active")
})


