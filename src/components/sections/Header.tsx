import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const navItems = [
  { label: 'Products', hasDropdown: true },
  { label: 'Solutions', hasDropdown: true },
  { label: 'Resources', hasDropdown: true },
  { label: 'Pricing', hasDropdown: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary-900 py-4">
      <div className="section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="./assets/logo.svg"
              alt="Whitepace"
              className="h-8"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-2 text-white text-lg hover:text-white/80 transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <Button variant="secondary" size="md">
              Login
            </Button>
            <Button variant="primary" size="md">
              Try Whitepace free
              <svg className="ml-2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-white/20">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="flex items-center justify-between text-white text-lg py-2"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-6">
              <Button variant="secondary" size="md" className="w-full">
                Login
              </Button>
              <Button variant="primary" size="md" className="w-full">
                Try Whitepace free
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
