'use strict';

document.addEventListener('click', event => {
  const body = document.body;
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  wall.addEventListener('click', e => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    const spiderBodyX = (body.clientWidth - wall.clientWidth) / 2;
    const spiderBodyY = (body.clientHeight - wall.clientHeight) / 2;

    let positionX = clickX - spiderBodyX - spider.offsetWidth / 2;
    let positionY = clickY - spiderBodyY - spider.offsetHeight / 2;

    positionX = Math.min(Math.max(positionX, 0),
      wall.clientWidth - spider.offsetWidth);

    positionY = Math.min(Math.max(positionY, 0),
      wall.clientHeight - spider.offsetHeight);

    spider.style.top = `${positionY + window.scrollY}px`;
    spider.style.left = `${positionX + window.scrollX}px`;
  });
});
