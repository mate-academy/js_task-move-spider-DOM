'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Cypress не чекає анімацію
spider.style.transition = 'none';

wall.addEventListener('click', (e) => {
  // Клік тільки по стіні або павуку
  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Координати кліку відносно ВНУТРІШНЬОЇ області стіни (без border)
  let x = e.clientX - wallRect.left - wall.clientLeft - spiderWidth / 2;

  let y = e.clientY - wallRect.top - wall.clientTop - spiderHeight / 2;

  // Максимальні координати (внутрішня область, без border)
  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  // Обмеження
  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > maxX) {
    x = maxX;
  }

  if (y > maxY) {
    y = maxY;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
