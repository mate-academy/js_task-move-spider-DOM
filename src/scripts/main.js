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

    if (shiftY < 0) {
      shiftY = 0;
    }

    if (shiftY > wallEl.clientHeight - spiderElSize) {
      shiftY = wallEl.clientHeight - spiderElSize;
    }

    if (shiftX < 0) {
      shiftX = 0;
    }

    if (shiftX > wallEl.clientWidth - spiderElSize) {
      shiftX = wallEl.clientWidth - spiderElSize;
    }

    spiderEl.style.top = `${shiftY}px`;
    spiderEl.style.left = `${shiftX}px`;
  }
});
