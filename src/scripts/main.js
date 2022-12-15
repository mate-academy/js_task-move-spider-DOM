'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const spiderOfW = spider.offsetWidth;
  const windEl = document.querySelector('.wall');
  const wind = e.target.closest('.wall');
  const windElBoLe = windEl.clientLeft;
  const windElBorderTop = windEl.clientTop;
  const windElOfW = windEl.offsetWidth;
  const windElOfL = windEl.offsetLeft;
  const windElOfT = windEl.offsetTop;
  const windElOfH = windEl.offsetHeight;

  if (!wind) {
    return;
  }

  if (
    (
      e.clientX - windElOfL - (spiderOfW / 2 + windElBoLe)
    ) > (
      windElOfW - (spiderOfW + windElBoLe * 2)
    )
  ) {
    spider.style.left = (
      windElOfW - (spiderOfW + windElBoLe * 2)
    ) + 'px';
  } else if ((e.clientX - windElOfL) < (spiderOfW / 2 + windElBoLe)) {
    spider.style.left = 0 + 'px';
  } else {
    spider.style.left = (
      e.clientX - windElOfL - (spiderOfW / 2 + windElBoLe)
    ) + 'px';
  }

  if (
    (
      e.clientY - windElOfT - (spiderOfW / 2 + windElBorderTop)
    ) > (
      windElOfH - (spiderOfW + windElBorderTop * 2)
    )
  ) {
    spider.style.top = (
      windElOfH - (spiderOfW + windElBorderTop * 2)
    ) + 'px';
  } else if ((e.clientY - windElOfT) < (spiderOfW / 2 + windElBorderTop)) {
    spider.style.top = 0 + 'px';
  } else {
    spider.style.top = (
      e.clientY - windElOfT - (spiderOfW / 2 + windElBorderTop)
    ) + 'px';
  }
});
