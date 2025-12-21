'use strict';

document.addEventListener('click', (e) => {
  const target = e.target.closest('.wall');
  const spider = document.querySelector('.spider');
  const border = 10;

  if (target) {
    const correction = target.getBoundingClientRect();
    let y = e.clientY - correction.top - border - spider.offsetHeight / 2;
    let x = e.clientX - correction.left - border - spider.offsetWidth / 2;

    y = Math.max(0, Math.min(y, target.clientHeight - spider.clientHeight));
    x = Math.max(0, Math.min(x, target.clientWidth - spider.clientWidth));

    spider.style.top = y + 'px';
    spider.style.left = x + 'px';
  }
});
