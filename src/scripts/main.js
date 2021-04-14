'use strict';

document.addEventListener('click', e => {
  const item = e.target;
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!item.classList.contains('wall')) {
    return;
  }

  spider.style.top = (e.clientY - wall.getBoundingClientRect().top
  + spider.clientHeight > wall.offsetHeight)
    ? `${wall.clientHeight - (spider.clientHeight)}px`
    : (e.clientY - wall.getBoundingClientRect().top < spider.clientHeight / 2)
      ? `${0}px`
      : `${e.clientY + window.pageYOffset - wall.offsetTop
      - (spider.clientHeight / 2)}px`;

  spider.style.left = (e.clientX - wall.getBoundingClientRect().left
  + spider.clientWidth > wall.offsetWidth)
    ? `${wall.clientWidth - (spider.clientWidth)}px`
    : (e.clientX - wall.getBoundingClientRect().left < spider.clientWidth / 2)
      ? `${0}px`
      : `${e.clientX + window.pageXOffset - wall.offsetLeft
      - (spider.clientWidth / 2)}px`;
});
