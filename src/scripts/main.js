'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

function moveSpider(evenT) {
  const wallRect = wall.getBoundingClientRect();

  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const centerX = evenT.clientX - wallRect.left - spiderWidth / 2;
  const centerY = evenT.clientY - wallRect.top - spiderHeight / 2;

  const constrainedX = Math.max(
    0,
    Math.min(centerX, wallRect.width - spiderWidth),
  );

  const constrainedY = Math.max(
    0,
    Math.min(centerY, wallRect.height - spiderHeight),
  );

  spider.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`;
}

wall.addEventListener('click', moveSpider);
