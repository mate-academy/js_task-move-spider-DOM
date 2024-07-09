'use strict';

document.addEventListener('click', (e) => {
  const wallEl = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  function getSpiderCoord() {
    const coord = {
      x: e.clientX,
      y: e.clientY,
    };

    const spiderCoord = { x: 0, y: 0 };

    if (
      coord.x <
      wallEl.offsetLeft + wallEl?.clientLeft + spider.offsetWidth / 2
    ) {
      spiderCoord.x = 0;
    } else if (
      coord.x >
      wallEl.offsetLeft + wallEl.offsetWidth - spider?.clientWidth / 2
    ) {
      spiderCoord.x =
        wallEl.offsetWidth - spider?.clientWidth - wallEl?.clientLeft * 2;
    } else {
      spiderCoord.x =
        coord.x -
        wallEl.offsetLeft -
        wallEl?.clientLeft -
        spider?.offsetWidth / 2;
    }

    if (
      coord.y <
      wallEl.offsetTop + wallEl?.clientTop + spider.offsetHeight / 2
    ) {
      spiderCoord.y = 0;
    } else if (
      coord.y >
      wallEl.offsetTop + wallEl.offsetHeight - spider?.clientHeight / 2
    ) {
      spiderCoord.y =
        wallEl.offsetHeight - spider?.clientHeight - wallEl?.clientTop * 2;
    } else {
      spiderCoord.y =
        coord.y -
        wallEl.offsetTop -
        wallEl?.clientTop -
        spider?.offsetHeight / 2;
    }

    return spiderCoord;
  }

  if (e.target.classList.contains('wall')) {
    const spiderPos = getSpiderCoord();

    spider.style.left = spiderPos.x + 'px';
    spider.style.top = spiderPos.y + 'px';
  }
});
