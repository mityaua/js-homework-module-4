// 1. По условиям задачи возвращаем через первую стрелочную функцию сумму параметров - неявный возврат (implicit return);
// 2. Также для второй функции делаем вычитание для параметров - неявный возврат (implicit return);
// 3. При создании нового массива numbers для new Array используем длинну массива https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/Array ;

// Write code under this line
const addIndex = (element, index) => element + index;

// Write code under this line
const subIndex = (element, index) => element - index;

function mapArray(array, cb) {
  'use strict';
  // Write code under this line
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    numbers[i] = cb(element, index);
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5];

console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]
