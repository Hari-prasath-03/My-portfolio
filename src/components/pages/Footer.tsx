import { IoMdHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-neutral-50 py-4 sm:py-6 text-center">
      <p className="font-primary font-semibold text-sm sm:text-lg inline-flex items-center gap-1.5">
        &copy;{new Date().getFullYear()}. Build with
        <IoMdHeart className="inline text-primary" /> by Hari prasath.
      </p>
    </footer>
  );
};

export default Footer;
