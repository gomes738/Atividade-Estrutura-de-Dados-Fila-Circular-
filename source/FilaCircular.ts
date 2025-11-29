class FilaCircular {

    private elementos : Array<number>;
    private capacidadeDaLista : number;
    private ponteiroFrente : number = 0;
    private ponteiroTras : number = 0;
    private tamanhoAtual : number = 0;

    constructor(capacidadeTotal:number){
        this.elementos = new Array(capacidadeTotal);
        this.capacidadeDaLista = capacidadeTotal;
    }

    // Metodo para adicionar elementos na FILA
    adicionarElementos(novoElemento:number): void{
        if(this.tamanhoAtual == this.capacidadeDaLista){
            console.log(`Não é possível armazenar elementos acima da capacidade total: ${this.capacidadeDaLista}`);
            return;
        }

        this.elementos[this.ponteiroTras] = novoElemento;
        this.ponteiroTras = (this.ponteiroTras + 1) % this.capacidadeDaLista;
        this.tamanhoAtual++;

        console.log(`Adicionado elemento: ${novoElemento}`);
    }

    // Metodo para remover elementos da FILA
    removerElemento(): number | null{
        if(this.verificarStatusFilaVazia()){
            console.log("Não há números para remover...");
            return null;
        }

        let elementoRemovido: number = this.elementos[this.ponteiroFrente];
        this.ponteiroFrente = (this.ponteiroFrente + 1) % this.capacidadeDaLista;
        this.tamanhoAtual--;

        console.log(`O elemento ${elementoRemovido} foi removido!`);
        return elementoRemovido;
    }

    // Exibir quantidade de elementos
    exibirQuantidadeElementos(): void {
        console.log(`Quantidade de elementos na fila: ${this.tamanhoAtual}`);
    }

    // Exibir primeiro elemento
    exibirPrimeiroElemento(): number | null{
        if(this.tamanhoAtual == 0){
            this.verificarStatusFilaVazia();
            return null;
        }else{
            let primeiroElemento: number = this.elementos[this.ponteiroFrente];
            console.log(`O primeiro elemento da fila: ${primeiroElemento}`);
            return primeiroElemento;
        }
    }

    // Exibir os elementos corretos da FILA
    exibirElementosDaFila(): void{
        if(this.verificarStatusFilaVazia()){
            return;
        }

        console.log("Elementos da fila:");
        let indiceAtual: number = this.ponteiroFrente;

        for (let i = 0; i < this.tamanhoAtual; i++) {
            console.log(`Posição ${indiceAtual}: ${this.elementos[indiceAtual]}`);
            indiceAtual = (indiceAtual + 1) % this.capacidadeDaLista;
        }
    }

    // Exibir a capacidade máxima da fila
    exibirCapacidadeMaxima(): void {
        console.log(`Capacidade máxima da fila: ${this.capacidadeDaLista}`);
    }

    // Exibir quantos ainda cabem
    exibirCapacidadeDisponivel(): void {
        let capacidadeDisponivel : number = this.capacidadeDaLista - this.tamanhoAtual;
        console.log(`A capacidade disponível na fila é de: ${capacidadeDisponivel}`);
    }

    // Verificar se está vazia
    verificarStatusFilaVazia(): boolean{
        if(this.tamanhoAtual == 0){
            console.log("A fila está completamente vazia...");
            return true;
        }
        return false;
    }

    // Verificar se está cheia
    verificarStatusFilaCheia(): boolean{
        if(this.tamanhoAtual == this.capacidadeDaLista){
            console.log("A fila está cheia");
            return true;
        }
        return false;
    }
}
let fila = new FilaCircular(5);                       
fila.adicionarElementos(10);
fila.adicionarElementos(20);
fila.exibirElementosDaFila