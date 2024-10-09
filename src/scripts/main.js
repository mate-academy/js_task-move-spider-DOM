'use strict';

document.addEventListener('click', (e) => {
  if (e.target.className === 'wall') {
    const x = e.clientX;
    const y = e.clientY;
    const field = e.target.getBoundingClientRect();
    const spider = document.querySelector('.spider');

    const borderX = (e.target.offsetWidth - e.target.clientWidth) / 2;
    const borderY = (e.target.offsetHeight - e.target.clientHeight) / 2;

    const maxLeft = field.width - spider.offsetWidth - borderX * 2;
    const maxTop = field.height - spider.offsetHeight - borderY * 2;

    let spiderLeft = x - field.left - spider.offsetWidth / 2 - borderX;
    let spiderTop = y - field.top - spider.offsetHeight / 2 - borderY;

    spiderLeft = spiderLeft < 0 ? 0 : spiderLeft;
    spiderLeft = spiderLeft > maxLeft ? maxLeft : spiderLeft;

    spiderTop = spiderTop < 0 ? 0 : spiderTop;
    spiderTop = spiderTop > maxTop ? maxTop : spiderTop;

    spider.style.left = `${spiderLeft}px`;
    spider.style.top = `${spiderTop}px`;
  }
});
