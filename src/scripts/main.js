'use strict'; // Включаем строгий режим для безопасности

// Находим элементы стены и паука
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Добавляем обработчик клика на документ
document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  } // Проверяем, что кликнули на стену

  // Максимальные координаты для паука
  const maxY = wall.clientHeight - spider.clientHeight;
  const maxX = wall.clientWidth - spider.clientWidth;

  // Новые координаты центра паука
  const yPos = e.offsetY - spider.clientHeight / 2;
  const xPos = e.offsetX - spider.clientWidth / 2;

  // Ограничиваем координаты для паука
  const y = Math.max(0, Math.min(maxY, yPos));
  const x = Math.max(0, Math.min(maxX, xPos));

  // Устанавливаем новые координаты паука
  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
