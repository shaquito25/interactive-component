
const submit_btn = document.querySelector("#submit")
const rating_btn = document.querySelectorAll(".botones")




const onsubmit = () => {
    console.log("te toque");
}

const handleClick = (e) => {
   
}

submit_btn.addEventListener("click", onsubmit) // Listener al submit

rating_btn.forEach(btn => {
    btn.addEventListener("click", handleClick) // Listener a todos los botones 
})







