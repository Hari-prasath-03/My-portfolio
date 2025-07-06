const AnchorLink = ({
  link,
  children,
  className = "",
}: {
  link: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`text-primary after-hover ${className}`}
      href={`https://${link}`}
    >
      {children}
    </a>
  );
};

export default AnchorLink;
