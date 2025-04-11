const spider = document.querySelector('.spider');
const wall = document.getElementsByClassName('wall')[0];
const wallBoundaries = [wall.clientLeft, wall.clientTop];
const wallSize = [wall.clientWidth, wall.clientHeight];

spider.style.position = 'absolute';

const moveSpiderByClick = function (e) {
  const pointerCords = [
    e.clientX + window.pageXOffset,
    e.clientY + window.pageYOffset,
  ];
  const areaXYAboslute = (() => {
    const areaTop = wall.offsetTop + wallBoundaries[1];
    const areaLeft = wall.offsetLeft + wallBoundaries[0];

    return [areaLeft, areaTop];
  })();

  const spiderCenter = (() => {
    const spiderCords = spider.getBoundingClientRect();
    const spiderwidth = spiderCords.width;
    const spiderheight = spiderCords.height;

    return [spiderwidth / 2, spiderheight / 2, spiderwidth, spiderheight];
  })();

  const spiderTravelPosition = [
    pointerCords[0] - areaXYAboslute[0] - spiderCenter[0],
    pointerCords[1] - areaXYAboslute[1] - spiderCenter[1],
  ];

  switch (true) {
    case spiderTravelPosition[0] < 0:
      spiderTravelPosition[0] = 0;
      break;
    case spiderTravelPosition[0] + spiderCenter[2] > wallSize[0]:
      spiderTravelPosition[0] = wallSize[0] - spiderCenter[2];
      break;
  }

  switch (true) {
    case spiderTravelPosition[1] < 0:
      spiderTravelPosition[1] = 0;
      break;
    case spiderTravelPosition[1] + spiderCenter[3] > wallSize[1]:
      spiderTravelPosition[1] = wallSize[1] - spiderCenter[3];
      break;
  }

  spider.style.left = `${spiderTravelPosition[0]}px`;
  spider.style.top = `${spiderTravelPosition[1]}px`;
};

wall.addEventListener('click', moveSpiderByClick);
