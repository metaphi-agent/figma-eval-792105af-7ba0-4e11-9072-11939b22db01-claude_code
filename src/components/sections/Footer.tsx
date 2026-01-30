import { Facebook, Twitter, Linkedin, Globe } from 'lucide-react';
import Button from '../ui/Button';

export default function Footer() {
  return (
    <footer className="bg-[#043873] text-white py-[140px] px-[220px]">
      <div className="max-w-[1480px] mx-auto space-y-[200px]">
        {/* Main Footer Content */}
        <div className="flex justify-between gap-[100px]">
          {/* Brand Section */}
          <div className="w-[300px] space-y-4">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="./assets/logo-icon.svg"
                alt="Whitepace logo"
                className="w-[37px] h-[29px]"
              />
              <span className="text-[28px] font-bold">whitepace</span>
            </div>
            <p className="text-lg leading-relaxed opacity-90">
              whitepace was created for the new ways we live and work. We make a better
              workspace around the world
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#FFE492] hover:underline transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4F9CF9] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4F9CF9] transition-colors">
                  Customer stories
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-[#4F9CF9] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4F9CF9] transition-colors">
                  Guides & tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4F9CF9] transition-colors">
                  Help center
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-[#4F9CF9] transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4F9CF9] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4F9CF9] transition-colors">
                  Media kit
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <h3 className="text-[28px] font-bold">Try It Today</h3>
            <p className="leading-relaxed">
              Get started for free.
              <br />
              Add your whole team as your needs grow.
            </p>
            <Button variant="primary" size="md" showArrow>
              Start today
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between pt-8 border-t border-white/20">
          <div className="flex items-center gap-[60px]">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </div>
            <a href="#" className="hover:text-[#4F9CF9] transition-colors">
              Terms & privacy
            </a>
            <a href="#" className="hover:text-[#4F9CF9] transition-colors">
              Security
            </a>
            <a href="#" className="hover:text-[#4F9CF9] transition-colors">
              Status
            </a>
            <span className="opacity-70">©2021 Whitepace LLC.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="hover:text-[#4F9CF9] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-[#4F9CF9] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-[#4F9CF9] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
