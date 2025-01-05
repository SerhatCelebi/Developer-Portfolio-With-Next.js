import React from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";

export const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/yournamesurname",
      hoverColor: "hover:text-purple-400",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/yourname-yoursurname/",
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: FiMail,
      url: "mailto:yourmail@yournameyoursurname.com",
      isEmail: true,
      hoverColor: "hover:text-green-400",
    },
    {
      name: "CV",
      icon: FiFileText,
      url: "/yourname_yoursurname_CV.pdf",
      download: true,
      hoverColor: "hover:text-pink-400",
    },
  ];

  const handleEmailClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string
  ) => {
    e.preventDefault();
    window.location.href = url;
  };

  return (
    <footer className="bg-gray-900/90 backdrop-blur-md border-t border-white/[0.02] shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} yourname yoursurname. Tüm hakları
            saklıdır.
          </div>
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                onClick={
                  link.isEmail
                    ? (e) => handleEmailClick(e, link.url)
                    : undefined
                }
                target={link.url.startsWith("/") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`text-gray-300 ${link.hoverColor} transition-all duration-300 group cursor-pointer`}
                aria-label={link.name}
                title={link.name}
                {...(link.download ? { download: true } : {})}
              >
                <link.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
