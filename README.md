## Задача 4-1

#### Callback функция

Функция `mapArray(array, cb)`, принимает 1-м параметром `array` - массив чисел,
а вторым параметром `cb` - функцию обратного вызова (callback). Функция
`mapArray` создает новый массив `numbers` и заполняет его числами из массива
`array` преобразованными функцией cb.

Оформи создание массива `numbers` нужной длины используя `new Array ()` и
необходимый аргумент для задания длины, равной длине `array`.

Напиши функцию обратного вызова addIndex , которая принимает два параметра -
`element` и `index` и возвращает число - сумму `element` и `index` (сложение).

Напиши функцию обратного вызова subIndex , которая принимает два параметра -
`element` и `index` и возвращает число - разность `element` и `index`
(вычитание).

## Задача 4-2

#### Callback функция и метод push

Функция `isUniq` принимает три параметра - `element`, `index` и `arr`. Функция
возвращает `true` или `false` в зависимости от того встречается ли элемент
первый раз в массиве (`true`) или этот элемент в массиве уже встречался
(`false`) .

Функция `isEven` принимает один параметр - `element`. Функция возвращает `true`
или `false` в зависимости от того является ли элемент четным числом или нет.

Функция `filterArray(array, cb)`, принимает 1-м параметром `array` - массив
чисел, а вторым параметром `cb` - функцию обратного вызова (callback). Дополни
тело функции так, чтобы функция `filterArray` заполняла новый пустой массив
`numbers` только теми элементами из массива `array`, для которых вызов функции
`cb` вернет true.

## Задача 4-3

#### Callback функция для получения одного вычисляемого значения массива

Функции add, sub и mult принимают два параметра - `accum` и `element` ,
возвращает число - сумму, разность или произведение параметров.

Дополни тело функции `reduceArray` строкой присвоения `accum` вызова функции cb.
Функция `reduceArray` должна будет подсчитать сумму или разность или
произведение всех элементов массива в зависимости от того какая именно из трех
функция (add, mult, sub) будет передана в качестве `cb`.
