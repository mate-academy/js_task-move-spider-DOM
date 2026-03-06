'use strict';

// eslint-disable-next-line no-shadow
document.addEventListener('click', (event) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const field = wall.getBoundingClientRect();

  if (!wall.contains(event.target)) {
    return;
  }

  // Підрахунок координат центру павука
  let left =
    event.clientX - field.left - wall.clientLeft - spider.offsetWidth / 2;
  // eslint-disable-next-line no-shadow
  let top =
    event.clientY - field.top - wall.clientTop - spider.offsetHeight / 2;

  // Обмеження координат, щоб павук не виліз за межі
  left = Math.max(0, Math.min(left, wall.clientWidth - spider.offsetWidth));
  top = Math.max(0, Math.min(top, wall.clientHeight - spider.offsetHeight));
  spider.style.left = `${left}px`;
  spider.style.top = `${top}px`;
});
