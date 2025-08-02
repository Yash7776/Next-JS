import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import sky from "@/public/img/sky.png";
import Image from "next/image";
const slug = () => {
  const router = useRouter();
  const [blog, setblog] = useState([])
  useEffect(()=>{
      const { slug } = router.query;
        console.log(sky)
         if (!router.isReady) return;
        fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`)
        .then(response => {
         // Return a Promise that resolves with the parsed body (e.g., JSON, text)
          return response.json(); // or response.text(), response.blob(), etc.
        })
        .then(data => {
          // Handle the parsed data from the previous .then()
          console.log(data);
          setblog(data)
        })
    
      }, [router.isReady]);


  return (
    <>
    <div>
      <section class="max-w-3xl mx-auto px-4 py-10">
        <h1 class="text-4xl font-bold text-gray-800 leading-tight">
          {blog && blog.Heading}
        </h1>

        <div class="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div class="flex items-center space-x-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="Author"
              class="w-8 h-8 rounded-full"
            />
            <span>
              By <strong class="text-gray-700">{blog && blog.Auther}</strong>
            </span>
          </div>
          <span>August 1, 2025</span>
        </div>

        <div class="mt-6">
          <Image
            src={sky}
            alt="Blog Banner"
            class="w-full rounded-xl shadow"
          />
        </div>

        <article class="mt-8 space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            {blog && blog.Content}
          </p>
        </article>
        <div class="mt-10 flex flex-wrap gap-2">
          <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            #TailwindCSS
          </span>
          <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
            #WebDesign
          </span>
          <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
            #Frontend
          </span>
        </div>
      </section>
    </div>
    </>
  );
};

export default slug;
