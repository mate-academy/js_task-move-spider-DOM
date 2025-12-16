'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();

  if (wall && spider) {
    const borderStartX = wallRect.left + wall.clientLeft;
    const borderStartY = wallRect.top + wall.clientTop;

    const borderEndX = borderStartX + wall.clientWidth;
    const borderEndY = borderStartY + wall.clientHeight;

    const midYSpider = spider.clientHeight / 2;
    const midXSpider = spider.clientWidth / 2;

    const currentX = e.clientX;
    const currentY = e.clientY;

    if (
      currentX >= borderStartX &&
      currentX <= borderEndX &&
      currentY >= borderStartY &&
      currentY <= borderEndY
    ) {
      let setX = currentX - borderStartX - midXSpider;
      let setY = currentY - borderStartY - midYSpider;

      if (currentX >= borderEndX - midXSpider) {
        setX = wall.clientWidth - spider.clientWidth;
      }

      if (currentX <= borderStartX + midXSpider) {
        setX = 0;
      }

      if (currentY >= borderEndY - midYSpider) {
        setY = wall.clientHeight - spider.clientHeight;
      }

      if (currentY <= borderStartY + midYSpider) {
        setY = 0;
      }

      spider.style.top = `${setY}px`;
      spider.style.left = `${setX}px`;
    }
  }
});
