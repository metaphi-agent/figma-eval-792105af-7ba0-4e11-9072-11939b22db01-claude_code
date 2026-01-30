import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

export default function Header() {
  return (
    <header className="bg-[#043873] text-white py-4">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[220px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img
            src="./assets/logo-icon.svg"
            alt="Whitepace logo"
            className="w-[37px] h-[29px]"
          />
          <span className="text-xl md:text-2xl lg:text-[28px] font-bold">whitepace</span>
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-[60px]">
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#4F9CF9] transition-colors">
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#4F9CF9] transition-colors">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#4F9CF9] transition-colors">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2.5 cursor-pointer hover:text-[#4F9CF9] transition-colors">
              <span>Pricing</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 lg:gap-6">
            <Button variant="secondary" size="sm">
              Login
            </Button>
            <Button variant="primary" size="sm" showArrow>
              Try Whitepace free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
