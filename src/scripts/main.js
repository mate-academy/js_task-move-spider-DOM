document.addEventListener('DOMContentLoaded', function () {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  function moveSpider(clickEvent) {
    const mouseX = clickEvent.clientX;
    const mouseY = clickEvent.clientY;

    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const maxX = wallRect.right - spiderRect.width;
    const maxY = wallRect.bottom - spiderRect.height;

    let newX = mouseX - spiderRect.width / 2;
    let newY = mouseY - spiderRect.height / 2;

    newX = Math.max(wallRect.left, Math.min(newX, maxX));
    newY = Math.max(wallRect.top, Math.min(newY, maxY));

    spider.style.left = `${newX}px`;
    spider.style.top = `${newY}px`;
  }

  wall.addEventListener('click', moveSpider);
});
