import cover from "@/public/img/cover.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section class="bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div class="lg:w-1/2 text-center lg:text-left">
            <h1 class="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Welcome to <span class="text-blue-600">Your Blog</span>
            </h1>
            <p class="mt-4 text-gray-600 text-lg">
              Share your thoughts, discover stories, and connect with readers
              around the world.
            </p>
            <div class="mt-6 flex justify-center lg:justify-start gap-4">
              <a
                href="#get-started"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          <div class="lg:w-1/2">
            <Image src={cover}  alt="Hero Image" class="w-full rounded-xl shadow-lg"/>
          </div>
        </div>
      </section>
    </>
  );
}
