'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const styles = window.getComputedStyle(wall);
  const wallBounds = wall.getBoundingClientRect();

  const borderLeft = parseInt(styles.borderLeftWidth);
  const borderTop = parseInt(styles.borderTopWidth);

  let y = e.clientY - wallBounds.top - borderTop - spider.offsetHeight / 2;
  let x = e.clientX - wallBounds.left - borderLeft - spider.offsetWidth / 2;

  y = Math.max(0, Math.min(y, wall.clientHeight - spider.clientHeight));
  x = Math.max(0, Math.min(x, wall.clientWidth - spider.clientWidth));

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
