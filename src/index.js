//ocultar las demas paginas y mostrar solo la primera seccion home al cargar
window.onload = () => {
    document.getElementById("escribirMsj").style.display="none";
    document.getElementById("msjCifrado").style.display="none";
    document.getElementById("msjDecifrado").style.display="none";  
}

//al hacer click al boton comenzar se esconde la seccion home y muestra las demas
document.getElementById("btnComenzar").addEventListener("click",() => {
    const nombre = document.getElementById("txt").value;
    if (nombre == ""){
        alert("Olvidaste ingresar tu nombre");
      } else {
        document.getElementById("nombreUsuario").innerHTML = nombre;
        document.getElementById("home").style.display="none";
        document.getElementById("msjCifrado").style.display="none";
        document.getElementById("msjDecifrado").style.display="none";
        document.getElementById("escribirMsj").style.display="block";
      }
});

//creo 2 vriables  para los botones de cifrar y decifrar
let cifrar = document.getElementById('btnCifrar');
//let decifrar = document.getElementById('btnDecifrar');
//ante el evento de hacer clic cifra y decifra
cifrar.addEventListener('click', encode);
//decifrar.addEventListener('click', decode());

//creo una funcion para dentro de esta llamar a la función cipher.encode y pasarle argumentos
function encode() {
    const string = document.getElementById('msj').value;
    const offset = document.getElementById('clave').value;
    const resultado = cipher.encode(offset,string);
    document.getElementById("msjCifrado").style.display="block";
    document.getElementById('msjCifrado').innerHTML = resultado;
}

























