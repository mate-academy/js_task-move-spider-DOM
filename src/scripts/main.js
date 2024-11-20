'use strict';

document.addEventListener('click', (e) => {
  const spiderElement = document.querySelector('.spider');

  spiderElement.style.left = e.clientX + 'px';
  spiderElement.style.top = e.clientY + 'px';
});
