'use strict';

document.addEventListener('click', (e) => {
  const field = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const rect = field.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let y = e.clientY - rect.top - spiderRect.height / 2;
  let x = e.clientX - rect.left - spiderRect.width / 2;

  const maxX = rect.width - spiderRect.width;
  const maxY = rect.height - spiderRect.height;

  y = Math.min(Math.max(y, 0), maxY);
  x = Math.min(Math.max(x, 0), maxX);

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
