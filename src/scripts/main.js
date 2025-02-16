'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const curEl = e.target;

  if (curEl.className !== 'wall') {
    return;
  }

  const rect = curEl.getBoundingClientRect();
  const styles = window.getComputedStyle(curEl);
  const contentWidth =
    rect.width -
    parseFloat(styles.borderLeftWidth) -
    parseFloat(styles.borderRightWidth);
  const contentHeight =
    rect.height -
    parseFloat(styles.borderTopWidth) -
    parseFloat(styles.borderBottomWidth);
  let clickX =
    e.clientX -
    rect.left -
    parseFloat(styles.borderLeftWidth) -
    spider.clientWidth / 2;
  let clickY =
    e.clientY -
    rect.top -
    parseFloat(styles.borderTopWidth) -
    spider.clientHeight / 2;

  if (clickX < 0) {
    clickX = 0;
  }

  if (clickY < 0) {
    clickY = 0;
  }

  if (clickX + spider.clientWidth > contentWidth) {
    clickX = contentWidth - spider.clientWidth;
  }

  if (clickY + spider.clientHeight > contentHeight) {
    clickY = contentHeight - spider.clientHeight;
  }
  spider.style.left = clickX + 'px';
  spider.style.top = clickY + 'px';
});
