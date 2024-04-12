'use strict';

const spiderContainer = document.querySelector('div');
const spider = document.querySelector('img');

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const containerRect = spiderContainer.getBoundingClientRect();

    const spiderX = cursorX - containerRect.left - spider.clientWidth / 2;
    const spiderY = cursorY - containerRect.top - spider.clientHeight / 2;

    const maxX = spiderContainer.clientWidth - spider.clientWidth;
    const maxY = spiderContainer.clientHeight - spider.clientHeight;

    spider.style.left = `${Math.min(Math.max(spiderX, 0), maxX)}px`;
    spider.style.top = `${Math.min(Math.max(spiderY, 0), maxY)}px`;
  }
});
