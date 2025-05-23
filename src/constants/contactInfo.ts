import { MdEmail, MdWifiCalling3 } from "react-icons/md";
import { FaLinkedin, FaMapMarkedAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: MdEmail,
    key: "Email",
    value: "hariprasathk2023@gmail.com",
    fn: () => {
      window.open("mailto:hariprasathk2023@gmail.com", "_blank");
    },
  },
  {
    icon: FaLinkedin,
    key: "LinkedIn",
    value: "Hari-prasath-k",
    fn: () => {
      window.open("https://www.linkedin.com/in/hari-prasath-k", "_blank");
    },
  },
  {
    icon: MdWifiCalling3,
    key: "Phone",
    value: "+91 9786437079",
    fn: () => {
      window.open("tel:+919786437079", "_blank");
    },
  },
  {
    icon: FaMapMarkedAlt,
    key: "Address",
    value: "Salem, Tamilnadu, India",
    fn: () => {
      window.open(
        "https://www.google.com/maps/place/Salem/karipatti",
        "_blank"
      );
    },
  },
];

export default contactInfo;
