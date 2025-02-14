'use strict';

document.addEventListener('click', (e) => {
  'use strict';

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!spider || !wall) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  let newLeft = e.clientX - wallRect.left - spiderRect.width / 2;
  let newTop = e.clientY - wallRect.top - spiderRect.height / 2;

  newLeft = Math.max(0, Math.min(newLeft, wallRect.width - spiderRect.width));
  newTop = Math.max(0, Math.min(newTop, wallRect.height - spiderRect.height));

  spider.style.position = 'absolute';
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
