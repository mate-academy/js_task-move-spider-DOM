'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');

  if (e.target === wall) {
    const coords = wall.getBoundingClientRect();

    spider.style.left = e.clientX - coords.left - spider.offsetWidth / 2 + 'px';
    spider.style.top = e.clientY - coords.top - spider.offsetHeight / 2 + 'px';

    if (e.clientX < coords.left + spider.offsetWidth) {
      spider.style.left = 0 + 'px';
    }

    if (e.clientY < coords.top + spider.offsetHeight) {
      spider.style.top = 0 + 'px';
    }

    if (e.clientX > coords.left + wall.clientWidth - spider.offsetWidth) {
      spider.style.left = wall.clientWidth - spider.offsetWidth + 'px';
    }

    if (e.clientY > coords.top + wall.clientHeight - spider.offsetHeight) {
      spider.style.top = wall.clientHeight - spider.offsetHeight + 'px';
    }
  }
});
