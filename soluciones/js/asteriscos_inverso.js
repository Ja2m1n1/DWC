var respuesta;

do{
    respuesta=prompt(
        "Dime el numero de estrellas (entero positivo)"
    );
}while(isNaN(Number(respuesta))||respuesta<0);

for(i=respuesta;i>0;i--){
    for(j=0;j<respuesta-i;j++){
        document.write("&nbsp");
    }
    for(j=0;j<i;j++){
        document.write("* ");
    }
    document.write("</br>");
}