'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const styles = getComputedStyle(wall);
const borderWidth = parseInt(styles.borderLeftWidth);

wall.addEventListener('click', (e) => {
  const wallInfo = wall.getBoundingClientRect();
  const xCord = e.clientX;
  const yCord = e.clientY;

  const x = xCord - wallInfo.left - borderWidth - spider.offsetWidth / 2;
  const y = yCord - wallInfo.top - borderWidth - spider.offsetHeight / 2;

  const limitedX = Math.max(
    0,
    Math.min(x, wallInfo.width - spider.offsetWidth - borderWidth * 2),
  );
  const limitedY = Math.max(
    0,
    Math.min(y, wallInfo.height - spider.offsetHeight - borderWidth * 2),
  );

  spider.style.left = limitedX + 'px';
  spider.style.top = limitedY + 'px';
});
