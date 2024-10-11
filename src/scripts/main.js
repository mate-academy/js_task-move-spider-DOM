'use strict';

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('wall')) {
    const x = e.clientX;
    const y = e.clientY;
    const field = e.target.getBoundingClientRect();
    const spider = document.querySelector('.spider');

    const borderX = (e.target.offsetWidth - e.target.clientWidth) / 2;
    const borderY = (e.target.offsetHeight - e.target.clientHeight) / 2;

    const maxLeft = Math.max(0, field.width - spider.offsetWidth - borderX * 2);

    const maxTop = Math.max(
      0,
      field.height - spider.offsetHeight - borderY * 2,
    );

    let spiderLeft = x - field.left - spider.offsetWidth / 2 - borderX;
    let spiderTop = y - field.top - spider.offsetHeight / 2 - borderY;

    spiderLeft = Math.min(maxLeft, spiderLeft);
    spiderTop = Math.min(maxTop, spiderTop);

    spider.style.left = spiderLeft + 'px';
    spider.style.top = spiderTop + 'px';
  }
});
