const Home = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl mt-4 font-black text-center">Welcome on Blog Space</h1>
      <div className="flex justify-center mt-10 w-full">
        <img src="blogger-logo-icon.png" alt="" width="200px" height="200px"/>
      </div>
      <p className="mt-20 ml-4">Discover the essence of my project and follow its evolution.</p>

      <div className="about">
        <h2 className="text-2xl mt-10 ml-4 font-black">About project.</h2>
        <p className="ml-4 mt-4">
          This blog is a space dedicated to sharing ideas, discoveries, and reflections.
          You will find a variety of articles, tutorials, as well as regular updates on the ongoing project.
          The goal is to create a community built around knowledge and mutual support.
        </p>
      </div>
    </div>
  )
}

export default Home