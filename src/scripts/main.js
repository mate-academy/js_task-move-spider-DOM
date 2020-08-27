'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallCoords = wall.getBoundingClientRect();

  if (e.target.children === wall.children) {
    const X = e.clientX - wallCoords.x - 10 - (spider.offsetWidth / 2);
    const Y = e.clientY - wallCoords.y - 10 - (spider.offsetWidth / 2);

    X < 0
      ? spider.style.left = '0px'
      : X > 350
        ? spider.style.left = '350px'
        : spider.style.left = X + 'px';

    Y < 0
      ? spider.style.top = '0px'
      : Y > 350
        ? spider.style.top = '350px'
        : spider.style.top = Y + 'px';
  }
});
