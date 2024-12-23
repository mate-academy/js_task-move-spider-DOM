'use strict';

document.addEventListener('click', (e) => {
  const targetDiv = e.target.closest('div');

  if (targetDiv.tagName === 'DIV') {
    const spider = document.querySelector('.spider');
    const coordsOfTarget = targetDiv.getBoundingClientRect();
    let coordsY =
      e.clientY -
      (coordsOfTarget.top + targetDiv.clientTop) -
      spider.offsetHeight / 2;
    let coordsX =
      e.clientX -
      (coordsOfTarget.left + targetDiv.clientLeft) -
      spider.offsetWidth / 2;

    if (coordsX < 0) {
      coordsX = 0;
    } else if (coordsX > targetDiv.clientWidth - spider.offsetWidth) {
      coordsX = targetDiv.clientWidth - spider.offsetWidth;
    }

    if (coordsY < 0) {
      coordsY = 0;
    } else if (coordsY > targetDiv.clientHeight - spider.offsetHeight) {
      coordsY = targetDiv.clientHeight - spider.offsetHeight;
    }

    spider.style.top = coordsY + 'px';
    spider.style.left = coordsX + 'px';
  }
});
