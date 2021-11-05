let contador = 0; 

//const par = (x) => (x%2 == 0) ? "par" : "impar";

const varPI = (num) => {
    if(num % 2 == 0){
        console.log(num + "  Par")
    } else {
        console.log(num +"  Impar")
    }
}


while(contador < 500){
    varPI(parseInt(Math.random()*10+1));
    contador ++;
}