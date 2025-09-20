'use strict';

const container = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (!container || !spider) {
} else {
  container.style.position = 'relative';
  spider.style.position = 'absolute';

  container.addEventListener('click', (e) => {
    const contRect = container.getBoundingClientRect();
    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    const targetX = e.clientX - contRect.left - spiderWidth / 2;
    const targetY = e.clientY - contRect.top - spiderHeight / 2;

    const limitedX = Math.max(
      0,
      Math.min(targetX, contRect.width - spiderWidth),
    );
    const limitedY = Math.max(
      0,
      Math.min(targetY, contRect.height - spiderHeight),
    );

    spider.style.left = `${limitedX}px`;
    spider.style.top = `${limitedY}px`;
  });
}
