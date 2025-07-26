export const handleClickLink = (
  e: React.MouseEvent<HTMLAnchorElement>,
  link: string
) => {
  e.preventDefault();
  const target = document.querySelector(`#${link}`) as HTMLElement;
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    
    // Clean up URL hash after scrolling
    setTimeout(() => {
      if (window.location.hash === `#${link}`) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }, 1000);
  }
};
