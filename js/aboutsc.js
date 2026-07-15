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

