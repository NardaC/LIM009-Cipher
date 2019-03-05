//ocultar las demas paginas y mostrar solo la primera seccion home al cargar
window.onload = () => {
    document.getElementById("escribirMsj").style.display="none";
    document.getElementById("msjFinalCifrado").style.display="none";
    document.getElementById("msjFinalDecifrado").style.display="none";  


//al hacer click al boton comenzar se esconde la seccion home y muestra las demas
document.getElementById("btnComenzar").addEventListener("click",() => {
    const nombre = document.getElementById("txt").value;
    if (nombre == ""){
        alert("Olvidaste ingresar tu nombre");
      } else {
        document.getElementById("nombreUsuario").innerHTML = nombre;
        document.getElementById("home").style.display="none";
        document.getElementById("msjFinalCifrado").style.display="none";
        document.getElementById("msjFinalDecifrado").style.display="none";
        document.getElementById("escribirMsj").style.display="block";
      }
});

//creo 2 vriables  para los botones de cifrar y decifrar
let cifrar = document.getElementById('btnCifrar');
let decifrar = document.getElementById('btnDecifrar');
//ante el evento de hacer clic cifra y decifra
cifrar.addEventListener('click', encode);
decifrar.addEventListener('click', decode);

}
//creo una funcion para dentro de esta llamar a la función cipher.encode y pasarle argumentos
function encode() {
    const string = document.getElementById('msj').value;
    const offset = document.getElementById('clave').value;
    const resultado = cipher.encode(offset,string);
    if (offset == ""){
        alert("Olvidaste ingresar la CLAVE");
      } else{
    document.getElementById("msjFinalCifrado").style.display="block";
    document.getElementById("msjFinalCifrado").innerHTML = resultado;
    document.getElementById("msjFinalDecifrado").style.display="none";
}
}

function decode() {
    const string = document.getElementById('msj').value;
    const offset = document.getElementById('clave').value;
    const resultado = cipher.decode(offset,string);
    document.getElementById("msjFinalDecifrado").style.display="block";
    document.getElementById('msjFinalDecifrado').innerHTML = resultado;
    document.getElementById("msjFinalCifrado").style.display="none";
}

document.getElementById("btnLimpiar").addEventListener("click",() => {
    document.getElementById("msj").value = "";
    document.getElementById("msjFinalCifrado").innerHTML = "";
    document.getElementById("msjFinalDecifrado").innerHTML = "";
    document.getElementById("clave").value ="";
});























