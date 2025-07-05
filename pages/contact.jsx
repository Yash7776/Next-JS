import React from 'react'

const contact = () => {
  return (
    <div>
      <section class="bg-gray-100 py-12 px-4">
  <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2">
    
    <div class="bg-blue-600 text-white p-8">
      <h2 class="text-2xl font-bold mb-4">Get in Touch</h2>
      <p class="mb-6">Feel free to reach out to us for any inquiries or feedback. We’re happy to help!</p>
      
      <ul class="space-y-4 text-sm">
        <li><strong>Email:</strong> support@yourblog.com</li>
        <li><strong>Phone:</strong> +91 98765 43210</li>
        <li><strong>Address:</strong> 123 Tech Street, Mumbai, India</li>
      </ul>
    </div>

    <form class="p-8 space-y-6 bg-white">
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-700">Name</label>
        <input type="text" placeholder="Your Name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-700">Email</label>
        <input type="email" placeholder="you@example.com" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
      
      <div>
        <label class="block mb-1 text-sm font-medium text-gray-700">Message</label>
        <textarea rows="4" placeholder="Your message..." class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
        Send Message
      </button>
    </form>

  </div>
</section>
    </div>
  )
}

export default contact
