let arrayCont = [0,0,0,0,0,0,0,0,0,0];
var contador = 0;
var numero = 0;
//Este do, controla que se haga 10000 veces
do {
  //saca numero aleatorio
   numero = parseInt(Math.random()*10+1); 
   //La posicion es el numero - 1(pq array empieza por 0) 
   arrayCont[numero-1]++;
   contador++;
   
} while (contador < 10000)

  for(i=0;i<arrayCont.length;i++){
    document.write('<li>Numero ',i+1,': ',arrayCont[i],'</li>');
  }

