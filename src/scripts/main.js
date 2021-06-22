'use strict';

document.addEventListener('click', e => {
  // write code here
  if (e.target.classList.contains('wall')) {
    const wall = document.querySelector('.wall');
    const spider = document.querySelector('.spider');

    const posLeft = ((e.clientX - (
      (document.body.scrollWidth - wall.scrollWidth) / 2)
    ) - (spider.scrollWidth / 2));

    const posTop = ((e.clientY - (
      (document.body.scrollHeight - wall.scrollHeight) / 2)
    ) - (spider.scrollHeight / 2));

    spider.style.left = posLeft < 0 ? 0 + 'px' : posLeft + 'px';
    spider.style.top = posTop < 0 ? 0 + 'px' : posTop + 'px';

    if (posLeft + spider.scrollWidth > wall.scrollWidth) {
      spider.style.left = (wall.scrollWidth - spider.scrollWidth) + 'px';
    }

    if (posTop + spider.scrollHeight > wall.scrollHeight) {
      spider.style.top = (wall.scrollHeight - spider.scrollHeight) + 'px';
    }
  }
});
