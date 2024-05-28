/* eslint-disable no-console */
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const clickX = e.clientX;
  const clickY = e.clientY;

  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const coords = {
    top: clickY - wallRect.top - spiderRect.height / 2 - wall.clientTop,
    left: clickX - wallRect.left - spiderRect.width / 2 - wall.clientLeft,
  };

  coords.top = Math.max(
    0,
    Math.min(
      wallRect.height - spiderRect.height - 2 * wall.clientTop,
      coords.top,
    ),
  );

  coords.left = Math.max(
    0,
    Math.min(
      wallRect.width - spiderRect.width - 2 * wall.clientLeft,
      coords.left,
    ),
  );

  spider.style = `
    top: ${coords.top}px;
    left: ${coords.left}px
  `;
});
