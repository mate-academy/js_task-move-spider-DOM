'use strict';

document.addEventListener('click', (e) => {
  const targetClass = e.target.className;

  if (targetClass === 'wall' || targetClass === 'spider') {
    const spider = document.querySelector('.spider');
    const wall = spider.parentElement;

    const spiderStyles = getComputedStyle(spider);
    const wallStyles = getComputedStyle(wall);

    const spiderWidth = parseInt(spiderStyles.width);
    const spiderHeight = parseInt(spiderStyles.height);
    const wallWidth = parseInt(wallStyles.width);
    const wallHeight = parseInt(wallStyles.height);
    const border = parseInt(wallStyles.borderWidth);

    let spiderLeft =
      e.clientX + window.scrollX - wall.offsetLeft - border - spiderWidth / 2;
    let spiderTop =
      e.clientY + window.scrollY - wall.offsetTop - border - spiderHeight / 2;

    if (spiderLeft < 0) {
      spiderLeft = 0;
    } else if (spiderLeft > wallWidth - spiderWidth) {
      spiderLeft = wallWidth - spiderWidth;
    }

    if (spiderTop < 0) {
      spiderTop = 0;
    } else if (spiderTop > wallHeight - spiderHeight) {
      spiderTop = wallHeight - spiderHeight;
    }

    spider.style.top = spiderTop + 'px';
    spider.style.left = spiderLeft + 'px';
  }
});
