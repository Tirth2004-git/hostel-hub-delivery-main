
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  ShoppingCart, 
  Search,
  Package,
  Menu,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    console.log('Toggle mobile menu clicked, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    console.log('Closing mobile menu');
    setIsMobileMenuOpen(false);
  };

  console.log('Mobile menu is open:', isMobileMenuOpen);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-4 sm:gap-8">
              <Link to="/" className="flex items-center gap-4 text-gray-900">
                <div className="w-4 h-4">
                  <Package className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-tight">Student Stationers</h2>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-9">
                <Link 
                  to="/" 
                  className={`text-sm font-medium leading-normal transition-colors ${
                    isActive('/') 
                      ? 'text-blue-600' 
                      : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/shop" 
                  className={`text-sm font-medium leading-normal transition-colors ${
                    isActive('/shop') 
                      ? 'text-blue-600' 
                      : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  Shop
                </Link>
                <Link 
                  to="/xerox" 
                  className={`text-sm font-medium leading-normal transition-colors ${
                    isActive('/xerox') 
                      ? 'text-blue-600' 
                      : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  Xerox
                </Link>
                <Link 
                  to="/cart" 
                  className={`text-sm font-medium leading-normal transition-colors ${
                    isActive('/cart') 
                      ? 'text-blue-600' 
                      : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  Cart
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-sm font-medium leading-normal transition-colors ${
                    isActive('/contact') 
                      ? 'text-blue-600' 
                      : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right Side - Desktop */}
            <div className="hidden md:flex flex-1 justify-end gap-4 sm:gap-8">
              {/* Search Bar - Hidden on mobile */}
              <div className="flex items-center flex-1 max-w-64">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Profile Avatar */}
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASG9WSNzUKP2TeWFLICbZigOUaoqHsJuQ_Q3ZfeZ9Tp9iGhO3i4bryWfIj95odUmCTuxQ2U7DiuBxw5adB1Koz1aOWMPQWL68WtgYH0ABiCXXwSBWk-5eNO8UGmM2TgW5did-IrGwwS3mMiuYSBygeGoU3gW0NIENdj7Ouyi7VPR69YXSZv6KS9BpraRRWCXgCsCoRCYCexRnpi4a-_CalnIuYeZTMH_w9EM2Ff7oZIYMlXaLmp3z79TqxMKN-4eUWaK9VlgB62Vd5")'
                }}
              />
            </div>

            {/* Mobile Right Side */}
            <div className="flex md:hidden items-center gap-3">
              {/* Search Button - Mobile only */}
              <Button
                variant="ghost"
                size="sm"
                className="bg-gray-100 text-gray-900 hover:bg-gray-200"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="bg-gray-100 text-gray-900 hover:bg-gray-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`
        fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 md:hidden
        transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}
      `}>
        <div className="px-4 py-6 space-y-4">
          {/* Mobile Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-3">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                  : 'text-gray-900 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                isActive('/shop') 
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                  : 'text-gray-900 hover:bg-gray-50'
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/xerox" 
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                isActive('/xerox') 
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                  : 'text-gray-900 hover:bg-gray-50'
              }`}
            >
              Xerox
            </Link>
            <Link 
              to="/cart" 
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                isActive('/cart') 
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                  : 'text-gray-900 hover:bg-gray-50'
              }`}
            >
              Cart
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                isActive('/contact') 
                  ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                  : 'text-gray-900 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Profile Section */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center gap-3 px-4 py-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASG9WSNzUKP2TeWFLICbZigOUaoqHsJuQ_Q3ZfeZ9Tp9iGhO3i4bryWfIj95odUmCTuxQ2U7DiuBxw5adB1Koz1aOWMPQWL68WtgYH0ABiCXXwSBWk-5eNO8UGmM2TgW5did-IrGwwS3mMiuYSBygeGoU3gW0NIENdj7Ouyi7VPR69YXSZv6KS9BpraRRWCXgCsCoRCYCexRnpi4a-_CalnIuYeZTMH_w9EM2Ff7oZIYMlXaLmp3z79TqxMKN-4eUWaK9VlgB62Vd5")'
                }}
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Profile</p>
                <p className="text-xs text-gray-500">Manage your account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;