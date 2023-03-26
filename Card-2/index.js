const cardEl = document.querySelector(".card-container");
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove",(e)=>{
    let rotateX = -(window.innerWidth/2 - e.pageX)/20;
    let rotateY = -(window.innerHeight/2 - e.pageY)/10;
    cardEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})

document.addEventListener("mouseout",()=>{
        cardEl.style.transform = "";
})