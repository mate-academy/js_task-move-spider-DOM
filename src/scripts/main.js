'use strict';

const box = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const mouseX = e.clientX - box.offsetLeft - box.clientLeft + window.scrollX;
  const mouseY = e.clientY - box.offsetTop - box.clientTop + window.scrollY;

  if (
    mouseY + box.clientTop >= 0 &&
    mouseX + box.clientLeft >= 0 &&
    mouseY <= box.offsetHeight - box.clientTop &&
    mouseX <= box.offsetWidth - box.clientLeft
  ) {
    if (mouseY <= spider.clientHeight / 2) {
      spider.style.top = 0 + 'px';
      spider.style.transform = 'translateY(0)';
    } else if (mouseY >= box.clientHeight - spider.clientHeight / 2) {
      spider.style.top = box.clientHeight - spider.clientHeight + 'px';
      spider.style.transform = 'translateY(0)';
    } else {
      spider.style.top = mouseY - spider.clientHeight / 2 + 'px';
    }

    if (mouseX <= spider.clientWidth / 2) {
      spider.style.left = 0 + 'px';
      spider.style.transform = 'translateX(0)';
    } else if (mouseX > box.clientWidth - spider.clientWidth / 2) {
      spider.style.left = box.clientWidth - spider.clientWidth + 'px';
      spider.style.transform = 'translateX(0)';
    } else {
      spider.style.left = mouseX - spider.clientWidth / 2 + 'px';
    }
  }
});
