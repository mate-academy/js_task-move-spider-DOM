'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const wallStyle = getComputedStyle(wall);
  const wallLeft = wall.getBoundingClientRect().left
                  + parseFloat(wallStyle.borderWidth)
                  + window.pageXOffset;
  const wallTop = wall.getBoundingClientRect().top
                  + parseFloat(wallStyle.borderWidth)
                  + window.pageYOffset;
  const spider = document.querySelector('.spider');
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallContentWidth = wall.offsetWidth
                          - parseFloat(wallStyle.borderWidth) * 2
                          - spiderWidth;
  const wallContentHeight = wall.offsetHeight
                          - parseFloat(wallStyle.borderWidth) * 2
                          - spiderHeight;
  let spiderTop = e.clientY - wallTop - spiderHeight / 2;

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  if (spiderTop > wallContentHeight) {
    spiderTop = wallContentHeight;
  }

  let spiderLeft = e.clientX - wallLeft - spiderWidth / 2;

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderLeft > wallContentWidth) {
    spiderLeft = wallContentWidth;
  }

  spider.style.top = spiderTop + 'px';
  spider.style.left = spiderLeft + 'px';
});
