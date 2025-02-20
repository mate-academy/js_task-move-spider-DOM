'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', (evt) => {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const centerXOffset = spiderRect.width / 2;
    const centerYOffset = spiderRect.height / 2;

    let newLeft = evt.clientX - wallRect.left - centerXOffset;
    let newTop = evt.clientY - wallRect.top - centerYOffset;

    newLeft = Math.max(0, Math.min(newLeft, wallRect.width - spiderRect.width));
    newTop = Math.max(0, Math.min(newTop, wallRect.height - spiderRect.height));

    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });
});
