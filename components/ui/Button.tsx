import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 transition-transform transform hover:-translate-y-1';

  const variantStyles = {
    primary: 'border-transparent bg-brand-green text-white hover:bg-green-700 focus:ring-brand-green',
    secondary: 'border-transparent bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400',
    outline: 'border-brand-green bg-transparent text-brand-green hover:bg-brand-green hover:text-white focus:ring-brand-green',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};