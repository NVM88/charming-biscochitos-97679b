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

    name: form.name.value.trim(),
    phone: form.phone.value.trim(),
    email: form.email.value.trim(),
    company: form.company.value.trim(),
    position: form.position.value.trim(),
    income: form.income.value,
    concern: form.concern.value,
    service: form.service.value,
    message: form.message.value.trim(),
    privacy: form.privacy.checked ? "Agreed" : "Not Agreed"

};

        try {

            await fetch("https://script.google.com/macros/s/AKfycbxVleVrn8OCmt_ukRnXH145Gi0IgnvCUhBR4YFLWlrAqHZI_bit7RkMCH0XXmMRFSAobA/exec", {
                method: "POST",
                headers: {
				"Content-Type": ”text/plain;charset=utf-8“
			},
                body: JSON.stringify(data)
            });


const whatsappNumber = "601110622650";   

const whatsappMessage =
`Hi Nova Wealth Management,

My name is ${data.name}.

I have submitted an enquiry through your website.

Service:
${data.service}

Contact Number:
${data.phone}`;

form.reset();

window.location.href =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        }catch(err){

    console.error(err);

    alert(err.message);

}

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
