/*
Algoritmo de inverter array

Escreva um algoritmo que inverta a ordem dos elementos de um array de
números inteiros. O algoritmo deve modificar o array original ou retornar
um novo array com os elementos na ordem inversa.

Entrada:
- Um array de números inteiros (por exemplo, [1, 2, 3, 4, 5]).
Saída:
- Um array contendo os mesmos elementos da entrada, mas na ordem inversa.

Exemplos:

Entrada:
- [1, 2, 3, 4, 5]
Saída:
- [5, 4, 3, 2, 1]

Entrada:
- [10, 20, 30]
Saída:
- [30, 20, 10]

*/

const invertArray = (sortedArray: number[]): number[] => {
  const auxArray = []
  for (let index = sortedArray.length - 1; index >= 0; index--) {
    auxArray.push(sortedArray[index])
  }

  return auxArray
}

console.log(invertArray([1, 2, 3, 4, 5])); // [ 5, 4, 3, 2, 1 ]
console.log(invertArray([10, 20, 30])); // [ 30, 20, 10 ]
