var respuesta;

do{

    respuesta=prompt("Escribe cuantos asteriscos quieres (num entero positvo)");

}while(isNaN(Number(respuesta)) || respuesta < 0);

for(i=0; i<respuesta;i++){
    for(j=0;j<=respuesta-i;j++){
        document.write("&nbsp");
    }
    for(j=0;j<=i;j++){
        document.write("* ");
    }
    document.write("</br>")
}