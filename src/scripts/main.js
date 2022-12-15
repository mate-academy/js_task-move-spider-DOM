'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const windEl = document.querySelector('.wall');
  const wind = e.target.closest('.wall');

  if (!wind) {
    return;
  }

  if (
    (e.clientX - windEl.offsetLeft
      - (spider.offsetWidth / 2 + windEl.clientLeft))
      > (windEl.offsetWidth - (spider.offsetWidth + windEl.clientLeft * 2))
  ) {
    spider.style.left = (windEl.offsetWidth - (
      spider.offsetWidth + windEl.clientLeft * 2
    )) + 'px';
  } else if (
    (e.clientX - windEl.offsetLeft)
     < (spider.offsetWidth / 2 + windEl.clientLeft)
  ) {
    spider.style.left = 0 + 'px';
  } else {
    spider.style.left = (
      e.clientX - windEl.offsetLeft
       - (spider.offsetWidth / 2 + windEl.clientLeft)
    ) + 'px';
  }

  if (
    (e.clientY - windEl.offsetTop - (spider.offsetWidth / 2 + windEl.clientTop))
     > (windEl.offsetHeight - (spider.offsetWidth + windEl.clientTop * 2))
  ) {
    spider.style.top = (
      windEl.offsetHeight - (spider.offsetWidth + windEl.clientTop * 2)
    ) + 'px';
  } else if (
    (e.clientY - windEl.offsetTop) < (spider.offsetWidth / 2 + windEl.clientTop)
  ) {
    spider.style.top = 0 + 'px';
  } else {
    spider.style.top = (
      e.clientY - windEl.offsetTop - (spider.offsetWidth / 2 + windEl.clientTop)
    ) + 'px';
  }
});
