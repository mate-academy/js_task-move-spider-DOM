'use strict';

document.addEventListener('click', (e) => {
  // шукаємо елементи в DOM
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!wall.contains(e.target)) {
    return; // Виходимо з функції
  }
  // отримуємо поточне положення стіни на екрані,
  // щоб знайти точку кліку всередині неї

  const rect = wall.getBoundingClientRect();
  // rect містить властивості left, top, width, height тощо.

  // розрахунки координат
  // e.clientX — це координата кліку відносно вікна.
  // Віднімаємо rect.left, щоб отримати координату всередині стіни.
  // Віднімаємо (offsetWidth / 2), щоб під курсором опинився центр павука
  let x = e.clientX - rect.left - wall.clientLeft - spider.offsetWidth / 2;
  let y = e.clientY - rect.top - wall.clientTop - spider.offsetHeight / 2;

  // визначаємо максимально можливі координати
  // Павук не може посунутися далі, ніж ширина стіни мінус його власна ширина.
  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  // фіксуємокоординати в межах [0 ... max]
  // Math.max(0, x) не дає координаті стати меншою за нуль.
  // Math.min(..., maxX) не дає координаті стати більшою за край стіни.
  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
