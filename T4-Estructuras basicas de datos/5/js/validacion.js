let nombre,contraseña;
var minusculas = "abcdefghijklmnñopqrstuvwxyz";
var numeros = "1234567890";
var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

var checkMin = 0;
var checkNum = 0;
var checkMay = 0;
var checkOther = 0;
var salir = false;

nombre = prompt("Nombre de usuario: ");

    
for(i=0; i<nombre.length; i++){

    let caracterActual = nombre.charAt(i);

    //Si es numero, sigue, si es minuscula, sigue, si no es ninguno de los dos, alerta.
    if(!isNaN(Number(nombre)) && numeros.indexOf(caracterActual,0)==-1 && minusculas.indexOf(caracterActual,0)==-1){
        alert("Solo numeros y minusculas en el nombre");
        let nombre = prompt("Nombre de usuario: ");

    }
}


contraseña = prompt("Contraseña: ");

while(salir==false){
    for(j=contraseña.length; j>0 ; j--){
        let caracterActualCont = contraseña.charAt(j);
    
        //Si es numero, minuscula, mayuscula u otro caracter, suma uno a su variable correspondiente
        if(numeros.indexOf(caracterActualCont,0)!=-1){
            checkNum++;
        }else if(minusculas.indexOf(caracterActualCont,0)!=-1){
            checkMin++;
        }else if(mayusculas.indexOf(caracterActualCont,0)!=-1){
            checkMay++;
        }else{
            checkOther++;
        }
    }
    
    //Lanza mensaje de alerta si no se encontro alguno de los caracteres necesarios para la validacion
    if(checkNum==0|checkMin==0|checkMay==0|checkOther==0){
        alert("Debe contener, al menos: un numero, una minuscula, una mayuscula y otro caracter");
        contraseña = prompt("Contraseña: ");
    }else{
        salir = true;
    }
}




