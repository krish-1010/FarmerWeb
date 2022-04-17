const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const hoverYes = document.querySelector('.testimonial1');
const t2 = document.querySelector('.testimonial2');
const t3 = document.querySelector('.testimonial3');
const t4 = document.querySelector('.testimonial4');
const t5 = document.querySelector('.testimonial5');
const t6 = document.querySelector('.testimonial6');
const t7 = document.querySelector('.testimonial7');
const t8 = document.querySelector('.testimonial8');
const t9 = document.querySelector('.testimonial9');

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
t3.addEventListener('mouseenter', ()=> ImgCard.style.backgroundImage = `url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`);
t4.addEventListener('mouseenter', ()=> ImgCard.style.backgroundImage = `url('https://images.unsplash.com/photo-1615631508158-ce306dc0dcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=729&q=80')`);
t6.addEventListener('mouseenter', ()=> ImgCard.style.backgroundImage = `url('https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`);
t7.addEventListener('mouseenter', ()=> ImgCard.style.backgroundImage = `url('https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`);
t8.addEventListener('mouseenter', ()=> ImgCard.style.backgroundImage = `url('https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`);
t9.addEventListener('mouseenter', ()=> ImgCard.style.backgroundImage = `url('https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`);

