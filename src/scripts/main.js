'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const borderW = parseFloat(getComputedStyle(wall).borderWidth);
  const spiderW = spider.offsetWidth;
  const spiderH = spider.offsetHeight;
  const leftEdge = wall.getBoundingClientRect().left + borderW;
  const topEdge = wall.getBoundingClientRect().top + borderW;
  const maxX = wall.clientWidth - spiderW;
  const maxY = wall.clientHeight - spiderH;

  if (!e.target.classList.contains('wall')) {
    return;
  }

  let spiderX = e.clientX - leftEdge - (spiderW / 2);
  let spiderY = e.clientY - topEdge - (spiderH / 2);

  spiderX = limitCoord(spiderX, maxX);
  spiderY = limitCoord(spiderY, maxY);

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});

function limitCoord(coord, max, min = 0) {
  return Math.max(coord, min) > min ? Math.min(coord, max) : min;
}
