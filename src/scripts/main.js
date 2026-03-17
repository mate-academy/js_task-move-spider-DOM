'use strict';

const spiderEl = document.querySelector('.spider');
const wallEl = document.querySelector('.wall');

const isPointOutsideRect = (e, containerRect) => {
  return (
    e.clientX < containerRect.left ||
    e.clientX > containerRect.right ||
    e.clientY < containerRect.top ||
    e.clientY > containerRect.bottom
  );
};

const clientToLocalCoords = (e, containerRect) => {
  if (isPointOutsideRect(e, containerRect)) {
    return;
  }

  return {
    x: e.clientX - containerRect.left,
    y: e.clientY - containerRect.top,
  };
};

const parsePx = (v) => parseFloat(v) || 0;

const subtractBorderOffsets = (coords, { borderLeft, borderTop }) => ({
  x: coords.x - borderLeft,
  y: coords.y - borderTop,
});

const centerChildOnPoint = (coords, childRect) => ({
  x: coords.x - childRect.width / 2,
  y: coords.y - childRect.height / 2,
});

const getCenteredLocalCoords = (e, { rect, borders }, childRect) => {
  const raw = clientToLocalCoords(e, rect);

  if (raw == null) {
    return;
  }

  const local = subtractBorderOffsets(raw, borders);

  return centerChildOnPoint(local, childRect);
};

const clampCoordsToContainer = (coords, childRect, { width, height }) => {
  const maxX = width - childRect.width;
  const maxY = height - childRect.height;

  return {
    x: Math.min(Math.max(coords.x, 0), maxX),
    y: Math.min(Math.max(coords.y, 0), maxY),
  };
};

const setSpiderPosition = ({ x, y }) => {
  spiderEl.style.left = `${x}px`;
  spiderEl.style.top = `${y}px`;
};

document.addEventListener('click', (e) => {
  if (!spiderEl || !wallEl) {
    return;
  }

  const spiderRect = spiderEl.getBoundingClientRect();
  const { borderLeftWidth, borderTopWidth } = getComputedStyle(wallEl);
  const wall = {
    rect: wallEl.getBoundingClientRect(),
    borders: {
      borderLeft: parsePx(borderLeftWidth),
      borderTop: parsePx(borderTopWidth),
    },
  };

  const coords = getCenteredLocalCoords(e, wall, spiderRect);

  if (!coords) {
    return;
  }

  const clamped = clampCoordsToContainer(coords, spiderRect, {
    width: wallEl.clientWidth,
    height: wallEl.clientHeight,
  });

  setSpiderPosition(clamped);
});
