/*============================
Scroll Animation
============================*/

const fadeItems =
document.querySelectorAll(".fade-up");


const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

    entry.target.classList.add("show");

}


});


},{
threshold:.25
});



fadeItems.forEach(item=>{

observer.observe(item);

});