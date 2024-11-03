import { useLocation } from "react-router-dom";
import * as icons from "react-icons/fa";
import Icon from "./Icon";
import socials from "../../assets/data/socials.json";

type IconKey = keyof typeof icons;

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="w-full flex flex-col md:flex-row items-center md:items-start p-4 h-20 mb-5">
      <a
        href="/"
        className="text-white text-5xl font-kalnia hover:text-gray-300 text-center md:text-left mb-4 md:mb-0"
      >
        <h1>Wedgy.</h1>
      </a>

      {/* Desktop */}
      <div className="hidden md:flex space-x-4 text-white group justify-center md:justify-end md:ml-auto">
        {socials.map(({ icon, link }, index) => {
          const IconComponent = icons[icon as IconKey];
          return <Icon key={index} icon={IconComponent} link={link} />;
        })}
      </div>

      {/* Mobile */}
      {isHomePage && (
        <div className="fixed bottom-12 left-0 right-0 flex md:hidden justify-center space-x-4 text-white group">
          {socials.map(({ icon, link }, index) => {
            const IconComponent = icons[icon as IconKey];
            return <Icon key={index} icon={IconComponent} link={link} />;
          })}
        </div>
      )}
    </header>
  );
}
