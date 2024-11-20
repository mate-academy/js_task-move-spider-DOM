'use strict';

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const xCoords = e.clientX;
  const yCoords = e.clientY;
  const spider = document.querySelector('.spider');

  const spiderSize = {
    width: spider.clientWidth,
    height: spider.clientHeight,
  };

  const walParams = {
    width: wall.clientWidth,
    height: wall.clientHeight,
  };

  const wallOffset = {
    top: wall.offsetTop,
    left: wall.offsetLeft,
  };

  let spiderLeft = xCoords - wall.clientLeft - wallOffset.left;
  let spiderTop = yCoords - wall.clientTop - wallOffset.top;

  if (spiderLeft < spiderSize.width / 2) {
    spiderLeft = spiderSize.width / 2;
  }

  if (spiderLeft > walParams.width - spiderSize.width / 2) {
    spiderLeft = walParams.width - spiderSize.width / 2;
  }

  if (spiderTop < spiderSize.height / 2) {
    spiderTop = spiderSize.height / 2;
  }

  if (spiderTop > walParams.height - spiderSize.height / 2) {
    spiderTop = walParams.height - spiderSize.height / 2;
  }

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
  spider.style.transform = 'translate(-50%, -50%)';
});
