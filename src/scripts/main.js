document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const spider = document.querySelector('.spider');

  const possibleWidth = wall.clientWidth - spider.clientWidth;
  const possibleHeight = wall.clientHeight - spider.clientHeight;

  const wallPosition = wall.getBoundingClientRect();
  const positionX =
    e.clientX - wallPosition.left - wall.clientLeft - spider.clientWidth / 2;
  const positionY =
    e.clientY - wallPosition.top - wall.clientTop - spider.clientHeight / 2;

  const spiderX = Math.max(0, Math.min(positionX, possibleWidth));
  const spiderY = Math.max(0, Math.min(positionY, possibleHeight));

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
