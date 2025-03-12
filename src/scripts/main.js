'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target.matches('.wall')) {
    const { topPosition, leftPosition } = moveSpider(e.offsetY, e.offsetX);

    spider.style.top = topPosition;
    spider.style.left = leftPosition;
  }

  function moveSpider(y, x) {
    const maxX = wall.clientWidth - spider.clientWidth;
    const maxY = wall.clientHeight - spider.clientHeight;

    const xPosition = Math.max(0, Math.min(x - spider.clientWidth / 2, maxX));
    const yPosition = Math.max(0, Math.min(y - spider.clientHeight / 2, maxY));

    return {
      topPosition: yPosition + 'px',
      leftPosition: xPosition + 'px',
    };
  }
});
