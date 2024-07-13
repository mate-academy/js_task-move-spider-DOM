'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const sqearWall = e.target.closest('.wall');
  const border = parseInt(
    window.getComputedStyle(wall, null).getPropertyValue('border-width'),
  );

  if (sqearWall) {
    const topClick =
      e.clientY +
      window.scrollY -
      wall.offsetTop -
      spider.offsetHeight / 2 -
      border;
    const leftClick =
      e.clientX +
      window.scrollX -
      wall.offsetLeft -
      spider.offsetWidth / 2 -
      border;

    const topSpider = Math.max(
      0,
      Math.min(wall.clientHeight - spider.clientHeight, topClick),
    );
    const leftSpider = Math.max(
      0,
      Math.min(wall.clientWidth - spider.clientWidth, leftClick),
    );

    spider.style.left = leftSpider + 'px';
    spider.style.top = topSpider + 'px';
  }
});
