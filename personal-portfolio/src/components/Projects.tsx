import test from "../assets/card-images/monsieurmignon.jpg";

function Projects() {
  return (
    <section id="projects" className="h-screen flex flex-col justify-center align-items-center">
      <div className="w-11/12 h-1/4 max=h-[200px] m-auto flex justify-center items-center rounded-lg border border-purple-900">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-red-400">Image</div>
          <div className="bg-red-500 flex flex-col">
            <h1>Title</h1>
            <p>Description</p>
            <div>
              links
            </div>
          </div>
        </div>

      </div>


    </section>
  )
}

export default Projects