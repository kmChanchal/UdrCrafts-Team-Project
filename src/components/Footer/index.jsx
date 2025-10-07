import React from 'react';
import { FaFacebookF, FaYoutube, FaPinterestP, FaInstagram, FaRegCommentDots } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiAmericanexpress, SiPaypal } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200  ">
      <div className="container mx-auto py-10  footer-flex px-4  gap-2 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-300 pb-8">
          {/* Contact us */}
          <div>
            <h3 className="text-base font-semibold mb-3">Contact us</h3>
            <p className="mb-1 text-sm">Classyshop - Mega Super Store</p>

            <p className="mb-1 text-sm">507-Union Trade Centre France</p>

            <p className="mb-1 text-sm">sales@yourcompany.com</p>
            <p className="text-red-500 font-bold mb-3 text-base">(+91) 9876-543-210</p>
            <div className="flex items-center gap-2 text-red-500 font-semibold cursor-pointer text-sm">
              <FaRegCommentDots size={20} />
              <span>Online Chat</span>
            </div>
            <p className="font-semibold text-sm">Get Expert Help</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-semibold mb-3">Products</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>Prices drop</li>
              <li>New products</li>
              <li>Best sales</li>
              <li>Contact us</li>
              <li>Sitemap</li>
              <li>Stores</li>
            </ul>
          </div>

          {/* Our company */}
          <div>
            <h3 className="text-base font-semibold mb-3">Our company</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>Delivery</li>
              <li>Legal Notice</li>
              <li>Terms and conditions of use</li>
              <li>About us</li>
              <li>Secure payment</li>
              <li>Login</li>
            </ul>
          </div>

          {/* Subscribe to newsletter */}
          <div>
            <h3 className="text-base font-semibold mb-3">Subscribe to newsletter</h3>
            <p className="text-gray-700 mb-4 text-sm">
              Subscribe to our latest newsletter to get news about special discounts.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
              <button
                type="submit"
                className="bg-red-500 text-white font-semibold py-2 rounded hover:bg-red-600 transition text-sm"
              >
                SUBSCRIBE
              </button>
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input type="checkbox" />
                I agree to the terms and conditions and the privacy policy
              </label>
            </form>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 pt-6">
          {/* Social media icons */}
          <div className="flex gap-4 text-gray-600 text-xl">
            <FaFacebookF className="hover:text-red-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
            <FaPinterestP className="hover:text-red-500 cursor-pointer" />
            <FaInstagram className="hover:text-red-500 cursor-pointer" />
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm mt-4 md:mt-0">
            © 2024 - Ecommerce Template
          </div>

          {/* Payment icons */}
          <div className="flex gap-4 text-gray-600 text-2xl mt-4 md:mt-0">
            <SiVisa title="Visa" />
            <SiMastercard title="MasterCard" />
            <SiAmericanexpress title="American Express" />
            <SiPaypal title="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
