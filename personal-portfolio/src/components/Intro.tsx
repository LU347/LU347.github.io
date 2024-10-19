import Spline from '@splinetool/react-spline';
import TypeIt from "typeit-react";

function Intro() {
  const SuperStrong = ({ children }: any) => {
    return <strong className="text-2xl font-extrabold">{children}</strong>
  }

  return (
    <section id="about" className="flex flex-center items-center h-screen lg:grid-cols-2 gap-2 pb-8">
      <div className="h-full w-full lg:w-1/2 flex flex-col font-sans justify-center text-start m-8 font-thin">
        <div className="m-6 leading-loose text-2xl">
          <TypeIt
            options={{
              speed: 150,
              waitUntilVisible: true,
              loop: true,
            }}
          >
            Hello World
          </TypeIt>
          <p>
            I'm an aspiring <SuperStrong>Software Engineer</SuperStrong> focusing on <SuperStrong>web development</SuperStrong> technologies.
          </p>
        </div>
      </div>
      <div className="h-full hidden lg:block lg:w-1/2">
        <Spline scene="https://prod.spline.design/lZoCE8G4v6gQ9KLS/scene.splinecode" />
      </div>
    </section>
  )
}

export default Intro