console.log("ABOUT JS CONNECTED");

/*==========================
Achievement Counter
==========================*/

const counters = document.querySelectorAll(".counter");

let started = false;


function startCounter(){

    counters.forEach(counter=>{

        const target = Number(counter.dataset.target);

        let count = 0;

        const increment = target / 100;


        function update(){

            count += increment;

            if(count < target){

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target;

            }

        }


        update();

    });

}


const achievement =
document.querySelector(".achievement");


if(achievement){

    const observer =
    new IntersectionObserver(entries=>{

        if(entries[0].isIntersecting && !started){

            startCounter();

            started = true;

        }

    },{
        threshold:.5
    });


    observer.observe(achievement);

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

