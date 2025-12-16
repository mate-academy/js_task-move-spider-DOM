'use strict';

document.addEventListener('click', (e) => {
  const spiderEl = document.body.querySelector('.spider');
  const wallEl = document.body.querySelector('.wall');

  const spiderElSize = parseInt(getComputedStyle(spiderEl).height, 10);
  const coordX = e.clientX;
  const coordY = e.clientY;

  const wallBorder = parseInt(getComputedStyle(wallEl).borderWidth, 10);

  const wallRect = wallEl.getBoundingClientRect();

  if (e.target.closest('.wall')) {
    let shiftY = coordY - wallRect.top - wallBorder - spiderElSize / 2;
    let shiftX = coordX - wallRect.left - wallBorder - spiderElSize / 2;

    if (shiftY < spiderElSize) {
      shiftY = 0;
    }

    if (wallEl.clientHeight - shiftY < spiderElSize) {
      shiftY = wallEl.clientHeight - spiderElSize;
    }

    if (shiftX < spiderElSize) {
      shiftX = 0;
    }

    if (wallEl.clientWidth - shiftX < spiderElSize) {
      shiftX = wallEl.clientWidth - spiderElSize;
    }

    spiderEl.style.top = `${shiftY}px`;
    spiderEl.style.left = `${shiftX}px`;
  }
});
