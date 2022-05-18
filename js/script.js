
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


