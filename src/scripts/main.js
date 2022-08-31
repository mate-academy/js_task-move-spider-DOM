'use strict';

const spider = document.querySelector('.spider');
const styles = window.getComputedStyle(document.querySelector('.wall'));
const max = parseFloat(styles.height) - spider.offsetHeight;

document.addEventListener('click', e => {
  if (e.target.classList.contains('wall')) {
    spider.style.top = `${e.offsetY - spider.offsetHeight / 2}px`;
    spider.style.left = `${e.offsetX - spider.offsetWidth / 2}px`;

    if (parseFloat(spider.style.top) > max) {
      spider.style.top = '350px';
    }

    if (parseFloat(spider.style.top) < 0) {
      spider.style.top = '0px';
    }

    if (parseFloat(spider.style.left) > max) {
      spider.style.left = '350px';
    }

    if (parseFloat(spider.style.left) < 0) {
      spider.style.left = '0px';
    }
  }
});
