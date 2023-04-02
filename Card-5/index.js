const imgEl = document.querySelector("img");
const icons = document.querySelector(".icons");

imgEl.addEventListener("click",()=>{
    imgEl.classList.toggle("active");
    icons.classList.toggle("active");
})

imgEl.classList.remove("active");
