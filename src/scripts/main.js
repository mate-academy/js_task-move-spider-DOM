'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

/* eslint-disable-next-line no-shadow */
const moveSpider = (event) => {
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const maxOffsetLeft = wall.clientWidth - spiderWidth;
  const maxOffsetTop = wall.clientHeight - spiderHeight;

  const clientX = event.clientX - wallRect.left - wall.clientLeft;
  const clientY = event.clientY - wallRect.top - wall.clientTop;

  const spiderOffsetLeft = clientX - (spiderWidth / 2);
  const spiderOffsetTop = clientY - (spiderHeight / 2);

  const limitedOffsetTop = Math.min(
    Math.max(0, spiderOffsetTop), maxOffsetTop,
  );

  const limitedOffsetLeft = Math.min(
    Math.max(0, spiderOffsetLeft), maxOffsetLeft,
  );

  spider.style.top = `${limitedOffsetTop}px`;
  spider.style.left = `${limitedOffsetLeft}px`;
};

wall.addEventListener('click', moveSpider);
