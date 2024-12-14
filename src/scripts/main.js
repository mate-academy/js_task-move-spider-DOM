document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = e.clientX - wallRect.left - spiderWidth / 2;
  let y = e.clientY - wallRect.top - spiderHeight / 2;

  x = Math.max(0, Math.min(x, wallRect.width - spiderWidth));
  y = Math.max(0, Math.min(y, wallRect.height - spiderHeight));

  spider.style.position = 'absolute';
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
