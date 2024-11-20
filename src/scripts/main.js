'use strict';

document.addEventListener('click', (e) => {
  const field = e.target.closest('.wall');

  if (!field) {
    // eslint-disable-next-line
    return;
  }

  const globalX = e.clientX;
  const globalY = e.clientY;
  const spider = document.querySelector('.spider');

  const spiderSize = {
    width: spider.clientWidth,
    height: spider.clientHeight,
  };

  const fieldClientSize = {
    width: field.clientWidth,
    height: field.clientHeight,
  };

  const fieldOffset = {
    top: field.offsetTop,
    left: field.offsetLeft,
  };

  let spiderLeft = globalX - field.clientLeft - fieldOffset.left;
  let spiderTop = globalY - field.clientTop - fieldOffset.top;

  if (spiderLeft < spiderSize.width / 2) {
    spiderLeft = spiderSize.width / 2;
  }

  if (spiderLeft > fieldClientSize.width - spiderSize.width / 2) {
    spiderLeft = fieldClientSize.width - spiderSize.width / 2;
  }

  if (spiderTop < spiderSize.height / 2) {
    spiderTop = spiderSize.height / 2;
  }

  if (spiderTop > fieldClientSize.height - spiderSize.height / 2) {
    spiderTop = fieldClientSize.height - spiderSize.height / 2;
  }

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
  spider.style.transform = 'translate(-50%, -50%)';
});
