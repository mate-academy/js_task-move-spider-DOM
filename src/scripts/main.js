'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const windEl = document.querySelector('.wall');
  const wind = e.target.closest('.wall');
  const borderWindEl = (windEl.offsetWidth - windEl.clientWidth) / 2;

  if (!wind) {
    return;
  }

  if (
    (e.clientX - windEl.offsetLeft - (spider.offsetWidth / 2 + borderWindEl))
      > (windEl.offsetWidth - (spider.offsetWidth + borderWindEl * 2))
  ) {
    spider.style.left = (windEl.offsetWidth - (
      spider.offsetWidth + borderWindEl * 2
    )) + 'px';
  } else if (
    (e.clientX - windEl.offsetLeft) < (spider.offsetWidth / 2 + borderWindEl)
  ) {
    spider.style.left = 0 + 'px';
  } else {
    spider.style.left = (
      e.clientX - windEl.offsetLeft - (spider.offsetWidth / 2 + borderWindEl)
    ) + 'px';
  }

  if (
    (e.clientY - windEl.offsetTop - (spider.offsetWidth / 2 + borderWindEl))
     > (windEl.offsetHeight - (spider.offsetWidth + borderWindEl * 2))
  ) {
    spider.style.top = (
      windEl.offsetHeight - (spider.offsetWidth + borderWindEl * 2)
    ) + 'px';
  } else if (
    (e.clientY - windEl.offsetTop) < (spider.offsetWidth / 2 + borderWindEl)
  ) {
    spider.style.top = 0 + 'px';
  } else {
    spider.style.top = (
      e.clientY - windEl.offsetTop - (spider.offsetWidth / 2 + borderWindEl)
    ) + 'px';
  }
});
