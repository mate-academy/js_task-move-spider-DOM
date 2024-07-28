function ready() {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  wall.addEventListener('click', (e) => {
    const {
      left: wallLeft,
      top: wallTop,
      width: wallWidth,
      height: wallHeight,
    } = wall.getBoundingClientRect();

    const computedStyle = getComputedStyle(wall);

    const borderWidth = parseFloat(computedStyle.borderWidth);

    const { width: spiderWidth, height: spiderHeight } =
      spider.getBoundingClientRect();

    let newX = e.clientX - wallLeft - spiderWidth;
    let newY = e.clientY - wallTop - spiderHeight;

    newX = Math.max(
      0,
      Math.min(newX, wallWidth - spiderWidth - borderWidth * 2),
    );

    newY = Math.max(
      0,
      Math.min(newY, wallHeight - spiderHeight - borderWidth * 2),
    );

    spider.style.left = `${newX}px`;
    spider.style.top = `${newY}px`;
  });
}

document.addEventListener('DOMContentLoaded', ready);
