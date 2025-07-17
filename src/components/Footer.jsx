import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 font-poppins">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left - Navigation */}
        <div className="space-y-2">
          <Link to="/about" className="text-sm hover:text-orange-400 block">
            About Us
          </Link>
          <Link to="/foodmenu" className="text-sm hover:text-orange-400 block">
            Menu
          </Link>
          <Link to="/reviews" className="text-sm hover:text-orange-400 block">
            Reviews
          </Link>
        </div>

        {/* Center - Social */}
        <div className="space-y-4">
          <p className="font-medium">Follow Us</p>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a
              href="https://web.facebook.com/profile.php?id=61578675141349"
              aria-label="Facebook"
              className="hover:text-amber-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-amber-400">
              <FaInstagram />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-amber-400">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Right - Contact */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaPhoneAlt className="text-orange-400" />
            <span>0123-4567</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaPhoneAlt className="text-orange-400" />
            <span>+63 912 345 6789</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <MdEmail className="text-orange-400" />
            <span>owlcitycafe@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} GenSpark Digital All rights reserved
      </div>
    </footer>
  );
}
