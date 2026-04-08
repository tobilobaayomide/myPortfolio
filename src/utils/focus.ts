const FOCUSABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'iframe',
  'object',
  'embed',
  '[contenteditable="true"]',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

type InertCapableElement = HTMLElement & { inert?: boolean };

const isVisible = (element: HTMLElement) => {
  const styles = window.getComputedStyle(element);
  return styles.display !== 'none' && styles.visibility !== 'hidden';
};

export const getFocusableElements = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter((element) => {
    if (!isVisible(element)) {
      return false;
    }

    if (element.hasAttribute('disabled') || element.getAttribute('aria-hidden') === 'true') {
      return false;
    }

    return element.tabIndex >= 0;
  });

export const trapFocusInContainer = (event: KeyboardEvent, container: HTMLElement) => {
  if (event.key !== 'Tab') {
    return;
  }

  const focusableElements = getFocusableElements(container);

  if (focusableElements.length === 0) {
    event.preventDefault();
    container.focus();
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;

  if (event.shiftKey) {
    if (!activeElement || activeElement === firstElement || !container.contains(activeElement)) {
      event.preventDefault();
      lastElement.focus();
    }

    return;
  }

  if (!activeElement || activeElement === lastElement || !container.contains(activeElement)) {
    event.preventDefault();
    firstElement.focus();
  }
};

export const setElementInert = (element: HTMLElement | null, shouldBeInert: boolean) => {
  if (!element) {
    return;
  }

  const inertElement = element as InertCapableElement;
  const supportsInert = 'inert' in inertElement;

  if (supportsInert) {
    inertElement.inert = shouldBeInert;
  }

  if (shouldBeInert) {
    // Only fall back to aria-hidden when inert is unavailable.
    if (!supportsInert) {
      element.setAttribute('aria-hidden', 'true');
    }
    return;
  }

  element.removeAttribute('aria-hidden');
};
