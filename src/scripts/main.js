const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let x = e.clientX - wallRect.left - wall.clientLeft - spiderWidth / 2;
  let y = e.clientY - wallRect.top - wall.clientTop - spiderHeight / 2;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x + spiderWidth > wall.clientWidth) {
    x = wall.clientWidth - spiderWidth;
  }

  if (y + spiderHeight > wall.clientHeight) {
    y = wall.clientHeight - spiderHeight;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
