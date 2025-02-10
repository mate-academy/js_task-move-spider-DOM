'use strict';
// event.clientX/event.clientY

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', moveSpider);

function moveSpider(e) {
  const wallInfo = wall.getBoundingClientRect();
  const spiderInfo = spider.getBoundingClientRect();
  const spiderWidthCenter = spiderInfo.width / 2;
  const spiderHeightCenter = spiderInfo.height / 2;

  const wallPosition = e.target.closest('.wall');

  if (wallPosition) {
    let newLeft = e.clientX - wallInfo.left - spiderWidthCenter;
    let newTop = e.clientY - wallInfo.top - spiderHeightCenter;

    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft > wallInfo.width - spiderInfo.width) {
      newLeft = wallInfo.width - spiderInfo.width;
    }

    if (newTop < 0) {
      newTop = 0;
    } else if (newTop > wallInfo.height - spiderInfo.height) {
      newTop = wallInfo.height - spiderInfo.height;
    }

    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  }
}
