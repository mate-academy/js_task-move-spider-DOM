'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('wall')) {
    const wallRect = wall.getBoundingClientRect();
    const styles = getComputedStyle(wall);

    const borderLeft = parseFloat(styles.borderLeftWidth);
    const borderTop = parseFloat(styles.borderTopWidth);
    const borderRight = parseFloat(styles.borderRightWidth);
    const borderBottom = parseFloat(styles.borderBottomWidth);

    const spiderWidth = spider.clientWidth;
    const spiderHeight = spider.clientHeight;

    let x = e.clientX - wallRect.left - spiderWidth / 2 - borderLeft;
    let y = e.clientY - wallRect.top - spiderHeight / 2 - borderTop;

    x = Math.max(
      0,
      Math.min(x, wallRect.width - spiderWidth - borderRight - borderLeft),
    );

    y = Math.max(
      0,
      Math.min(y, wallRect.height - spiderHeight - borderBottom - borderTop),
    );

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }
});
