'use strict';

document.addEventListener('click', (e) => {
  // Клік в будь-якому місці на полі
  const relatedTarget = e.target.closest('.wall');
  const getSpider = document.querySelector('.spider');

  // Перевіряємо, чи клікнули по полю
  if (relatedTarget) {
    // Отримати координати контейнера
    const rect = relatedTarget.getBoundingClientRect();

    // Отримати ширину та висоту контейнера та павука
    const widthContainer = rect.width;
    const heightContainer = rect.height;

    const widthSpider = getSpider.clientWidth;
    const heightSpider = getSpider.clientHeight;

    const subWidth = widthContainer - widthSpider;
    const subHeight = heightContainer - heightSpider;

    // Отримати координати кліку відносно контейнера
    const forX = e.clientX - rect.left; // відняти ліву координату контейнера
    const forY = e.clientY - rect.top; // відняти верхню координату контейнера

    // Перевірка, чи координати в межах
    const newX = Math.max(0, Math.min(subWidth, forX));
    const newY = Math.max(0, Math.min(subHeight, forY));

    // Встановити позиції павука
    getSpider.style.left = newX + 'px';
    getSpider.style.top = newY + 'px';
  }
});
