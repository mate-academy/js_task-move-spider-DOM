'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const wallPrefs = wall.getBoundingClientRect();
  const x = e.clientX - wallPrefs.left - wall.clientLeft;
  const y = e.clientY - wallPrefs.top - wall.clientTop;
  const spider = document.querySelector('.spider');
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const pointerX = e.clientX;
  const pointerY = e.clientY;

  if (
    pointerX >= wallPrefs.left &&
    pointerX <= wallPrefs.right &&
    pointerY >= wallPrefs.top &&
    pointerY <= wallPrefs.bottom
  ) {
    const coordLeft = Math.max(
      0,
      Math.min(x - spiderWidth / 2, wall.clientWidth - spiderWidth),
    );

    const coordTop = Math.max(
      0,
      Math.min(y - spiderHeight / 2, wall.clientHeight - spiderHeight),
    );

    spider.style.top = `${coordTop}px`;
    spider.style.left = `${coordLeft}px`;
  }
});
