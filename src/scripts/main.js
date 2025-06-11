'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  wall.addEventListener('click', (eventing) => {
    const wallRec = wall.getBoundingClientRect();

    const offsetX = eventing.clientX - wallRec.left;
    const offsetY = eventing.clientY - wallRec.top;

    const maxX = wall.clientWidth - spider.offsetWidth;
    const maxY = wall.clientHeight - spider.offsetHeight;

    const clampedX = Math.min(Math.max(0, offsetX), maxX);
    const clampedY = Math.min(Math.max(0, offsetY), maxY);

    spider.style.left = `${clampedX}px`;
    spider.style.top = `${clampedY}px`;
  });
});
