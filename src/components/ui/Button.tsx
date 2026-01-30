import { clsx } from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150',
        {
          'bg-primary-500 text-white hover:bg-primary-500/90': variant === 'primary',
          'bg-accent-yellow text-primary-900 hover:bg-accent-yellow/90': variant === 'secondary',
          'bg-white border border-accent-yellow text-primary-900 hover:bg-accent-yellow/10': variant === 'outline',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-4 text-base': size === 'md',
          'px-10 py-5 text-lg': size === 'lg',
        },
        className
      )}
    >
      {children}
    </button>
  );
}