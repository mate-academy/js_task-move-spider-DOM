'use strict';

document.addEventListener('click', (e) => {
  if (e.target.nodeName === 'DIV') {
    const wall = document.querySelector('div.wall');
    const wallLeft = wall.getBoundingClientRect().left;
    const wallTop = wall.getBoundingClientRect().top;
    const wallWidth = wall.getBoundingClientRect().width;
    const wallHeight = wall.getBoundingClientRect().height;

    const spider = document.querySelector('.spider');
    const spiderStyle = getComputedStyle(spider);
    const spiderWidth = parseFloat(spiderStyle.width);
    const spiderHeight = parseFloat(spiderStyle.height);

    const mouseX = event.clientX;
    const mouseY = event.clientY;
    let spiderLeft = mouseX - wallLeft - spiderWidth / 2 - 10;
    let spiderTop = mouseY - wallTop - spiderHeight / 2 - 10;

    const maxLeft = wallWidth - spiderWidth - 20;
    const maxTop = wallHeight - spiderHeight - 20;

    spiderLeft = (spiderLeft < 0) ? 0 : spiderLeft;
    spiderTop = (spiderTop < 0) ? 0 : spiderTop;
    spiderLeft = (spiderLeft > maxLeft) ? maxLeft : spiderLeft;
    spiderTop = (spiderTop > maxTop) ? maxTop : spiderTop;

    spider.style.left = spiderLeft + 'px';
    spider.style.top = spiderTop + 'px';
  }
});
