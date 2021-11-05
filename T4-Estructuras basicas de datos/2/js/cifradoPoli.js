// Declaración de variables
var texto, clave;
var cifra;
var textoCifrado = '';
var contadorClave = 0;

texto = prompt('Escribe el texto que quieres cifrar');
do {
    clave = prompt('Escribe la clave (un conjunto de números enteros)');
    if (isNaN(Number(clave))) {
        alert('No has escrito un número');
    }
} while (isNaN(Number(clave)));



for (i=0;i<texto.length;i++){        
    cifra = texto.charCodeAt(i) + Number(clave.charAt(contadorClave));
    document.write(String.fromCharCode(cifra));
    contadorClave++;
    if(contadorClave==clave.length){
        contadorClave=0;
    }
}