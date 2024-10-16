'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallRect = wall.getBoundingClientRect();
  // // Отримуємо розміри елемента spider
  const spiderRect = spider.getBoundingClientRect();
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  // Обчислюємо позицію для центрування spider
  const x = e.clientX - wallRect.left;
  const y = e.clientY - wallRect.top;
  const spiderX = x - spiderWidth / 2;
  const spiderY = y - spiderHeight / 2;

  // Перевіряємо, чи знаходиться клік всередині стіни (wall)
  if (x >= 0 && x <= wallRect.width && y >= 0 && y <= wallRect.height) {
    // Встановлюємо позицію для spider
    spider.style.left = `${spiderX}px`;
    spider.style.top = `${spiderY}px`;
  }
});
