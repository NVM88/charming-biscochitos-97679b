
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

const targetId = this.getAttribute("href");

// Links such as the privacy-policy trigger use "#" and are not scroll targets.
if (!targetId || targetId === "#") return;

const target=document.querySelector(targetId);

if (!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

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

    document.addEventListener("keydown", function(e){
        if (e.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
        }
    });

}

const form =
    document.getElementById("contactForm") ||
    document.getElementById("dashboardForm");

if(form){

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        // Required
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

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

        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton ? submitButton.textContent : "";

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Submitting...";
        }

        try {

            const response = await fetch("https://script.google.com/macros/s/AKfycbyy30wEdLWtnjErRqzY1Tl1MjNaHw0Q7YB3X05-EuUH9kVGLAzYOMzPuoOY7W5Uk1vS/exec", {
                method: "POST",
                headers: {
				"Content-Type": "text/plain;charset=utf-8"
			},
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("We couldn't submit your enquiry. Please try again.");
            }


const whatsappNumber = "60124541017";   

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

    alert(err.message || "We couldn't submit your enquiry. Please try again.");

        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }

}
    });
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".menu-overlay");

if(menuToggle && nav && overlay){

    const menuIcon = menuToggle.querySelector("i");

    menuToggle.setAttribute("role", "button");
    menuToggle.setAttribute("tabindex", "0");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.setAttribute("aria-expanded", "false");

    function toggleMenu(){
        const isOpen = nav.classList.toggle("active");
        overlay.classList.toggle("active", isOpen);
        document.body.classList.toggle("menu-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");

        menuIcon.classList.toggle("fa-bars", !isOpen);
        menuIcon.classList.toggle("fa-xmark", isOpen);
    }

    menuToggle.addEventListener("click",()=>{
        toggleMenu();
    });

    menuToggle.addEventListener("keydown", function(e){
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleMenu();
        }
    });

    overlay.addEventListener("click",closeMenu);

    document.querySelectorAll("nav a").forEach(link=>{

        link.addEventListener("click",closeMenu);

    });

    document.addEventListener("keydown", function(e){
        if (e.key === "Escape" && nav.classList.contains("active")) {
            closeMenu();
        }
    });

    function closeMenu(){

        nav.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

}

document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.rel = "noopener noreferrer";
});

if(document.querySelector(".heroSwiper")){
    new Swiper(".heroSwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        updateOnWindowResize: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
}
