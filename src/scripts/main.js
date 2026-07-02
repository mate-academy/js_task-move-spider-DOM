const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const maxHeight = wall.clientHeight - spider.clientHeight;
  const maxWidth = wall.clientWidth - spider.clientWidth;

  const params = wall.getBoundingClientRect();

  let left = e.clientX - params.left - wall.clientLeft - spider.offsetWidth / 2;
  let topValue =
    e.clientY - params.top - wall.clientTop - spider.offsetHeight / 2;

  if (left < 0) {
    left = 0;
  }

  if (topValue < 0) {
    topValue = 0;
  }

  if (left > maxWidth) {
    left = maxWidth;
  }

  if (topValue > maxHeight) {
    topValue = maxHeight;
  }

  spider.style.top = `${topValue}px`;
  spider.style.left = `${left}px`;
});
