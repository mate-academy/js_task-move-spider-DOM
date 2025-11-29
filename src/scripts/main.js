'use strict';




document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const rect = wall.getBoundingClientRect();
const borderTop = parseFloat(getComputedStyle(wall).borderTopWidth);
const borderLeft = parseFloat(getComputedStyle(wall).borderLeftWidth);
  const spiderObj = spider.getBoundingClientRect();
  let topCoords = e.clientY - rect.top - borderTop - spiderObj.height / 2;
  let leftCoords = e.clientX - rect.left - borderLeft - spiderObj.width / 2;

  const maxTop = wall.clientHeight - spiderObj.height;
  const maxLeft = wall.clientWidth - spiderObj.width;

  topCoords = Math.max(0, Math.min(topCoords, maxTop));
  leftCoords = Math.max(0, Math.min(leftCoords, maxLeft));

  spider.style.top = topCoords + 'px';
  spider.style.left = leftCoords + 'px';
});
