'use strict';

const spider = document.querySelector('.spider');
const spiderStyle = getComputedStyle(spider);

spider.style.position = 'sticky';

document.addEventListener('click', e => {
  spider.style.left = `${e.clientX - 0.5 * parseFloat(spiderStyle.width)}px`;
  spider.style.top = `${e.clientY - 0.5 * parseFloat(spiderStyle.height)}px`;
});
