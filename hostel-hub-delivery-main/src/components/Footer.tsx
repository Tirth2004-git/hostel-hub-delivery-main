
import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="flex justify-center bg-white">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 sm:justify-around">
            <a className="text-gray-600 text-sm sm:text-base font-normal leading-normal min-w-20 sm:min-w-40" href="#">
              About Us
            </a>
            <a className="text-gray-600 text-sm sm:text-base font-normal leading-normal min-w-20 sm:min-w-40" href="#">
              Contact
            </a>
            <a className="text-gray-600 text-sm sm:text-base font-normal leading-normal min-w-20 sm:min-w-40" href="#">
              FAQ
            </a>
            <a className="text-gray-600 text-sm sm:text-base font-normal leading-normal min-w-20 sm:min-w-40" href="#">
              Terms of Service
            </a>
            <a className="text-gray-600 text-sm sm:text-base font-normal leading-normal min-w-20 sm:min-w-40" href="#">
              Privacy Policy
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600 text-sm sm:text-base font-normal leading-normal">
            © 2024 Student Stationers. All rights reserved.
          </p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
