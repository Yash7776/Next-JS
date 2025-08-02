import Image from "next/image";
import React, { useEffect, useState } from "react";
import sky from "@/public/img/sky.jpg";
import Link from "next/link";

const Blogs = () => {
  const [blogs, setblogs] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/api/Blogs')
    .then(response => {
     // Return a Promise that resolves with the parsed body (e.g., JSON, text)
      return response.json(); // or response.text(), response.blob(), etc.
    })
    .then(data => {
      // Handle the parsed data from the previous .then()
      console.log(data);
      setblogs(data);
    })

  },[]);
  return (
    <>
    <div>
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blogitem)=>{
        return<>
        <div key={blogitem.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <Image
            src={sky}
            alt="Blog Cover"
            className="w-full h-48 object-cover"
          />

          <div className="p-5">
            <Link href={`blogpost/${blogitem.Slug}`} className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
            
            <p className="mt-2 text-gray-600 text-sm">
              {blogitem.Heading}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  width={20}
                  height={20}
                  alt="Author"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-gray-700">{blogitem.Auther}</span>
              </div>
              <span className="text-xs text-gray-500">July 5, 2025</span>
            </div>
          </Link>
          </div>
        </div>
        </>
      })}
      </div>
      
    </div>
    </>
  );
};

export default Blogs;
