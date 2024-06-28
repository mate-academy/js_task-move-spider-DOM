'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let spiderTopPadding =
    e.clientY + scrollY - wall.offsetTop - wall.clientTop - spiderHeight / 2;

  let spiderLeftPadding =
    e.clientX + scrollX - wall.offsetLeft - wall.clientLeft - spiderWidth / 2;

  if (spiderTopPadding < 0) {
    spiderTopPadding = 0;
  }

  if (spiderLeftPadding < 0) {
    spiderLeftPadding = 0;
  }

  if (spiderTopPadding > wallHeight - spiderHeight) {
    spiderTopPadding = wallHeight - spiderHeight;
  }

  if (spiderLeftPadding > wallWidth - spiderWidth) {
    spiderLeftPadding = wallWidth - spiderWidth;
  }

  spider.style.top = `${spiderTopPadding}px`;
  spider.style.left = `${spiderLeftPadding}px`;
});
