import { ButtonHTMLAttributes } from 'react';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2.5 font-medium rounded-lg transition-all duration-200',
        'hover:scale-105 active:scale-95',
        {
          'bg-[#4F9CF9] text-white hover:bg-[#3a8ce0]': variant === 'primary',
          'bg-[#FFE492] text-[#043873] hover:bg-[#ffd96b]': variant === 'secondary',
          'border-2 border-[#FFE492] text-[#043873] hover:bg-[#FFE492]': variant === 'outline',
          'px-5 py-3 text-sm': size === 'sm',
          'px-10 py-4 text-base': size === 'md',
          'px-10 py-5 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="w-5 h-5" />}
    </button>
  );
}
