// Плавная прокрутка
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Инициализация карты
ymaps.ready(init);

function init() {
  // Координаты для метки (например, Калининград)
  const location = [54.727572, 20.510116];

  // Создаем карту
  const map = new ymaps.Map("map", {
    center: location, // Центр карты
    zoom: 14 // Масштаб карты
  });

  // Добавляем метку
  const placemark = new ymaps.Placemark(location, {
    hintContent: 'Барбершоп "The Kings"',
    balloonContent: 'Мы ждем вас здесь!'
  });

  map.geoObjects.add(placemark);
}
