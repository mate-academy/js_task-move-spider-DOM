'use strict';

document.addEventListener('click', myEvent => {
  const spider = document.querySelector('.spider');
  const box = myEvent.target;
  let x = myEvent.offsetX - spider.clientWidth / 2;
  let y = myEvent.offsetY - spider.clientHeight / 2;

  if (x < 0) {
    x = 0;
  } else if (myEvent.offsetX > box.clientWidth) {
    x = box.clientWidth - spider.clientWidth;
  }

  if (y < 0) {
    y = 0;
  } else if (myEvent.offsetY > box.clientHeight) {
    y = box.clientHeight - spider.clientHeight;
  }

  if (box.classList.contains('wall')) {
    spider.style.top = `${y}px`;
    spider.style.left = `${x}px`;
  }
});
