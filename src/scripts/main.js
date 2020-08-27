'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallCoords = wall.getBoundingClientRect();
  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  if (e.target === wall) {
    const X = e.clientX - wallCoords.x - 10 - (spider.offsetWidth / 2);
    const Y = e.clientY - wallCoords.y - 10 - (spider.offsetHeight / 2);

    X < 0
      ? spider.style.left = '0px'
      : X > maxX
        ? spider.style.left = maxX + 'px'
        : spider.style.left = X + 'px';

    Y < 0
      ? spider.style.top = '0px'
      : Y > maxY
        ? spider.style.top = maxY + 'px'
        : spider.style.top = Y + 'px';
  }
});
