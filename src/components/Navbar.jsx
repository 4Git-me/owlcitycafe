import logo from '../assets/images/Logo/Owlcitycafenotxt.png'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Menu', href: '/foodmenu' },
  // { name: 'Menu', href: '/menu' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact Us', href: '/contactus' },
 

]


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8 font-robotoSerif "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Owl City Cafe Logo" className="h-10 w-auto" />
          </Link>
        </div>

      {/* Desktop nav */}
<div className="hidden lg:flex lg:items-center lg:gap-x-8 ">
  {navigation.map((item) =>
    item.name === 'Contact Us' ? (
      <a
        key={item.name}
        href={item.href}
        className="btn rounded-md bg-[#00303F] px-6 py-2 text-white text-sm font-medium hover:bg-orange-600  transition"
      >
        {item.name}
      </a>
    ) : (
      <Link
        key={item.name}
        to={item.href}
        className={`text-md font-medium ${
          location.pathname === item.href
            ? "text-orange-600"
            : "text-gray-900"
        } hover:text-orange-500 transition`}
      >
        {item.name}
      </Link>
    )
  )}
</div>


        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 p-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-xl font-bold text-indigo-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img src={logo} alt="Owl City Cafe Logo" className="h-10 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              item.name === 'Contact Us' ? (
                // Render the "Contact Us" button in the mobile menu as well
                <a
                  key={item.name}
                  href={item.href}
                  className="btn block text-lg font-medium text-white bg-[#00303F] px-6 py-3 rounded-md hover:bg-amber-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                // Regular links for other items in mobile menu
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-medium text-gray-900 hover:text-amber-600 transition"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
