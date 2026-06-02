'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (wall) {
    const wallRect = wall.getBoundingClientRect();
    const styles = window.getComputedStyle(wall);

    // Extract numeric values for padding and border
    const paddingLeft = parseFloat(styles.paddingLeft);
    const paddingTop = parseFloat(styles.paddingTop);
    const borderLeft = parseFloat(styles.borderLeftWidth);
    const borderTop = parseFloat(styles.borderTopWidth);
    const paddingRight = parseFloat(styles.paddingRight);
    const paddingBottom = parseFloat(styles.paddingBottom);
    const borderRight = parseFloat(styles.borderRightWidth);
    const borderBottom = parseFloat(styles.borderBottomWidth);

    // Cursor position relative to the wall’s content box
    const clickX = e.clientX - wallRect.left - borderLeft - paddingLeft;
    const clickY = e.clientY - wallRect.top - borderTop - paddingTop;

    // Calculate spider position centered on cursor
    let spiderLeft = clickX - spider.offsetWidth / 2;
    let spiderTop = clickY - spider.offsetHeight / 2;

    // Clamp so spider stays inside content box
    const contentWidth =
      wallRect.width - borderLeft - borderRight - paddingLeft - paddingRight;
    const contentHeight =
      wallRect.height - borderTop - borderBottom - paddingTop - paddingBottom;

    spiderLeft = Math.max(
      0,
      Math.min(spiderLeft, contentWidth - spider.offsetWidth),
    );

    spiderTop = Math.max(
      0,
      Math.min(spiderTop, contentHeight - spider.offsetHeight),
    );

    spider.style.left = `${spiderLeft}px`;
    spider.style.top = `${spiderTop}px`;
  }
});
