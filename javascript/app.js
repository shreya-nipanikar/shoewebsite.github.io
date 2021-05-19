const card= document.querySelector(".card");
const container = document.querySelector(".rightside");
const title = document.querySelector(".info h1");
const sneakers = document.querySelector(".sneaker img");
const description = document.querySelector(".info h3");
const button = document.querySelector(".purchase button");
var show = document.getElementById("navlinks");


container.addEventListener("mousemove", (event) => {
    let xaxis = (window.innerWidth/2 - event.pageX)/25; 
    let yaxis = (window.innerHeight/2 - event.pageY)/25;
    card.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`; 
} );

//animate in
container.addEventListener("mouseenter", (e)=> {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneakers.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(150px)";
    button.style.transform = "translateZ(75px)";
})

//animate out
container.addEventListener("mouseleave", (e)=> {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneakers.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    button.style.transform = "translateZ(0px)";
});

//close navbar
function closeMenu() {
    show.style.right = "-200px";
}
//show menubar
function showMenu() {
    show.style.right = "0px";
}