const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const borderSize = parseInt(getComputedStyle(wall).borderWidth);
const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

document.addEventListener('click', (e) => {
  if (!wall.contains(e.target)) {
    return;
  }

  const rawX = e.clientX - wallRect.left - spiderRect.width / 2 - borderSize;
  const rawY = e.clientY - wallRect.top - spiderRect.height / 2 - borderSize;

  const maxX = wallRect.width - spiderRect.width - 2 * borderSize;
  const maxY = wallRect.height - spiderRect.height - 2 * borderSize;

  const boundedX = Math.max(0, Math.min(rawX, maxX));
  const boundedY = Math.max(0, Math.min(rawY, maxY));

  spider.style.left = `${boundedX}px`;
  spider.style.top = `${boundedY}px`;
});
