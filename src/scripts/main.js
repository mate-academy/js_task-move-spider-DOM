'use strict';

const spiderElement = document.querySelector('.spider');
const wallElement = document.querySelector('.wall');

spiderElement.style.position = 'absolute';
wallElement.style.position = 'relative';

document.addEventListener('click', (e) => {
  if (!wallElement.contains(e.target)) {
    return;
  }

  const spiderRect = spiderElement.getBoundingClientRect();
  const wallRect = wallElement.getBoundingClientRect();
  const wallBorder = parseInt(getComputedStyle(wallElement).borderWidth);

  const x = e.clientX - wallRect.left - spiderRect.width / 2 - wallBorder;
  const y = e.clientY - wallRect.top - spiderRect.height / 2 - wallBorder;

  const finalX = Math.min(
    Math.max(x, 0),
    wallRect.width - spiderRect.width - 2 * wallBorder,
  );
  const finalY = Math.min(
    Math.max(y, 0),
    wallRect.height - spiderRect.height - 2 * wallBorder,
  );

  spiderElement.style.left = `${finalX}px`;
  spiderElement.style.top = `${finalY}px`;
});
