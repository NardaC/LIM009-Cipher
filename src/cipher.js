window.cipher = {
  encode: (offset,string) => {
    //creamos una varialble que sera nuestro resultado final
    let resultado = '';
    let offset1 = parseInt(offset);
    //let prueba = parseInt('offset);
    //usamos el bucle for para repetir por todo el string
    for(let i= 0; i < string.length; i ++){
      //para mayusculas
      if(65 <= string.charCodeAt(i) && string.charCodeAt(i) <= 90){
        //obtener el ascci del string
        let ascci = (string.charCodeAt(i) - 65 + offset1) % 26 + 65;
        //obtener e imprimir el mensaje cifrado obtenido del ascci
        let nuevoMsj = String.fromCharCode(ascci);
        resultado += nuevoMsj;
      }else if (97<= string.charCodeAt(i) && string.charCodeAt(i) <= 122){ //para minusculas
        let ascci = (string.charCodeAt(i) - 97 + offset1) % 26 + 97;
        let nuevoMsj = String.fromCharCode(ascci);
        resultado += nuevoMsj;
      }else if (string.charCodeAt(i) === 32) {resultado += " "};
    } //para espacio
  
  //resultado += nuevoMsj;
  return resultado; 
  },
  decode: (offset,string) => {
    //creamos una varialble que sera nuestro resultado final
    let resultado = '';
    let offset2 = parseInt(offset);
    //let prueba = parseInt('offset);
    //usamos el bucle for para repetir por todo el string
    for(let i= 0; i < string.length; i ++){
      //para mayusculas
      if(65 <= string.charCodeAt(i) && string.charCodeAt(i) <= 90){
        //obtener el ascci del string
        let ascci = (string.charCodeAt(i) - 65 - offset2) % 26 + 65;

        //obtener e imprimir el mensaje cifrado obtenido del ascci
        let nuevoMsj = String.fromCharCode(ascci);
        resultado += nuevoMsj;
      }else if (97<= string.charCodeAt(i) && string.charCodeAt(i) <= 122){ //para minusculas
        let ascci = (string.charCodeAt(i) - 97 - offset2) % 26 + 97;

        let nuevoMsj = String.fromCharCode(ascci);
        resultado += nuevoMsj;
      }else if (string.charCodeAt(i) === 32) {resultado += " "};
    } //para espacio
  
  //resultado += nuevoMsj;
  return resultado; 
  },
};
