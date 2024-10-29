import Spline from '@splinetool/react-spline';
import TypeIt from "typeit-react";

function Intro() {

  return (
    <section className="flex h-screen pb-8 relative flex flex-center justify-center items-center">
      <div className="h-full w-full flex flex-center items-center justify-center font-sans justify-start text-start m-8 font-thin">
        <div className="z-10 w-full flex flex-col justify-center items-center pointer-events-none">
          <p className="m-2 text-6xl pb-8 lg:text-6xl font-semibold">ELISHA LUCILE ONG</p>
          <TypeIt
            options={{
              speed: 150,
              waitUntilVisible: true,
              loop: true,
            }}
            className="m-2 text-3xl lg:text-4xl text-slate-200"
          >
            an aspiring software engineer
          </TypeIt>
        </div>
      </div>
      <div className="h-3/4 w-screen absolute w-3/4 z-0 opacity-60 blurred-edges">
          <Spline scene="https://prod.spline.design/IVXSBx-yfu2q3axz/scene.splinecode" />
      </div>
    </section>
  )
}

export default Intro