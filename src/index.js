//secciones//
const home = document.getElementById("home");
const escribirMsj = document.getElementById("escribirMsj");
const msjCifrado = document.getElementById("msjCifrado");
const msjDecifrado = document.getElementById("msjDecifrado");
escribirMsj.style.display= "none";
msjCifrado.style.display= "none";
msjDecifrado.style.display= "none";

function btnComenzar(){
    escribirMsj.style.display = "block",
    home.style.display = "none";
    msjCifrado.style.display= "none";
    msjDecifrado.style.display= "none";
} 

function btnCifrar(){
    msjCifrado.style.display= "block";
    msjDecifrado.style.display= "none";
}
