var word1=prompt('Введите первое слово','');
var word2=prompt('Введите второе слово','');
// разбить строку на буквы, отсортировать
var sorted1 = word1.toLowerCase().split('').sort().join('');
var sorted2 = word2.toLowerCase().split('').sort().join('');
(sorted1 == sorted2) ? alert('Анаграмма') : alert('Не анаграмма');
