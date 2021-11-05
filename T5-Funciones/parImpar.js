let contador = 0; 

while(contador < 500){
    ParImpar(parseInt(Math.random()*10+1));
    contador ++;
}



function ParImpar(num){
    if(num % 2 == 0){
        console.log(num + "  Par")
    } else {
        console.log(num +"  Impar")
    }
}