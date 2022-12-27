'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const halfSpiderWidth = +getComputedStyle(spider).width.slice(0, -2) / 2;
  const wallWidth = +getComputedStyle(wall).width.slice(0, -2);

  if (e.target === wall) {
    spider.style.left = `${e.offsetX}px`;
    spider.style.top = `${e.offsetY}px`;
    spider.style.transform = 'translate(-50%, -50%)';

    if (e.offsetX < halfSpiderWidth) {
      spider.style.left = `${halfSpiderWidth}px`;
    }

    if (e.offsetX > wallWidth - halfSpiderWidth) {
      spider.style.left = `${wallWidth - halfSpiderWidth}px`;
    }

    if (e.offsetY < halfSpiderWidth / 2) {
      spider.style.top = `${halfSpiderWidth}px`;
    }

    if (e.offsetY > wallWidth - halfSpiderWidth) {
      spider.style.top = `${wallWidth - halfSpiderWidth}px`;
    }
  };
});
