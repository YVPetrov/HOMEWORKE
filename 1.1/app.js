var word1=prompt('Введите первое слово','');
var word2=prompt('Введите второе слово','');
if (word1.length == word1.length) {
  // разбить строку на буквы, отсортировать
  var sorted1 = word1.toLowerCase().split('').sort().join('');
  var sorted2 = word2.toLowerCase().split('').sort().join(''); 
  if (sorted1 == sorted2) {
    alert('Анаграмма')
  }
  else{
    alert('Не анаграмма')
  }
}
else {
  alert('Не анаграмма')
}
