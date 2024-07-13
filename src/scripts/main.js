'use strict';

// Находим элементы стены и паука
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider'); // или byid

// Добавляем обработчик клика на документ
document.addEventListener('click', (e) => {
  // общий класс
  if (e.target !== wall) {
    return;
  } // Проверяем, что кликнули на стену

  // Максимальные координаты для паука
  const y = wall.clientHeight - spider.clientHeight;
  const x = wall.clientWidth - spider.clientWidth;

  const positionX = e.offsetX - spider.clientWidth / 2;
  // e.offsetX де був цей клик
  const positionY = e.offsetY - spider.clientHeight / 2;

  // Устанавливаем новые координаты паука
  spider.style.top = `${Math.max(Math.min(y, positionY), 0)}px`; // math mix - правый бордер
  spider.style.left = `${Math.max(Math.min(x, positionX), 0)}px`; // math max - левый бордер
});
