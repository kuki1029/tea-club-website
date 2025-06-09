import { useEffect, useState } from 'react';

export const FloatingNavbar = () => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 top-5 z-50 -translate-x-1/2 transform transition-opacity duration-300 ${
        showNav ? 'opacity-100' : 'pointer-events-none opacity-0'
      } flex gap-6 rounded-full bg-white/90 px-6 py-2 shadow-lg backdrop-blur-md`}
    >
      <a
        href="#home"
        className="text-sm font-medium text-gray-800 hover:text-black"
      >
        Home
      </a>
      <a
        href="#about"
        className="text-sm font-medium text-gray-800 hover:text-black"
      >
        About
      </a>
      <a
        href="#projects"
        className="text-sm font-medium text-gray-800 hover:text-black"
      >
        Projects
      </a>
    </nav>
  );
};
