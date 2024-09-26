'use strict';

const spiderMan = document.querySelector('.spider');
const wallArea = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('wall')) {
    const wallProp = wallArea.getBoundingClientRect();
    const spiderWidth = spiderMan.clientWidth;
    const spiderHeight = spiderMan.clientHeight;

    const clickX = e.clientX - wallProp.left;
    const clickY = e.clientY - wallProp.top;

    let newLeft = clickX - spiderWidth / 2;
    let newTop = clickY - spiderHeight / 2;

    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft > wallProp.width - spiderWidth) {
      newLeft = wallProp.width - spiderWidth;
    }

    if (newTop < 0) {
      newTop = 0;
    } else if (newTop > wallProp.height - spiderHeight) {
      newTop = wallProp.height - spiderHeight;
    }

    spiderMan.style.top = newTop + 'px';
    spiderMan.style.left = newLeft + 'px';
    spiderMan.style.transform = 'translate(0, 0)';
  }
});
