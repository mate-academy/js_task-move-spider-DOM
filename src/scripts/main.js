document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.addEventListener('click', (target) => {
    const border = 20;
    const rect = wall.getBoundingClientRect();
    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    let x = target.clientX - rect.left - spiderWidth / 2 - border / 2;
    let y = target.clientY - rect.top - spiderHeight / 2 - border / 2;

    x = Math.max(0, Math.min(x, wall.offsetWidth - spiderWidth - border));
    y = Math.max(0, Math.min(y, wall.offsetHeight - spiderHeight - border));

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  });
});
