//secciones//
window.onload = () => {
    document.getElementById("escribirMsj").style.display="none";
    document.getElementById("msjCifrado").style.display="none";
    document.getElementById("msjDecifrado").style.display="none";  
}

document.getElementById("btnComenzar").addEventListener("click",() => {
    document.getElementById("home").style.display="none";
    document.getElementById("msjCifrado").style.display="none";
    document.getElementById("msjDecifrado").style.display="none";
    document.getElementById("escribirMsj").style.display="block";
});

document.getElementById("btnCifrar").addEventListener("click",() => {
    //document.getElementById("home").style.display="none";
    document.getElementById("msjCifrado").style.display="block";
    document.getElementById("msjDecifrado").style.display="none";
    document.getElementById("escribirMsj").style.display="block";
});

//let cifrado = document.getElementById("btnCifrar");