const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.style.position = 'absolute';

wall.addEventListener('click', (e) => {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallRect = wall.getBoundingClientRect();

  let marginLeft = e.clientX - wallRect.left;
  let marginTop = e.clientY - wallRect.top;

  marginLeft -= spiderWidth / 2;
  marginTop -= spiderHeight / 2;

  if (marginLeft < 0) {
    marginLeft = 0;
  } else if (marginLeft + spiderWidth > wallRect.width) {
    marginLeft = wallRect.width - spiderWidth;
  }

  if (marginTop < 0) {
    marginTop = 0;
  } else if (marginTop + spiderHeight > wallRect.height) {
    marginTop = wallRect.height - spiderHeight;
  }

  spider.style.left = marginLeft + 'px';
  spider.style.top = marginTop + 'px';
});
