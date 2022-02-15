'use strict';

document.addEventListener('click', e => {
  const x = e.clientX;
  const y = e.clientY;
  const spider = document.querySelector('.spider');
  const plase = e.target;
  const spiderWidth = spider.getBoundingClientRect().width;
  const spiderHeight = spider.getBoundingClientRect().height;

  if (!plase.classList.contains('wall')) {
    return;
  }

  let movetop = y - plase.getBoundingClientRect().y - 10 - spiderHeight / 2;
  let moveleft = x - plase.getBoundingClientRect().x - 10 - spiderWidth / 2;

  if (movetop < 0) {
    movetop = 0;
  }

  if (moveleft < 0) {
    moveleft = 0;
  }

  if (y > plase.getBoundingClientRect().y
  + plase.getBoundingClientRect().height - 10 - spiderHeight / 2) {
    movetop = plase.getBoundingClientRect().height - 20 - spiderHeight;
  }

  if (x > plase.getBoundingClientRect().x
  + plase.getBoundingClientRect().width - 10 - spiderWidth / 2) {
    moveleft = plase.getBoundingClientRect().width - 20 - spiderWidth;
  }
  spider.style.top = `${movetop}px`;

  spider.style.left = `${moveleft}px`;
});
