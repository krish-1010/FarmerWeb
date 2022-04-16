const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const hoverYes = document.querySelector('.testimonial1');
const t2 = document.querySelector('.testimonial2');
const ImgCard = document.querySelector('.img');

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible')
    
    if(visibility === "false") {
        primaryNav.setAttribute('data-visible',true);
        navToggle.setAttribute('aria-expanded', true);
    }

    else if (visibility === "true") {
        primaryNav.setAttribute('data-visible',false);
        navToggle.setAttribute('aria-expanded', false);
    }
});


hoverYes.addEventListener('mouseenter', ()=> ImgCard.style.backgroundImage = `url('https://farm24.io/_nuxt/img/registrations.0e32667.jpg')`);
t2.addEventListener('mouseenter', ()=> ImgCard.style.backgroundImage = `url('https://farm24.io/_nuxt/img/machinery.ca0dc0a.jpg')`);
