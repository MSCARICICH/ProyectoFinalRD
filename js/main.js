// Funcionalidad de la seccion main

const mmnav2 = document.getElementById("mmnav2");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

const comprobarAncho = () => {
	if(window.innerWidth >= 767){
        mmnav2.style.visibility = "hidden";
        mmnav2.style.opacity = "0";
	}
}

comprobarAncho();

window.addEventListener('resize', () => {
	comprobarAncho();
});

abrir.addEventListener("click", () => {
   
     mmnav2.style.visibility = "visible";
     mmnav2.style.opacity = "1";
})

cerrar.addEventListener("click", () => {
     mmnav2.style.visibility = "hidden";
     mmnav2.style.opacity = "0";
})  