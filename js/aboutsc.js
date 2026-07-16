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

