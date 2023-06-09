'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const wallStyles = getComputedStyle(wall);
  const borderWidth = parseFloat(wallStyles.borderTopWidth);

  const clickX = e.clientX;
  const clickY = e.clientY;

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  const wallWidth = wallRect.width - spiderWidth - borderWidth * 2;
  const wallHeight = wallRect.height - spiderHeight - borderWidth * 2;

  const spiderXMin = borderWidth;
  const spiderXMax = wallWidth;
  const spiderYMin = borderWidth;
  const spiderYMax = wallHeight;

  const clickOffset = 5;

  if (
    clickX >= wallRect.left + spiderWidth / 2 + borderWidth - clickOffset
    && clickX <= wallRect.right - spiderWidth / 2 - borderWidth + clickOffset
    && clickY >= wallRect.top + spiderHeight / 2 + borderWidth - clickOffset
    && clickY <= wallRect.bottom - spiderHeight / 2 - borderWidth + clickOffset
  ) {
    const spiderX = Math.max(spiderXMin,
      Math.min(clickX - wallRect.left - spiderWidth / 2, spiderXMax));

    const spiderY = Math.max(spiderYMin,
      Math.min(clickY - wallRect.top - spiderHeight / 2, spiderYMax));

    spider.style.left = `${spiderX}px`;
    spider.style.top = `${spiderY}px`;
  }
});
