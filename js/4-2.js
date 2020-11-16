// 1. Внутри функции filterArray создаем условие через if;
// 2. Условие - если коллбек функция (в которую передано элемент массива, индекс элемента массива, и сам массив) возращает true;
// 3. Тогда добавляем элемент в новый массив numbers;

const isUniq = (element, index, arr) => arr.indexOf(element) === index;
const isEven = element => element % 2 === 0;

function filterArray(array, cb) {
  'use strict';
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    // Write code under this line
    if (cb(element, index, array)) {
      numbers.push(element);
    }
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 5];

console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven));
// [2, 4, 2]
