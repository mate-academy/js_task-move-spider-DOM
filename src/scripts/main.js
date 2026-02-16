// Увімкнути strict mode, щоб ловити більше помилок.
'use strict';

// Знайти стіну, в межах якої рухається павук.
const wall = document.querySelector('.wall');

// Якщо стіну не знайдено, зупинити виконання.
if (!wall) {
  throw new Error('No wall element found');
}

// Знайти елемент павука.
const spider = document.querySelector('.spider');

// Якщо павука не знайдено, зупинити виконання.
if (!spider) {
  throw new Error('No spider element found');
}

// Обробляти клік тільки в межах стіни.
wall.addEventListener('click', (e) => {
  // Геометрія стіни відносно viewport.
  const wallRect = wall.getBoundingClientRect();
  // Поточний розмір павука.
  const spiderRect = spider.getBoundingClientRect();
  // Внутрішня ліва межа (з урахуванням border).
  const wallLeftInnerEdge = wallRect.left + wall.clientLeft;
  // Внутрішня верхня межа (з урахуванням border).
  const wallTopInnerEdge = wallRect.top + wall.clientTop;

  // Сирий left для центрування по X.
  // Приклад: 500 - 200 - 25 = 275.
  const rawLeft = e.clientX - wallLeftInnerEdge - spiderRect.width / 2;
  // Сирий top для центрування по Y.
  // Приклад: 260 - 120 - 25 = 115.
  const rawTop = e.clientY - wallTopInnerEdge - spiderRect.height / 2;
  // Максимальний left, щоб не вийти праворуч.
  // Приклад: 400 - 50 = 350, або 40 - 50 = 0 (через захист).
  const maxLeft = Math.max(wall.clientWidth - spiderRect.width, 0);
  // Максимальний top, щоб не вийти вниз.
  // Приклад: 400 - 50 = 350, або 40 - 50 = 0 (через захист).
  const maxTop = Math.max(wall.clientHeight - spiderRect.height, 0);
  // Обмежити left у діапазоні [0, maxLeft].
  // Приклад: -20 -> 0, 120 -> 120, 500 -> 350.
  const nextLeft = Math.min(Math.max(rawLeft, 0), maxLeft);
  // Обмежити top у діапазоні [0, maxTop].
  // Приклад: -10 -> 0, 90 -> 90, 999 -> 350.
  const nextTop = Math.min(Math.max(rawTop, 0), maxTop);

  // Записати фінальну X-позицію у стилі.
  spider.style.left = `${nextLeft}px`;
  // Записати фінальну Y-позицію у стилі.
  spider.style.top = `${nextTop}px`;
});
