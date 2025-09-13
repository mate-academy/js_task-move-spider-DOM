'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (wall && spider) {
  wall.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();
    const style = getComputedStyle(wall);

    // border widths (numbers)
    const borderLeft = parseFloat(style.borderLeftWidth) || 0;
    const borderTop = parseFloat(style.borderTopWidth) || 0;

    // Convert the click (viewport coords) into content-box coords:
    //  - clientX - wallRect.left gives distance from outer edge (border-box)
    //  - subtract border width to get distance from content-box top-left
    const contentX = e.clientX - wallRect.left - borderLeft;
    const contentY = e.clientY - wallRect.top - borderTop;

    // Center the spider under the pointer (use rendered size)
    const desiredX = contentX - spider.offsetWidth / 2;
    const desiredY = contentY - spider.offsetHeight / 2;

    // Max allowed positions inside the content box
    const maxX = wall.clientWidth - spider.offsetWidth;
    const maxY = wall.clientHeight - spider.offsetHeight;

    // Clamp to [0, max]
    const clampedX = Math.max(0, Math.min(desiredX, maxX));
    const clampedY = Math.max(0, Math.min(desiredY, maxY));

    // Apply (absolute positioning relative to the wall's content box)
    spider.style.left = clampedX + 'px';
    spider.style.top = clampedY + 'px';
  });
}
