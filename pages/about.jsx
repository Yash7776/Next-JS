import React from 'react'
import Image from 'next/image'
import sky from "@/public/img/sky.jpg";

const about = () => {
  return (
    <>
    <section class="bg-gray-100 py-16 px-6">
  <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">
    
    
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">
      About <span class="text-blue-600">Us</span>
    </h1>
    <p class="text-center text-gray-600 max-w-2xl mx-auto mb-10">
      We are passionate about building modern web experiences. Our mission is to share knowledge, inspire creativity, and connect people through meaningful content.
    </p>

    
    <div class="grid md:grid-cols-2 gap-10 items-center">
      
      <div>
        <Image src={sky} 
             alt="Our Team" 
             class="rounded-xl shadow-lg"/>
      </div>


      <div class="space-y-4 text-gray-700">
        <h2 class="text-2xl font-semibold text-gray-800">Who We Are</h2>
        <p>
          We are a team of developers, designers, and writers who love creating useful content for the community. With expertise in full-stack development and UI/UX, we focus on delivering high-quality tutorials and applications.
        </p>
        <p>
          Our blog covers everything from web development to design inspiration, helping beginners and professionals alike stay ahead in the digital world.
        </p>
        <p>
          Join us on this journey as we continue to learn, grow, and share!
        </p>
      </div>
    </div>

    <div class="mt-16">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-8">Our Values</h2>
      <div class="grid sm:grid-cols-3 gap-6 text-center">
        <div class="p-6 bg-blue-50 rounded-xl shadow-sm">
          <h3 class="font-semibold text-blue-600 mb-2">Innovation</h3>
          <p class="text-sm text-gray-600">We embrace new technologies and ideas to create unique solutions.</p>
        </div>
        <div class="p-6 bg-green-50 rounded-xl shadow-sm">
          <h3 class="font-semibold text-green-600 mb-2">Collaboration</h3>
          <p class="text-sm text-gray-600">Working together to achieve more and inspire each other.</p>
        </div>
        <div class="p-6 bg-purple-50 rounded-xl shadow-sm">
          <h3 class="font-semibold text-purple-600 mb-2">Growth</h3>
          <p class="text-sm text-gray-600">Continuous learning and improvement are at the heart of what we do.</p>
        </div>
      </div>
    </div>

  </div>
</section>

    </>
  )
}

export default about
