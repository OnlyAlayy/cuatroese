export const smoothScrollTo = (id) => {
  const element = document.getElementById(id);
  if (!element) return;
  
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 800; // milliseconds
  let start = null;
  
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percentage = Math.min(progress / duration, 1);
    const ease = easeInOutCubic(percentage);
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };
  
  window.requestAnimationFrame(step);
};
