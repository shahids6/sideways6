'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import brandLogo from '../public/brand-logo.svg';

// Add these SVG components at the top of the file
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav>
        <div className="nav-container">
          <Link href="/" className="logo">
            <div className='logo-desktop'><Image src={brandLogo} alt="Brand Logo" width={200} height={57} /></div>
            <div className="logo-mobile"><Image src={brandLogo} alt="Brand Logo" width={115} height={35} /></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="icon-container">
              <div className={`icon ${isOpen ? 'open' : ''}`}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-items">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        header {
          position: fixed;
          width: 100%;
          z-index: 50;
          transition: all 0.3s;
          background: rgba(255, 255, 255, 0.7);
          // backdrop-filter: blur(8px);
          // -webkit-backdrop-filter: blur(10px);
        }
        .logo-mobile {
          display: none;
        }

        header.scrolled {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .logo span {
          font-size: 1.25rem;
          font-weight: bold;
        }

        .sparkle-icon {
          width: 2rem;
          height: 2rem;
          color: var(--primary-color);
        }

        :global(.nav-link) {
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s;
          color: var(--primary-color);
        }

        .nav-link:hover {
          color: var(--primary-color);
        }

        .icon-container {
          position: relative;
          width: 24px;
          height: 24px;
        }

        .icon {
          position: absolute;
          top: 0;
          left: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .icon.open {
          transform: rotate(90deg);
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: var(--primary-color);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu-items {
          padding: 1rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s;
        }

        .mobile-nav-link:hover {
          color: var(--primary-color);
        }
          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 2rem;
          }

        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }

          nav {
            padding: 14px;
          }

          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 2rem;
            display: none;
          }

          .logo-mobile {
            display: block;
          }

          .logo-desktop {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;