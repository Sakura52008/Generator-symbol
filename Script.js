function generateRandomCharacter() {
    // Функция для генерации случайного символа
    const randomKey = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
  
    // Функция для вывода сообщения
    const logKey = (key) => {
      const logger = `Вы нажали ${key}!!!`;
      alert(logger);
    };
  
    logKey(randomKey);
}
