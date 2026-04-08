const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const attachInteractiveSheen = (element: HTMLElement) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
    || window.matchMedia('(pointer: coarse)').matches
  ) {
    return () => {};
  }

  let frameId = 0;
  let currentX = 50;
  let currentY = 50;
  let targetX = 50;
  let targetY = 50;

  const commit = () => {
    currentX += (targetX - currentX) * 0.22;
    currentY += (targetY - currentY) * 0.22;

    const normalizedX = (currentX - 50) / 50;
    const normalizedY = (currentY - 50) / 50;
    const rotateX = normalizedX * 12;
    const rotateY = normalizedY * -9;
    const shiftX = normalizedX * 10;
    const shiftY = normalizedY * 8;
    const scale = 1.018 - (Math.abs(normalizedX) + Math.abs(normalizedY)) * 0.003;

    element.style.setProperty('--sheen-pointer-x', currentX.toFixed(2));
    element.style.setProperty('--sheen-pointer-y', currentY.toFixed(2));
    element.style.setProperty('--sheen-rotate-x', `${rotateX.toFixed(2)}deg`);
    element.style.setProperty('--sheen-rotate-y', `${rotateY.toFixed(2)}deg`);
    element.style.setProperty('--sheen-shift-x', `${shiftX.toFixed(2)}px`);
    element.style.setProperty('--sheen-shift-y', `${shiftY.toFixed(2)}px`);
    element.style.setProperty('--sheen-scale', scale.toFixed(3));

    if (
      Math.abs(targetX - currentX) > 0.1
      || Math.abs(targetY - currentY) > 0.1
    ) {
      frameId = window.requestAnimationFrame(commit);
      return;
    }

    frameId = 0;
  };

  const requestCommit = () => {
    if (frameId !== 0) {
      return;
    }

    frameId = window.requestAnimationFrame(commit);
  };

  const setTargetFromPointer = (event: PointerEvent) => {
    const rect = element.getBoundingClientRect();

    if (rect.width === 0 || rect.height === 0) {
      return;
    }

    targetX = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    targetY = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    element.dataset.sheenActive = 'true';
    requestCommit();
  };

  const resetTarget = () => {
    targetX = 50;
    targetY = 50;
    element.dataset.sheenActive = 'false';
    requestCommit();
  };

  element.style.setProperty('--sheen-pointer-x', '50');
  element.style.setProperty('--sheen-pointer-y', '50');
  element.style.setProperty('--sheen-rotate-x', '0deg');
  element.style.setProperty('--sheen-rotate-y', '0deg');
  element.style.setProperty('--sheen-shift-x', '0px');
  element.style.setProperty('--sheen-shift-y', '0px');
  element.style.setProperty('--sheen-scale', '1');
  element.dataset.sheenActive = 'false';

  element.addEventListener('pointerenter', setTargetFromPointer);
  element.addEventListener('pointermove', setTargetFromPointer);
  element.addEventListener('pointerleave', resetTarget);
  element.addEventListener('pointercancel', resetTarget);

  return () => {
    element.removeEventListener('pointerenter', setTargetFromPointer);
    element.removeEventListener('pointermove', setTargetFromPointer);
    element.removeEventListener('pointerleave', resetTarget);
    element.removeEventListener('pointercancel', resetTarget);

    if (frameId !== 0) {
      window.cancelAnimationFrame(frameId);
    }

    element.style.removeProperty('--sheen-pointer-x');
    element.style.removeProperty('--sheen-pointer-y');
    element.style.removeProperty('--sheen-rotate-x');
    element.style.removeProperty('--sheen-rotate-y');
    element.style.removeProperty('--sheen-shift-x');
    element.style.removeProperty('--sheen-shift-y');
    element.style.removeProperty('--sheen-scale');
    delete element.dataset.sheenActive;
  };
};
