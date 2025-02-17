'use strict';

const spiderEl = document.querySelector('.spider');
const wallEl = document.querySelector('.wall');
const halfSpider = spiderEl.clientHeight / 2;

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    let positTop = e.offsetY;
    let positLeft = e.offsetX;

    positTop = Math.max(
      halfSpider,
      Math.min(positTop, wallEl.clientHeight - halfSpider),
    );

    positLeft = Math.max(
      halfSpider,
      Math.min(positLeft, wallEl.clientWidth - halfSpider),
    );

    spiderEl.style.top = `${positTop}px`;
    spiderEl.style.left = `${positLeft}px`;
    spiderEl.style.transform = 'translate(-50%, -50%)';
  }
});
