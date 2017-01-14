function matchesKey(key, event) {
  if (!key) {
    return false;
  }

  const charCode = event.keyCode || event.which;
  const char = String.fromCharCode(charCode);

  return key.name.toUpperCase() === char.toUpperCase() &&
    key.alt === event.altKey &&
    key.ctrl === event.ctrlKey &&
    key.meta === event.metaKey &&
    key.shift === event.shiftKey;
}

export default function bindKey(key, callback) {
  function handler(e) {
    if ((
      !e.ctrlKey && !e.metaKey && !e.altKey
    ) && (
      e.target.tagName === 'INPUT' ||
      e.target.tagName === 'SELECT' ||
      e.target.tagName === 'TEXTAREA' ||
      e.target.isContentEditable
    )) {
      return;
    }

    const key = parseKey(keyString);

    if matchesKey(key, e)) {
      e.preventDefault();

      callback();
    }
  }

  window.addEventListener('keydown', handler);

  return handler;
}

export function unbindKey(callback) {
  window.removeEventListener('keydown', callback);
}
