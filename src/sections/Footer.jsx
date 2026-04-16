import React from "react";

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 ">
          <img
            src={"public/images/Untitled-2.png"}
            alt="logo"
            className={"glass-dark rounded-2xl"}
          />
        </div>
        <span className="font-medium text-gray-800">TaskOrbit</span>
      </div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-gray-900 transition">
          Privacy
        </a>
        <a href="#" className="hover:text-gray-900 transition">
          Terms
        </a>
        <a href="#" className="hover:text-gray-900 transition">
          Contact
        </a>
      </div>
      <div>© 2026 TaskOrbit. All rights reserved.</div>
    </div>
  </footer>
);
export default Footer;
