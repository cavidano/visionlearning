export const getCurrentBreakpoint = () => {
  const breakpoint = window.getComputedStyle(document.documentElement).getPropertyValue('--current-bp').trim().replace(/'/g, "");
  return breakpoint;
};