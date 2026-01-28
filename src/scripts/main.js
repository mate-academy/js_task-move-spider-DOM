'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

field.addEventListener('click', (e) => {
  const fieldRect = field.getBoundingClientRect(); // позиція стіни
  const spiderRect = spider.getBoundingClientRect(); // розмір павука

  // координати кліку відносно стіни
  let x = e.clientX - fieldRect.left - spiderRect.width / 2;
  let y = e.clientY - fieldRect.top - spiderRect.height / 2;

  // обмеження, щоб павук не виходив за стіну
  x = Math.max(0, Math.min(x, field.clientWidth - spiderRect.width));
  y = Math.max(0, Math.min(y, field.clientHeight - spiderRect.height));

  spider.style.position = 'absolute';
  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
