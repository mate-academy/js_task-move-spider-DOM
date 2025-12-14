'use strict';

const field = document.getElementById('field');
const spider = document.getElementById('spider');

if (field && spider) {
  spider.style.position = 'absolute';

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const initialCenterX = field.offsetWidth / 2 - spiderWidth / 2;
  const initialCenterY = field.offsetHeight / 2 - spiderHeight / 2;

  spider.style.left = `${initialCenterX}px`;
  spider.style.top = `${initialCenterY}px`;

  field.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('control') ||
      evt.target.id === 'spider'
    ) {
      return;
    }

    const wallRect = field.getBoundingClientRect();

    let x = evt.clientX - wallRect.left;
    let y = evt.clientY - wallRect.top;

    x -= spiderWidth / 2;
    y -= spiderHeight / 2;

    const newLeft = Math.max(0, Math.min(x, field.offsetWidth - spiderWidth));
    const newTop = Math.max(0, Math.min(y, field.offsetHeight - spiderHeight));

    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });

  document.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('control')) {
      return;
    }

    const centerX = field.offsetWidth / 2 - spiderWidth / 2;
    const centerY = field.offsetHeight / 2 - spiderHeight / 2;

    let newLeft = centerX;
    let newTop = centerY;

    const id = evt.target.id;

    if (id === 'up') {
      newTop = 0;
    } else if (id === 'down') {
      newTop = field.offsetHeight - spiderHeight;
    } else if (id === 'left') {
      newLeft = 0;
    } else if (id === 'right') {
      newLeft = field.offsetWidth - spiderWidth;
    } else if (id === 'up-left') {
      newLeft = 0;
      newTop = 0;
    } else if (id === 'up-right') {
      newLeft = field.offsetWidth - spiderWidth;
      newTop = 0;
    } else if (id === 'down-left') {
      newLeft = 0;
      newTop = field.offsetHeight - spiderHeight;
    } else if (id === 'down-right') {
      newLeft = field.offsetWidth - spiderWidth;
      newTop = field.offsetHeight - spiderHeight;
    }

    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });
}
