'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target === wall) {
    const coordX = e.clientX;
    const coordY = e.clientY;

    const spiderParams = spider.getBoundingClientRect();
    const wallParams = wall.getBoundingClientRect();

    const newX = coordX - wallParams.left - spiderParams.width / 2;
    const newY = coordY - wallParams.top - spiderParams.height / 2;

    spider.style.transform = `translate(${newX}px, ${newY}px)`;
  }
});
