import { useEffect, useState } from 'react';

const navLinks = [
  {
    title: 'Home',
    link: '#home',
  },
  {
    title: 'About',
    link: '#about',
  },
  {
    title: 'Pricing',
    link: '#pricing',
  },
];

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
      className={`fixed left-1/2 top-5 z-50 -translate-x-1/2 transform border border-white text-white shadow-[0px_0px_100px_20px_rgba(255,255,255,0.3)] transition-opacity duration-300 ${
        showNav ? 'opacity-100' : 'pointer-events-none opacity-0 '
      } flex gap-6 rounded-full bg-black/30 px-6 py-2 backdrop-blur-md`}
    >
      {navLinks.map((navItem) => (
        <a
          href={navItem.link}
          key={navItem.title}
          className="text-sm font-medium  hover:text-white/70"
        >
          {navItem.title}
        </a>
      ))}
    </nav>
  );
};
