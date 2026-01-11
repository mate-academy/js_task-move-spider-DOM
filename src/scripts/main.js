'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // ❗ Ignore clicks outside the wall
  if (!wall.contains(e.target)) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // Click position in page coordinates
  const clickX = e.clientX + window.scrollX;
  const clickY = e.clientY + window.scrollY;

  // Wall content box position (inside border)
  const wallLeft = wallRect.left + window.scrollX + wall.clientLeft;
  const wallTop = wallRect.top + window.scrollY + wall.clientTop;

  // Desired spider position (center under cursor)
  let spiderLeft = clickX - wallLeft - spiderRect.width / 2;
  let spiderTop = clickY - wallTop - spiderRect.height / 2;

  // Clamp spider inside wall
  const maxLeft = wall.clientWidth - spiderRect.width;
  const maxTop = wall.clientHeight - spiderRect.height;

  spiderLeft = Math.max(0, Math.min(spiderLeft, maxLeft));
  spiderTop = Math.max(0, Math.min(spiderTop, maxTop));

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
