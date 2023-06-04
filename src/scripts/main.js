'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();
  const spiderCenter = spiderRect.height / 2;
  const border = (wallRect.height - wall.clientHeight) / 2;
  let mouseY = null;
  let mouseX = null;
  let spiderY = null;
  let spiderX = null;

  if (e.target.closest('.wall')) {
    mouseY = e.clientY - wallRect.top;
    mouseX = e.clientX - wallRect.left;

    spiderY = mouseY - border - spiderCenter;
    spiderX = mouseX - border - spiderCenter;

    if (spiderY < border + spiderCenter) {
      spiderY = 0;
    } else if (spiderY > wallRect.height
      - spiderRect.height - border - spiderCenter) {
      spiderY = wallRect.height - spiderRect.height - border * 2;
    }

    if (spiderX < border + spiderCenter) {
      spiderX = 0;
    } else if (spiderX > wallRect.width
      - spiderRect.width - border - spiderCenter) {
      spiderX = wallRect.width - spiderRect.width - border * 2;
    }
  }

  spider.style.top = spiderY + 'px';
  spider.style.left = spiderX + 'px';
});
