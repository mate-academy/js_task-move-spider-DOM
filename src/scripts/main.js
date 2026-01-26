'use strict';

const wall = document.querySelector('.wall');
wall.style.position = 'relative';
const spider = document.querySelector('.spider');
spider.style.position = 'absolute';

wall.addEventListener('click', (e) => {
  const wallPosition = wall.getBoundingClientRect();
  const style = getComputedStyle(wall);
  const x = e.clientX - wallPosition.left - parseFloat(style.paddingLeft);
  const y = e.clientY - wallPosition.top - parseFloat(style.paddingTop);

  const wallContentWidth = wall.clientWidth;
  const wallContentHeight = wall.clientHeight;

  let spiderX = x - spider.offsetWidth / 2;
  let spiderY = y - spider.offsetHeight / 2;

  spiderX = Math.max(0, Math.min(spiderX, wallContentWidth - spider.offsetWidth));
  spiderY = Math.max(0, Math.min(spiderY, wallContentHeight - spider.offsetHeight));

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';
});
