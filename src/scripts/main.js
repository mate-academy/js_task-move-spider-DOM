'use strict';

'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;
  let spiderLeft = clickX - spider.offsetWidth / 2;
  let spiderTop = clickY - spider.offsetHeight / 2;

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderLeft > wall.clientWidth - spider.offsetWidth) {
    spiderLeft = wall.clientWidth - spider.offsetWidth;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderTop > wall.clientHeight - spider.offsetHeight) {
    spiderTop = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
