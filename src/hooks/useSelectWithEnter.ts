import { useCallback, useEffect, useRef } from '../lib/teact/teact';

export default (
  onSelect: NoneToVoidFunction,
) => {
  // eslint-disable-next-line no-null/no-null
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    const isFocused = buttonRef.current === document.activeElement;

    if (isFocused) {
      onSelect();
    }
  }, [onSelect]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return buttonRef;
};
