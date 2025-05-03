'use strict';

// Отримуємо елементи один раз при завантаженні скрипта
const wallElement = document.querySelector('.wall');
const spiderElement = document.querySelector('.spider');

// Перевіряємо, чи елементи знайдено
if (wallElement && spiderElement) {
  document.addEventListener('click', (e) => {
    // Слухаємо кліки на всьому документі

    // Крок 1: Перевіряємо, чи клік був у межах стіни
    if (wallElement.contains(e.target)) {
      // Крок 3: Отримання координат кліку відносно вікна
      const clickX = e.clientX;
      const clickY = e.clientY;

      // Крок 4: Дізнаємося, де знаходиться стіна відносно вікна
      const wallRect = wallElement.getBoundingClientRect();
      const wallOffsetX = wallRect.left;
      const wallOffsetY = wallRect.top;

      // Розрахунок товщини рамки стіни
      const borderLeft =
        (wallElement.offsetWidth - wallElement.clientWidth) / 2;
      const borderTop =
        (wallElement.offsetHeight - wallElement.clientHeight) / 2;

      // Крок 5: Розрахунок координат кліку відносно ВНУТРІШНЬОГО краю стіни
      const clickRelativeToWallX = clickX - wallOffsetX - borderLeft;
      const clickRelativeToWallY = clickY - wallOffsetY - borderTop;

      // Крок 6а: Отримання розмірів павука
      const spiderWidth = spiderElement.offsetWidth;
      const spiderHeight = spiderElement.offsetHeight;

      // Крок 6б: Розрахунок "ідеальної" позиції top/left для центрування
      let targetLeft = clickRelativeToWallX - spiderWidth / 2;
      let targetTop = clickRelativeToWallY - spiderHeight / 2;

      // Крок 7: Перевірка меж стіни (використовуючи внутрішні розміри)
      // 7a: Ліва межа
      if (targetLeft < 0) {
        targetLeft = 0;
      }

      // 7б: Права межа // Використовуємо clientWidth
      const maxLeft = wallElement.clientWidth - spiderWidth;

      if (targetLeft > maxLeft) {
        targetLeft = maxLeft;
      }

      // 7в: Верхня межа
      if (targetTop < 0) {
        targetTop = 0;
      }

      // 7г: Нижня межа
      const maxTop = wallElement.clientHeight - spiderHeight;

      if (targetTop > maxTop) {
        targetTop = maxTop;
      }

      // Крок 8: Застосування фінальних координат до павука
      spiderElement.style.left = targetLeft + 'px';
      spiderElement.style.top = targetTop + 'px';
    }
    // Якщо клік був не на стіні, нічого не робимо
  });
}
