/* ===================================================
   EDUFORCI V5 - SCRIPT.JS
=================================================== */

// ================= MENU MOBILE =================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// ================= HEADER OMBRE =================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 5px 25px rgba(0,0,0,.08)";

    }

});

// ================= APPARITION AU DÉFILEMENT =================

const elements = document.querySelectorAll(
".hero, .stats, .mission, .about, .services, .gallery, .contact"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold:0.2

});

elements.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=".8s";

    observer.observe(el);

});

// ================= DÉFILEMENT FLUIDE =================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

console.log("EDUFORCI V5 chargé avec succès 🚀");
