import React from "react";
// import Blog_Img from '.Blog_Img.jpeg';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">About</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to my blog platform. Here, you can read, write, and share blog
        posts on various topics. Our mission is to create a space where people
        can express their thoughts and ideas freely and connect with others
        through the power of words.
        <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Whether you're looking for inspiration, wanting to share
                    your experiences, or simply enjoy reading diverse content,
                    my platform is here to support you.
                  </p>
                  <br className="block sm:hidden" />
                  Blog Platform
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8"></p>
                <p className="mt-4 text-xl text-gray-600 md:mt-8">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                    <span className="relative"> Have a question? </span>
                  </span>
                  <br className="block sm:hidden" />
                  Ask on{" "}
                  <a
                    href="#"
                    title=""
                    className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                  >
                    Twitter
                  </a>
                </p>
              </div>
              {/* <div className="relative">
                <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />
                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={Blog_Img} alt="Blog_Img" />
              </div> */}
            </div>
          </div>
        </section>
      </p>
    </div>
  );
};

export default About;
