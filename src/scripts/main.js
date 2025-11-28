'use strict';

document.addEventListener('click', (e) => {
  const wallElm = document.querySelector('.wall');
  const spiderElm = wallElm.querySelector('.spider');

  const wallRect = wallElm.getBoundingClientRect();
  const spiderRect = spiderElm.getBoundingClientRect();

  const maxLeft = wallRect.width - spiderRect.width;
  const maxTop = wallRect.height - spiderRect.height;

  const desiredLeft = e.clientX - wallRect.left - spiderRect.width / 2;
  const desiredTop = e.clientY - wallRect.top - spiderRect.height / 2;

  const clapmLeft = Math.min(maxLeft, Math.max(0, desiredLeft));
  const clapmTop = Math.min(maxTop, Math.max(0, desiredTop));

  spiderElm.style.left = clapmLeft + 'px';
  spiderElm.style.top = clapmTop + 'px';
});
