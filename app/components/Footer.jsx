'use client';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="w-6 h-6 gradient-text" />
            <span className="text-lg font-bold gradient-text font-poppins">DevPortfolio</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by John Doe</span>
            <span>•</span>
            <span>© {currentYear}</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with Next.js, Tailwind CSS, and Framer Motion. Deployed with love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;