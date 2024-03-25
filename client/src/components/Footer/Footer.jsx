// Footer.jsx

// import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const socialMedia = [
    { id: 1, to: "https://twitter.com/nikhil_wankade23", icon: FaTwitter },
    {
      id: 2,
      to: "https://www.instagram.com/nikhil_wankade23/",
      icon: FaInstagram,
    },
    {
      id: 3,
      to: "https://www.linkedin.com/in/nikhilwankhade/",
      icon: FaLinkedin,
    },
    { id: 4, to: "https://github.com/nikhil-dev-395", icon: FaGithub },
  ];

  return (
    <footer className="bg-[#141515] w-full h-32  top-full text-white ">
      <ul className="flex justify-between px-16 py-9">
        <li>
          <h2 className="font-semibold">email</h2>
          <p>nikhilw###@gmail.com</p>
        </li>
        <li>
          <h2 className="font-semibold pb-2">Follow Me</h2>
          <p className="flex gap-6 text-xl">
            {socialMedia.map((item) => (
              <a
                key={item.id}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-50 hover:scale-125 hover:ease-in-out duration-500"
              >
                {<item.icon />}
              </a>
            ))}
          </p>
        </li>
        <li>
          <p className="max-w-64 hover:text-white cursor-default">
            © 2024 By nikhil wankhade. All rights reserved.
          </p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
