'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const rect = wall.getBoundingClientRect();

  const styles = getComputedStyle(wall);
  const borderLeft = parseFloat(styles.borderLeftWidth);
  const borderTop = parseFloat(styles.borderTopWidth);

  let x = e.clientX - rect.left - borderLeft;
  let y = e.clientY - rect.top - borderTop;

  x -= spider.offsetWidth / 2;
  y -= spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
