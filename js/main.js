function getRandomFloatInRange(from, to, decimalPlaces) {
  // Проверяем, что переданные значения корректны
  if (to < from) {
    throw new Error("Значение 'до' должно быть больше или равно значению 'от'.");
  }

  // Генерируем случайное число в диапазоне от 'от' до 'до'
  const randomNumber = Math.random() * (to - from) + from;
  
  // Округляем число до указанного количества знаков после запятой
  const roundedNumber = Number(randomNumber.toFixed(decimalPlaces));

  return roundedNumber;
}