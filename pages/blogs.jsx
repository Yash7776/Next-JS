import Image from "next/image";
import React from "react";
import sky from "@/public/img/sky.jpg";
import Link from "next/link";
const Blogs = () => {
  return (
    <>
    <div>
      <div class="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <Image
            src={sky}
            width={50}
            height={50}
            alt="Blog Cover"
            class="w-full h-48 object-cover"
          />

          <div class="p-5">
            <Link href="/blogpost/Yash" class="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
              Exploring the Future of Tech
            </Link>
            <p class="mt-2 text-gray-600 text-sm">
              Discover how technology is reshaping our world, from AI
              advancements to sustainable innovation.
            </p>

            <div class="mt-4 flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <Image
                  width={20}
                  height={20}
                  alt="Author"
                  class="w-8 h-8 rounded-full"
                />
                <span class="text-sm text-gray-700">Yash Pathak</span>
              </div>
              <span class="text-xs text-gray-500">July 5, 2025</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Blogs;
