'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target.classList.contains('wall')) {
    let x = e.offsetX;
    let y = e.offsetY;

    if (x > 375) {
      x = 375;
    } else if (x < 25) {
      x = 25;
    }

    if (y > 375) {
      y = 375;
    } else if (y < 25) {
      y = 25;
    }

    spider.style.marginLeft = (x - 25) + 'px';
    spider.style.marginTop = (y - 25) + 'px';
  }
});
