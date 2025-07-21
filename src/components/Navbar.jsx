import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'lineup', title: 'Lineup' },
    { id: 'schedule', title: 'Schedule' },
    { id: 'tickets', title: 'Tickets' },
    { id: 'location', title: 'Location' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 bg-opacity-90 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500}>
          <h1 className="text-2xl font-heading font-bold text-white cursor-pointer">
            ECHO<span className="text-primary">FEST</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white hover:text-primary cursor-pointer transition-colors font-medium"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Ticket Button */}
        <div className="hidden md:block">
          <Link
            to="tickets"
            smooth={true}
            duration={500}
            className="bg-gradient-to-r from-primary to-secondary text-white font-medium py-2 px-6 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Tickets
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden z-50" onClick={handleClick}>
          {!nav ? (
            <Bars3Icon className="w-7 h-7 text-white cursor-pointer" />
          ) : (
            <XMarkIcon className="w-7 h-7 text-white cursor-pointer" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            nav ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          } md:hidden absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center transition-all duration-300 origin-top`}
        >
          <ul className="flex flex-col items-center space-y-8 mb-10">
            {navLinks.map(({ id, title }) => (
              <li key={id} className="text-center">
                <Link
                  onClick={closeMenu}
                  to={id}
                  smooth={true}
                  duration={500}
                  className="text-2xl font-medium text-white hover:text-primary transition-colors"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="tickets"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-8 rounded-full text-lg hover:opacity-90 transition-opacity"
          >
            Get Tickets
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
