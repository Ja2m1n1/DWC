

function Punto(coordX,coordY){
    this.x=coordX,
    this.y=coordY,
    this.cambiar = function(coordX,coordY){
        this.x=coordX;this.y=coordY;
    }
    this.copia = function(){
        return new Punto(this.x,this.y);
    }
    this.obtenerDistancia = function(punto2){
        let a = this.x - punto2.x;
        let b = this.y - punto2.y;
        return (Math.sqrt(a*a + b*b));
    }
}

let p1 = new Punto(2,3);
let p2 = new Punto(5,4)
