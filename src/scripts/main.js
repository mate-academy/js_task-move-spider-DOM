document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();
  const borderWidth = 10;

  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  if (
    clickX < borderWidth ||
    clickX > wallRect.width - borderWidth ||
    clickY < borderWidth ||
    clickY > wallRect.height - borderWidth
  ) {
    return;
  }

  const minX = borderWidth - 10;
  const maxX = wallRect.width - spiderWidth - 20;
  const minY = borderWidth - 10;
  const maxY = wallRect.height - spiderHeight - 20;

  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  if (newLeft < minX) {
    newLeft = minX;
  }

  if (newLeft > maxX) {
    newLeft = maxX;
  }

  if (newTop < minY) {
    newTop = minY;
  }

  if (newTop > maxY) {
    newTop = maxY;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
