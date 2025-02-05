'use strict';

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    const spider = document.querySelector('.spider');
    const wall = document.querySelector('.wall');

    const spiderComputed = getComputedStyle(spider);
    const wallComputed = getComputedStyle(wall);

    const borderWidth = Math.round(
      parseFloat(wallComputed.getPropertyValue('border-width')),
    );

    const wallWidth = parseFloat(wallComputed.getPropertyValue('width'));
    const wallHeight = parseFloat(wallComputed.getPropertyValue('height'));

    const halfWidth = parseFloat(spiderComputed.getPropertyValue('width')) / 2;
    const halfHeight =
      parseFloat(spiderComputed.getPropertyValue('height')) / 2;

    let moveLeft = e.clientX - wall.offsetLeft;
    let moveTop = e.clientY - wall.offsetTop;

    if (
      moveLeft < borderWidth ||
      moveTop < borderWidth ||
      moveLeft > wallWidth + borderWidth ||
      moveTop > wallHeight + borderWidth
    ) {
      moveLeft = parseFloat(spiderComputed.getPropertyValue('left'));
      moveTop = parseFloat(spiderComputed.getPropertyValue('Top'));
    } else {
      moveLeft = e.clientX - wall.offsetLeft - borderWidth - halfWidth;
      moveTop = e.clientY - wall.offsetTop - borderWidth - halfHeight;
    }

    if (moveLeft < 0) {
      moveLeft = 0;
    }

    if (moveTop < 0) {
      moveTop = 0;
    }

    if (
      moveLeft >
      wallWidth - parseFloat(spiderComputed.getPropertyValue('width'))
    ) {
      moveLeft =
        wallWidth - parseFloat(spiderComputed.getPropertyValue('width'));
    }

    if (
      moveTop >
      wallHeight - parseFloat(spiderComputed.getPropertyValue('height'))
    ) {
      moveTop =
        wallHeight - parseFloat(spiderComputed.getPropertyValue('height'));
    }

    spider.style.cssText = `
      left: ${moveLeft}px;
      top: ${moveTop}px;
    `;
  }
});
