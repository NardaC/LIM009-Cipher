window.cipher = {
  encode: (offset,string) => {
    //creamos una varialble que sera nuestro resultado final
    const resultado = '';
    //usamos el bucle for para repetir por todo el string
    for(let i= 0; i < string.length; i ++){
      //para mayusculas
      if(65 <= string.charCodeAt(i) && string.charCodeAt(i) <= 90){
        //obtener el ascci del string
        let ascci = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
        //obtener e imprimir el mensaje cifrado obtenido del ascci
        let nuevoMsj = String.fromCharCode(ascci);
        document.write(nuevoMsj);

      }
      //para minusculas 
      else if (97<= string.charCodeAt(i) && string.charCodeAt(i) <= 122){
      let ascci = (string.charCodeAt(i) - 97 + offset) % 26 + 97;
      let nuevoMsj = String.fromCharCode(ascci);
      document.write(nuevoMsj);
    }
    
    // para espacio 
    else if (string.charCodeAt(i) === 32){
    document.write(" ");
  }
      resultado += nuevoMsj;
  }
  return reultado;
  }
}
