'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const parentElement = spider.parentElement;
  const parentRect = parentElement.getBoundingClientRect();

  const borderWidth = parentRect.width - parentElement.clientWidth;
  const borderHeight = parentRect.height - parentElement.clientHeight;

  if (
    e.clientX < parentRect.left ||
    e.clientX > parentRect.right ||
    e.clientY < parentRect.top ||
    e.clientY > parentRect.bottom
  ) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let newTop = e.clientY - parentRect.top - spiderHeight / 2;
  let newLeft = e.clientX - parentRect.left - spiderWidth / 2;

  if (newTop < 0) {
    newTop = 0;
  }

  if (newTop + spiderHeight > parentRect.height - borderHeight) {
    newTop = parentRect.height - spiderHeight - borderHeight;
  }

  if (newLeft < 0) {
    newLeft = 0;
  }

  if (newLeft + spiderWidth > parentRect.width - borderWidth) {
    newLeft = parentRect.width - spiderWidth - borderWidth;
  }

  spider.style.position = 'absolute';
  spider.style.top = `${newTop}px`;
  spider.style.left = `${newLeft}px`;
});
