export class filme {
    titulo : string
    diretor : string
    anolancamento : number
    avaliacoes : number[] = []

    constructor(titulo : string, diretor : string, anolancamento : number) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.anolancamento = anolancamento
    }

    descricao() : void {
        console.log( `Titulo: ${this.titulo} 
                    Diretor: ${this.diretor} 
                    Ano de Lançamento: ${this.anolancamento}`)
    }

    gettitulo() : string {
        return this.titulo;
    }

    settitulo(valor : string) : void {
        this.titulo = valor;
    }

    getdiretor() : string {
        return this.diretor;
    }

    setdiretor(valor : string) : void {
        this.diretor = valor;
    }

    getanolancamento() : number {
        return this.anolancamento;
    }

    setanolancamento(valor : number) : void {
        this.anolancamento = valor;
    }

    adicionar_av(nota : number) : void {
        if (1 <= nota || nota <= 5)
            console.log(`Avaliação: ${nota} `)
        else
            console.log("Valor indisponivel")
    }
    calcular_med(elementos ): void {

    }
}