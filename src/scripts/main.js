document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  if (!wall.contains(e.target)) {
    return;
  }

  let x = e.clientX - 35;
  let y = e.clientY - 35;

  x = x - wallRect.left;
  y = y - wallRect.top;

  const border = 10;
  const maxX = wallRect.width - spiderRect.width - border * 2;
  const maxY = wallRect.height - spiderRect.height - border * 2;

  if (x < 0) {
    x = 0;
  } else if (x > maxX) {
    x = maxX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > maxY) {
    y = maxY;
  }

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
});
