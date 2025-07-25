// src/components/Footer.jsx
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="dark:bg-gray-900 dark:text-gray-300 text-gray-950 mt-10">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-xl font-bold dark:text-white text-gray-950 mb-4">YourBlog</h2>
          <p className="text-sm dark:text-gray-400 text-gray-950">
            Discover stories, share insights, and inspire change — one post at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold dark:text-white text-gray-950 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="dark:hover:text-white hover:text-gray-950 transition">Home</Link></li>
            <li><Link to="/about" className="dark:hover:text-white hover:text-gray-950 transition">About</Link></li>
            <li><Link to="/blog" className="dark:hover:text-white hover:text-gray-950 transition">Blog</Link></li>
            <li><Link to="/contact" className="dark:hover:text-white hover:text-gray-950 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Replace # with actual profile URLs */}
            <a href="#" aria-label="Twitter" className="hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white transition">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-white transition">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t dark:border-gray-800 mt-8 pt-6 text-center text-sm dark:text-gray-400">
        © {new Date().getFullYear()} YourBlog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
