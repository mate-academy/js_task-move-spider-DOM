document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // eslint-disable-next-line
  const newX = Math.max(0, Math.min(mouseX - wallRect.left - spiderRect.width / 2, wallRect.width - spiderRect.width));
  // eslint-disable-next-line
  const newY = Math.max(0, Math.min(mouseY - wallRect.top - spiderRect.height / 2, wallRect.height - spiderRect.height));

  spider.style.position = 'absolute';
  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
