'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallReact = wall.getBoundingClientRect();
  const spiderReact = spider.getBoundingClientRect();

  let newLeft = e.clientX - spiderReact.width / 2;
  let newTop = e.clientY - spiderReact.height / 2;

  newLeft = Math.max(
    wallReact.left,
    Math.min(newLeft, wallReact.right - spiderReact.width),
  );

  newTop = Math.max(
    wallReact.top,
    Math.min(newTop, wallReact.bottom - spiderReact.height),
  );

  spider.style.position = 'absolute';
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
