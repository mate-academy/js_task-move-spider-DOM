const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const borderLeft = wall.clientLeft;
  const borderTop = wall.clientTop;

  let x = e.clientX - wallRect.left - borderLeft - spiderWidth / 2;

  let y = e.clientY - wallRect.top - borderTop - spiderHeight / 2;

  x = Math.max(0, Math.min(x, wall.clientWidth - spiderWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spiderHeight));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
