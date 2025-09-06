const Home = () => {
  return (
    <>
      <div className="mt-20 px-6 bg-white min-h-screen text-gray-900">
        <h1 className="text-5xl sm:text-4xl font-extrabold text-center text-black">
          Welcome on Blog Space
        </h1>

        <div className="flex justify-center mt-10">
          <img
            src="blogger-logo-icon.png"
            alt="Blog Space Logo"
            className="w-48 h-48 sm:w-40 sm:h-40 rounded-full border-4 border-black shadow-md"
          />
        </div>

        <p className="mt-16 text-lg text-center max-w-2xl mx-auto text-gray-800">
          Discover the essence of my project and follow its evolution.
        </p>

        <div className="about mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4 border-l-4 border-black pl-4 text-black">
            About project
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            This blog is a space dedicated to sharing ideas, discoveries, and reflections. You will find a variety of articles, tutorials, as well as regular updates on the ongoing project. The goal is to create a community built around knowledge and mutual support.
          </p>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-black via-gray-400 to-black my-16"></div>
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4 border-l-4 border-black pl-4 text-black">
            What You Can Expect
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>Insightful articles on technology, culture, and lifestyle.</li>
            <li>Step-by-step tutorials and practical guides.</li>
            <li>Regular updates on the evolution of projects and experiments.</li>
            <li>A friendly and interactive community ready to share knowledge.</li>
            <li>Inspiration and ideas to spark your creativity and curiosity.</li>
          </ul>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4 border-l-4 border-black pl-4 text-black">
            Join the Community
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Blog Space is more than just articles — it's a place to connect with like-minded readers. Share your thoughts, comment on posts, and engage in discussions. Together, we can build a supportive environment where learning and creativity thrive.
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold mb-4 border-l-4 border-black pl-4 text-black">
            Stay Updated
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Subscribe to the newsletter to receive updates directly in your inbox. Be the first to know about new tutorials, project updates, and exclusive content curated for our community.
          </p>
        </div>
      </div>
  </>
  )
}

export default Home