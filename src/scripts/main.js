'use strict';

const ourWall = document.querySelector('.wall');
const ourSpider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const coorsWall = ourWall.getBoundingClientRect();
  const clickX = e.clientX - coorsWall.left - ourWall.clientLeft;
  const clickY = e.clientY - coorsWall.top - ourWall.clientTop;
  const rawLeft = clickX - ourSpider.clientWidth / 2;
  const rawTop = clickY - ourSpider.clientHeight / 2;
  const maxLeft = ourWall.clientWidth - ourSpider.clientWidth;
  const maxTop = ourWall.clientHeight - ourSpider.clientHeight;
  const spiderLeft = Math.min(maxLeft, Math.max(0, rawLeft));
  const spiderTop = Math.min(maxTop, Math.max(0, rawTop));

  ourSpider.style.left = `${spiderLeft}px`;
  ourSpider.style.top = `${spiderTop}px`;
});
