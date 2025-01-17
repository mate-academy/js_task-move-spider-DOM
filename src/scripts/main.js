'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const wallStyles = getComputedStyle(wall);
  const borderLeft = parseFloat(wallStyles.borderLeftWidth);
  const borderTop = parseFloat(wallStyles.borderTopWidth);

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  let newX = e.clientX - wallRect.left - borderLeft - spiderWidth / 2;
  let newY = e.clientY - wallRect.top - borderTop - spiderHeight / 2;

  newX = Math.max(
    0,
    Math.min(
      newX,
      wallRect.width -
        borderLeft -
        parseFloat(wallStyles.borderRightWidth) -
        spiderWidth,
    ),
  );

  newY = Math.max(
    0,
    Math.min(
      newY,
      wallRect.height -
        borderTop -
        parseFloat(wallStyles.borderBottomWidth) -
        spiderHeight,
    ),
  );

  spider.style.position = 'absolute';
  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
