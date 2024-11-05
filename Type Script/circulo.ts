class circulo {
     private name: string;
     private raio: number;
     private x: number;
     private y: number;

    constructor(name: string, raio: number, x: number, y: number) {
        this.name = name
        this.raio = raio;
        this.x = x;
        this.y = y;
    }

    getRaio() : number {
        return this.raio;
    }

    setRaio(r : number) : void {
        if(r <= 0)
            console.log("Ta ficando maluco de colocar o raio igual a 0???? Cadela.")
        else if(r > 15)
            console.log("Pode não amigão");
        else 
            this.raio = r;
    }

     public exibir() : string {
        return ` ${this.name} = Raio: ${this.raio}, X: ${this.x}, Y: ${this.y}`;   
    }
     public mover(x: number, y: number) : void {
        this.x += x;
        this.y += y;
    }
     public aumentar(raio : number) : void {
        this.raio += raio;
    }
}

let c1 = new circulo("circulo1", 2, 0, 0);
c1.mover(20, 45);
console.log(c1.exibir());

let c2 = new circulo("circulo2",3, 5, 2);
c2.setRaio(0);

c2.aumentar(37);
console.log(c2.exibir());