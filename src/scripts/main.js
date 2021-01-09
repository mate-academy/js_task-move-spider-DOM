'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const border = (wall.offsetHeight - wall.clientHeight) / 2;
const halfSpider = (spider.offsetHeight / 2);

function coord(click, halfSp, wallPosition, wallSize) {
  const positionTop = (click - halfSp);
  const positionButtom = (click + halfSp);
  const bordTop = (wallPosition + border);
  const bordButtom = (wallPosition + wallSize + border);
  const positionOut = (click - halfSp - wallPosition - border);

  if (positionTop < bordTop) {
    return `${positionOut + (bordTop - positionTop)}px`;
  }

  if (positionButtom > bordButtom) {
    return `${positionOut - (positionButtom - bordButtom)}px`;
  }

  return `${positionOut}px`;
}

document.addEventListener('click', e => {
  const wallLeft = wall.getBoundingClientRect().left;
  const wallTop = wall.getBoundingClientRect().top;
  const item = e.target.closest('.wall');

  if (!document.contains(item)) {
    return;
  }
  spider.style.top = coord(e.clientY, halfSpider, wallTop, wall.clientHeight);
  spider.style.left = coord(e.clientX, halfSpider, wallLeft, wall.clientWidth);
});
