/*
Algoritmo de busca em array

Escreva um algoritmo que realiza a busca de um número
em uma lista ordenada de números inteiros. O algoritmo
deve retornar o índice do número buscado, caso ele
exista na lista. Caso  contrário, deve retornar uma
indicação de que o número não foi encontrado
(por exemplo, -1).

 Entrada:
 - Uma lista ordenada de números inteiros (por exemplo, [1, 3, 5, 7, 9, 11]).
 - Um número inteiro a ser buscado.

 Saída:
 -  O índice do número buscado na lista, caso ele exista.
 - -1, caso o número não esteja presente na lista.

 Exemplos:

 Entrada:
 - Lista: [1, 3, 5, 7, 9, 11]
 - Número buscado: 7

 Saída:
 - 3 (o número 7 está na posição de índice 3 na lista).
 
 Entrada:
 - Lista: [2, 4, 6, 8, 10, 12]
 - Número buscado: 5
 
 Saída:
 - -1 (o número 5 não está na lista)
*/

const binarySearch = (sortedArray: number[], target: number): number => {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (sortedArray[mid] === target) {
      return mid;
    }

    if (sortedArray[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // 5
console.log(binarySearch([2, 4, 6, 8, 10, 12], 5)); // -1
