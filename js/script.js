//========================
// Sticky Navbar
//========================

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY>60){

navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

}else{

navbar.style.boxShadow="none";

}

});

//========================
// Smooth Scroll
//========================

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



/*==========================
CORE VALUE SWIPER
==========================*/

if(document.querySelector(".valueSwiper")){

    new Swiper(".valueSwiper",{

        loop: true,

    speed: 700,

    spaceBetween: 25,

    slidesPerView: 3,

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    autoplay: {

        delay: 3500,

        disableOnInteraction: false,

    },

    breakpoints: {

        0: {

            slidesPerView: 1,

        },

        768: {

            slidesPerView: 2,

        },

        1100: {

            slidesPerView: 3,

        }

    }

});

}
    
const modal = document.getElementById("policyModal");
const policyLink = document.querySelector(".policy-link");
const closePolicy = document.querySelector(".close-policy");

if (modal && policyLink && closePolicy) {

    policyLink.addEventListener("click", function(e){
        e.preventDefault();
        modal.style.display = "flex";
    });

    closePolicy.onclick = function(){
        modal.style.display = "none";
    };

    window.addEventListener("click", function(e){
        if(e.target === modal){
            modal.style.display = "none";
        }
    });

}

const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        // Required
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const email = form.email.value.trim();

        const data = {
            name: form.name.value,
            phone: form.phone.value,
            email: email,
            company: form.company.value,
            position: form.position.value,
            income: form.income.value,
            concern: form.concern.value,
            service: form.service.value,
            message: form.message.value
        };

        try {

            await fetch("https://script.google.com/macros/s/AKfycby9TXXpRul1aDoD_UgRULcQGuEEu0Gpjpy1m0s962xmODL_VonTMG0g3ESbkrRM5FV3/exec", {
                method: "POST",
                headers: {
                    "Content-Type":"text/plain;charset=utf-8"
                },
                body: JSON.stringify(data)
            });

            alert("Your enquiry has been submitted successfully!");
            form.reset();

        } catch(err){

            alert("Submission failed.");

        }

    });

}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".menu-overlay");

if(menuToggle && nav && overlay){

    const menuIcon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click",()=>{

        nav.classList.toggle("active");
        overlay.classList.toggle("active");

        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-xmark");

    });

    overlay.addEventListener("click",closeMenu);

    document.querySelectorAll("nav a").forEach(link=>{

        link.addEventListener("click",closeMenu);

    });

    function closeMenu(){

        nav.classList.remove("active");
        overlay.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

}
