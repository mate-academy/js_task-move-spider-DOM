'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // Отримуємо прямокутники для стіни та павука
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // Координати кліку всередині стіни
  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  // Центрування павука
  let targetLeft = clickX - spiderRect.width / 2;
  let targetTop = clickY - spiderRect.height / 2;

  // Межі руху (щоб павук не вилазив за стіну)
  const maxX = wallRect.width - spiderRect.width;
  const maxY = wallRect.height - spiderRect.height;

  // Затискання в межах
  if (targetLeft < 0) {
    targetLeft = 0;
  }

  if (targetTop < 0) {
    targetTop = 0;
  }

  if (targetLeft > maxX) {
    targetLeft = maxX;
  }

  if (targetTop > maxY) {
    targetTop = maxY;
  }

  // Присвоюємо стилі (відносно .wall, бо spider — absolute усередині неї)
  spider.style.left = `${targetLeft}px`;
  spider.style.top = `${targetTop}px`;
});
