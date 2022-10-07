'use strict';

const spider = document.querySelector('.spider');

document.querySelector('.wall').addEventListener('click', e => {
  let topp = e.offsetY;
  let left = e.offsetX;

  if (e.target.classList.contains('spider')) {
    spider.style.top = `${parseFloat(spider.style.top) + topp - 25}px`;
    spider.style.left = `${parseFloat(spider.style.left) + left - 25}px`;

    return;
  }

  if (topp < 25) {
    topp = 25;
  }

  if (left < 25) {
    left = 25;
  }

  if (topp > 375) {
    topp = 375;
  }

  if (left > 375) {
    left = 375;
  }

  spider.style.top = `${topp}px`;
  spider.style.left = `${left}px`;
  spider.style.transform = 'translate(-50%, -50%)';
});
