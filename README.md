# Fila Circular

Este projeto contém a implementação de uma **Fila Circular** em TypeScript.  
A fila circular é uma estrutura de dados onde o último elemento volta para o início do vetor quando chega ao final, evitando desperdício de espaço.

A classe `FilaCircular` permite:

- Adicionar elemento ao final da fila  
- Remover e retornar o primeiro elemento da fila  
- Ver o elemento que está no início  
- Verificar se a fila está vazia  
- Verificar se a fila está cheia  
- Exibir a quantidade de elementos  
- Exibir todos os elementos na fila  
- Retornar a capacidade máxima  
- Exibir quanto espaço ainda está disponível na fila  

---

## 🔧 Estrutura da Classe

A classe possui os seguintes atributos:

- `elementos`: array que armazena os valores  
- `capacidadeDaLista`: tamanho máximo da fila  
- `ponteiroFrente`: indica o primeiro elemento  
- `ponteiroTras`: indica onde o próximo será inserido  
- `tamanhoAtual`: quantidade atual de elementos  

---

## 🧪 Exemplo de Testes

Aqui estão exemplos simples para testar a classe:

```ts
let fila = new FilaCircular(5);

fila.adicionarElementos(10);
fila.adicionarElementos(20);
fila.adicionarElementos(30);

fila.exibirElementosDaFila();  
// Elementos da fila:
// Posição 0: 10
// Posição 1: 20
// Posição 2: 30

fila.removerElemento();  
fila.exibirElementosDaFila();

fila.exibirPrimeiroElemento();
fila.exibirQuantidadeElementos();
fila.exibirCapacidadeMaxima();
fila.exibirCapacidadeDisponivel();
