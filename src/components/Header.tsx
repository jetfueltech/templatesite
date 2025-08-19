import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { cn } from '../lib/utils';

const services = [
  { name: 'Website Design', path: '/services/website-design' },
  { name: 'AI Integration', path: '/services/ai-integration' },
  { name: 'AI Agents', path: '/services/ai-agents' },
  { name: 'SEO Services', path: '/services/seo' },
  { name: 'Maintenance', path: '/services/maintenance' },
];

const locations = [
  { name: 'Pensacola, FL', path: '/locations/pensacola' },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-[#ff4800]' : 'text-gray-600';
  };

  // Check if we're in the business info step or checkout page
  const shouldShowSimpleHeader = 
    (location.pathname.includes('/template/') && location.pathname.split('/').length === 3) ||
    location.pathname === '/checkout';

  if (shouldShowSimpleHeader) {
    return (
      <header className="bg-transparent z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Jetfuel.Tech
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Jetfuel.Tech
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/templates" 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive('/templates')
                    )}
                  >
                    Templates
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {services.map((service) => (
                        <li key={service.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.path}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900",
                                location.pathname === service.path ? "text-[#ff4800]" : "text-gray-600"
                              )}
                            >
                              {service.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {locations.map((location) => (
                        <li key={location.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={location.path}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900",
                                location.pathname === location.path ? "text-[#ff4800]" : "text-gray-600"
                              )}
                            >
                              {location.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive('/about')
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive('/contact')
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <button
              onClick={() => navigate('/templates')}
              className="px-4 py-2 text-white bg-[#ff4800] rounded-lg hover:bg-[#ff4800]/90 transition-colors"
            >
              Get Website
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 bg-white z-50 lg:hidden overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/templates" 
                className={`block py-2 ${isActive('/templates')} hover:text-[#ff4800] transition-colors`}
              >
                Templates
              </Link>

              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className={`block py-2 pl-4 ${
                    location.pathname === service.path ? 'text-[#ff4800]' : 'text-gray-600'
                  } hover:text-[#ff4800] transition-colors`}
                >
                  {service.name}
                </Link>
              ))}

              {locations.map((location) => (
                <Link
                  key={location.path}
                  to={location.path}
                  className={`block py-2 pl-4 ${
                    location.pathname === location.path ? 'text-[#ff4800]' : 'text-gray-600'
                  } hover:text-[#ff4800] transition-colors`}
                >
                  {location.name}
                </Link>
              ))}

              <Link 
                to="/about" 
                className={`block py-2 ${isActive('/about')} hover:text-[#ff4800] transition-colors`}
              >
                About
              </Link>
              
              <Link 
                to="/contact" 
                className={`block py-2 ${isActive('/contact')} hover:text-[#ff4800] transition-colors`}
              >
                Contact
              </Link>

              <button
                onClick={() => {
                  navigate('/templates');
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 text-white bg-[#ff4800] rounded-lg hover:bg-[#ff4800]/90 transition-colors mt-4"
              >
                Get Website
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}