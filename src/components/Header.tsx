'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-2 shadow-sm' : 'bg-transparent py-4'
    }`}>
      <div className="container flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="M" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center leading-none">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">
             MANHATTAN<span className="text-primary">.</span>
            </span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-foreground-light mt-0.5">
              Wholesales Importers Inc.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1 bg-secondary/50 p-1 rounded-full border border-gray-100">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-5 py-2 text-sm font-semibold text-foreground-light hover:text-primary rounded-full hover:bg-white transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/cart" className="p-2 text-foreground-light hover:text-primary transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </Link>
          <Link href="/contact" className="btn-primary flex items-center gap-2 text-xs md:text-sm !py-2.5 !px-6">
            Get Quote <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-foreground focus:outline-none">
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-white border-b shadow-2xl lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
      }`}>
        <nav className="flex flex-col p-6 space-y-4 font-semibold">
          {navigation.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-lg text-foreground hover:text-primary transition-colors py-2 border-b border-gray-50"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <Link href="/cart" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-foreground-light py-2">
              <ShoppingCart size={22} /> My Cart
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="btn-primary text-center py-4">
              Get Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;