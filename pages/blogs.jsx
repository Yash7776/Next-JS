import Image from "next/image";
import React, { useState } from "react";
import sky from "@/public/img/sky.jpg";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

const Blogs = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }

  const [blogs, setBlogs] = useState(props.data);
  const [count, setCount] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    const newCount = count + 2;
    const res = await fetch(`/api/Blogs/?count=${newCount}`);
    const newBlogs = await res.json();

    if (newBlogs.length === blogs.length) {
      setHasMore(false);
      return;
    }

    setBlogs(newBlogs);
    setCount(newCount);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={blogs.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4 className="text-center py-4">Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }} className="py-4 font-semibold">
            🎉 Yay! You have seen it all
          </p>
        }
      >
        <div>
          <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blogitem) => {
              return (
                <div
                  key={blogitem.Slug}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <Image
                    src={sky}
                    alt="Blog Cover"
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-5">
                    <Link
                      href={`blogpost/${blogitem.Slug}`}
                      className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
                    >
                      <p className="mt-2 text-gray-600 text-sm">
                        {blogitem.Heading}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={sky}
                            width={20}
                            height={20}
                            alt="Author"
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm text-gray-700">
                            {blogitem.Auther}
                          </span>
                        </div>
                        <span
                          className="text-xs text-gray-500"
                          dangerouslySetInnerHTML={createMarkup(blogitem.Beauty)}
                        ></span>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export async function getServerSideProps() {
  let data = await fetch(`http://localhost:3000/api/Blogs/?count=2`);
  data = await data.json();
  return {
    props: { data },
  };
}

export default Blogs;
