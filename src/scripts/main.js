'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const halfSpiderWidth = spider.offsetWidth / 2;
  const halfSpiderHeight = spider.offsetHeight / 2;

  spider.style.transform = 'translate(-50%, -50%)';
  spider.style.left = `${halfSpiderWidth}px`;
  spider.style.top = `${halfSpiderHeight}px`;

  if (wall.contains(e.target)) {
    const wallRect = wall.getBoundingClientRect();
    const clickXRelative = e.clientX - wallRect.left - wall.clientLeft;
    const clickYRelative = e.clientY - wallRect.top - wall.clientTop;
    const wallContentWidth = wall.clientWidth;
    const wallContentHeight = wall.clientHeight;
    const limitedX = Math.max(
      halfSpiderWidth,
      Math.min(clickXRelative, wallContentWidth - halfSpiderWidth),
    );
    const limitedY = Math.max(
      halfSpiderHeight,
      Math.min(clickYRelative, wallContentHeight - halfSpiderHeight),
    );

    spider.style.left = `${limitedX}px`;
    spider.style.top = `${limitedY}px`;
  }
});
