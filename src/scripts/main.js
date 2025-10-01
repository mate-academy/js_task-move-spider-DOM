'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', (evt) => {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    // координати кліка відносно стіни
    const clickX = evt.clientX - wallRect.left;
    const clickY = evt.clientY - wallRect.top;

    // половини розмірів павука
    const halfSpiderWidth = spiderRect.width / 2;
    const halfSpiderHeight = spiderRect.height / 2;

    // координати для лівого та верхнього краю павука
    let spiderLeft = clickX - halfSpiderWidth;
    let spiderTop = clickY - halfSpiderHeight;

    // обмеження, щоб павук не виходив за стіну
    spiderLeft = Math.max(
      0,
      Math.min(spiderLeft, wallRect.width - spiderRect.width),
    );

    spiderTop = Math.max(
      0,
      Math.min(spiderTop, wallRect.height - spiderRect.height),
    );

    // встановлюємо позицію
    spider.style.position = 'absolute';
    spider.style.left = `${spiderLeft}px`;
    spider.style.top = `${spiderTop}px`;
  });
});
