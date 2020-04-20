'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wrapper = document.querySelector('.wall');
  const wrapperPosition = wrapper.getBoundingClientRect();
  const wrapperX = wrapperPosition.left + wrapper.clientLeft;
  const wrapperY = wrapperPosition.top + wrapper.clientTop;
  const outBorderX = wrapper.clientWidth - spider.offsetWidth;
  const outBorderY = wrapper.clientHeight - spider.offsetHeight;
  let coordX = e.clientX - wrapperX - spider.offsetWidth / 2;
  let coordY = e.clientY - wrapperY - spider.offsetHeight / 2;

  coordX = coordX > outBorderX ? outBorderX : coordX < 0 ? 0 : coordX;
  coordY = coordY > outBorderY ? outBorderY : coordY < 0 ? 0 : coordY;

  spider.style.top = `${coordY}px`;
  spider.style.left = `${coordX}px`;
});
