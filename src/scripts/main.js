'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const borderWidth = e.target.offsetWidth - e.target.clientWidth;
  const height = e.target.offsetHeight - borderWidth;
  const width = e.target.offsetWidth - borderWidth;
  const diff = spider.offsetWidth / 2;
  const leftOff = diff;
  const rightOff = width - diff;
  const topOff = diff;
  const bottomOff = height - diff;

  if (e.target.classList.contains('wall')) {
    let x = e.offsetX;
    let y = e.offsetY;

    if (e.offsetX <= leftOff) {
      x = leftOff;
    }

    if (e.offsetX >= rightOff) {
      x = rightOff;
    }

    if (e.offsetY <= topOff) {
      y = topOff;
    }

    if (e.offsetY >= bottomOff) {
      y = bottomOff;
    }

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
    spider.style.transform = 'translate(-50%, -50%)';
  }
});
