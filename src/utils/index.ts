export const handleClickLink = (
  e: React.MouseEvent<HTMLAnchorElement>,
  link: string
) => {
  e.preventDefault();
  const target = document.querySelector(`#${link}`) as HTMLElement;
  if (target)
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};
