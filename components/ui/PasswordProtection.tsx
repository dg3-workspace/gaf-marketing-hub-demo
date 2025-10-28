import React, { useState } from 'react';
import { PAGE_PASSWORD } from '../../constants';

interface PasswordProtectionProps {
  onAuthenticated: () => void;
}

export const PasswordProtection: React.FC<PasswordProtectionProps> = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Password validation
    setTimeout(() => {
      if (!password.trim()) {
        setError('Please enter the password');
        setIsLoading(false);
        return;
      }

      if (password === PAGE_PASSWORD) {
        onAuthenticated();
      } else {
        setError('Invalid password. Please try again.');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* GAF Logo/Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-4">
              <img src="/images/gaf_logo_red.png" alt="GAF Logo" className="max-w-full max-h-full object-contain" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              GAF Marketing Hub Demo
            </h1>
            <p className="text-gray-600">
              Enter the password to access the demo
            </p>
          </div>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                placeholder="Enter password"
                disabled={isLoading}
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </div>
              ) : (
                'Access Demo'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>© 2025 Diversified Global Graphics Group – DG3</p>
          </div>
        </div>
      </div>
    </div>
  );
};