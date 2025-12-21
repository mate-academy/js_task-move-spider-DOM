'use strict';

document.addEventListener('click', (e) => {
  const target = e.target.closest('.wall');
  const spider = document.querySelector('.spider');

  if (target) {
    const styles = window.getComputedStyle(target);
    const correction = target.getBoundingClientRect();
    const borderLeft = parseInt(styles.borderLeftWidth);
    const borderTop = parseInt(styles.borderTopWidth);
    let y = e.clientY - correction.top - borderTop - spider.offsetHeight / 2;
    let x = e.clientX - correction.left - borderLeft - spider.offsetWidth / 2;

    y = Math.max(0, Math.min(y, target.clientHeight - spider.clientHeight));
    x = Math.max(0, Math.min(x, target.clientWidth - spider.clientWidth));

    spider.style.top = y + 'px';
    spider.style.left = x + 'px';
  }
});
