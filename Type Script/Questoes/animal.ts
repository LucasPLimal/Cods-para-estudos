class animal {
    protected nome : string;

    constructor(nome : string) {
        this.nome = nome 
    }

    public emitir_som(): void {
        console.log("som do animal")
    }

    public mover(distancia : number): void {
        console.log(`${this.nome} se moveu ${distancia} metros.`)
    }
}

class cachorro extends animal {
    private raca: string;

    constructor(nome : string, raca : string) {
        super(nome);
        this.raca = raca
    }
    emitir_som(): void {
        console.log("au au au au");
    }
    pegar(): void {
        console.log("VAI PEGAR!!!!!!")
    }
}

class gato extends animal {
    private raca: string;

    constructor(nome : string) {
        super(nome);
    }
    emitir_som(): void {
        console.log("miau miau");
    }
    pegar(): void {
        console.log("VAI PEGAR!!!!!!")
    }
}

let ani = new animal("marmota");
ani.emitir_som();
ani.mover(10);

let chorro = new cachorro("caramelo", "vira-lata")
chorro.emitir_som();
chorro.mover(20);
chorro.pegar();





let animais = [new animal("onça"),
               new cachorro("princesa", "pitmoster"), new gato("garfield")];

animais.forEach(animal => {
    animal.emitir_som()
})