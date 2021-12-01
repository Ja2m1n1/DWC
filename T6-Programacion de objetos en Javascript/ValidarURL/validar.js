let url;
let barra=" \/";
let expScheme = /barra{2,4}/;

if(expScheme.test(url)){
    //obtener trozo scheme
    //let scheme = url.split(0,url.search(expScheme));
    document.write("validado");
}else{
    document.write("no validado");
}



let seguir = true;
let nombreOK=true;

do {
    url = prompt("Escribe la URL a validar: ")
    if (nombre == null) seguir = false;
    if (seguir) {
       
        }

} while (seguir);


