'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const msg = document.createElement('div');

msg.innerText = 'Please, dont harm the spider!';

spider.style.cursor = 'not-allowed';

msg.style.cssText = `position: absolute; font-size: 25px;
 top: -10%; left: 20%; transition: opacity 0.3s;
 opacity: 0; cursor: default;`;
wall.appendChild(msg);

wall.addEventListener('click', e => {
  const wallItem = e.target;

  if (wallItem.classList.contains('wall')) {
    const positionY = e.clientY - wall.offsetTop + window.scrollY;
    const positionX = e.clientX - wall.offsetLeft + window.scrollX;

    spider.style.transform = 'translate(-65%, -65%)';

    if (positionX < 35) {
      spider.style.left = '35px';
    } else if (positionX > 380) {
      spider.style.left = '380px';
    } else {
      spider.style.left = positionX + 'px';
    }

    if (positionY < 35) {
      spider.style.top = '35px';
    } else if (positionY > 380) {
      spider.style.top = '380px';
    } else {
      spider.style.top = positionY + 'px';
    }
  } else if (wallItem.classList.contains('spider')) {
    msg.style.opacity = 1;

    setTimeout(() => (msg.style.opacity = 0), 2000);
  }
});
