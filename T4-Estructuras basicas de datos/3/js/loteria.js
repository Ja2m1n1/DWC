// Declaración de variables
let numero = new Array;
var contador = 0;
const lista = new Set;
var carton;

do {
    numero=[];
    numero.length = 0;
    do {
        numero.push(parseInt(Math.random() * 10));
    } while (numero.length < 6)
    carton = numero.join("");
    if (!lista.has(carton)) {
        lista.add(carton);
    }
} while (lista.size < 50)

for(let pos of lista){    
    document.write(pos,'</br>');
}