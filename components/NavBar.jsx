import Image from "next/image";
import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/blogs"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Right Profile */}
            <div className="flex items-center space-x-2">
              <span className="text-sm">Hi, User</span>
              <Image
                src="https://via.placeholder.com/32"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full border border-white"
                unoptimized // allows external image without config
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
