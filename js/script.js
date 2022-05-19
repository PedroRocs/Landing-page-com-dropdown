
function abrirMenuResponsivo(){
    let containerMenu = document.getElementById("navbar");
    let backgroundMenuAtivo = document.querySelector(".fundo")
        backgroundMenuAtivo.classList.toggle("active");
        containerMenu.classList.toggle("active");
}

function abrirDropdown(parametro){
    let menuDropdown = document.querySelectorAll(".dropdown");
    menuDropdown[parametro].classList.toggle("active");
}

window.addEventListener("resize", ()=>{

let img = document.querySelector("#content-img img");

if(window.screen.width<989){
    img.src="images/image-hero-mobile.png";
}
if(window.screen.width>989){
    img.src="images/image-hero-desktop.png";
    console.log("1")
}
})
