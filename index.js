
const submit_btn = document.querySelector("#submit") // Selecciona boton submit
const rating_btn = document.querySelectorAll(".botones") //Selecciona botones rating
const card_1 = document.querySelector("#container1") // Seleccioan el card 1
const card_2 = document.querySelector("#container2") // Selecciona el card 2 
const score = document.querySelector("#score") // Selecciona el Span con el score
let stars_score  // valor por defecto


const onsubmit = () => {
   
    card_2.style.display = "flex"
    card_1.style.display = "none"
    score.textContent = stars_score // renderiza el valor del boton
}

const handleClick = (e) => {
    stars_score = e.target.value // Almacena el valor del boton
}



submit_btn.addEventListener("click", onsubmit) // Listener al submit

rating_btn.forEach(btn => {
    btn.addEventListener("click", handleClick) // Listener a todos los botones 
})







