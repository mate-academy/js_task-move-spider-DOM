'use strict';

document.addEventListener('click', e => {
  const field = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const fieldRect = field.getBoundingClientRect();
  const fieldStyle = getComputedStyle(field);

  if (e.target === field) {
    spider.style.top = `${e.clientY - fieldRect.top - spider.offsetHeight / 2
    - parseFloat(fieldStyle.borderWidth)}px`;

    spider.style.left = `${e.clientX - fieldRect.left - spider.offsetWidth / 2
    - parseFloat(fieldStyle.borderWidth)}px`;

    if (parseFloat(spider.style.top) < 0) {
      spider.style.top = 0;
    }

    if (parseFloat(spider.style.left) < 0) {
      spider.style.left = 0;
    }

    if (parseFloat(spider.style.top)
    > field.clientHeight - spider.offsetHeight) {
      spider.style.top = `${field.clientHeight - spider.offsetHeight}px`;
    }

    if (parseFloat(spider.style.left)
    > field.clientWidth - spider.offsetWidth) {
      spider.style.left = `${field.clientWidth - spider.offsetWidth}px`;
    }
  }
});
