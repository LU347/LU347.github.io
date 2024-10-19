import Spline from '@splinetool/react-spline';
import TypeIt from "typeit-react";

function Intro() {
  const SuperStrong = ({ children }: any) => {
    return <strong className="text-2xl font-extrabold">{children}</strong>
  }

  return (
    <section className="flex h-screen pb-8 relative">
      <div className="h-3/4 w-full flex flex-center items-center justify-center font-sans justify-start text-start m-8 font-thin">
        <div className="m-2 leading-loose text-3xl lg:text-4xl z-10">
          <p className="text-6xl lg:text-8xl font-semibold">ELISHA LUCILE ONG</p>
          <TypeIt
            options={{
              speed: 150,
              waitUntilVisible: true,
              loop: true,
            }}
            className="text-slate-200"
            >
            an aspiring software engineer
          </TypeIt>
        </div>
      </div>
      <div className="h-full absolute w-full z-0 opacity-35 blurred-edges">
        <Spline scene="https://prod.spline.design/IVXSBx-yfu2q3axz/scene.splinecode" />
      </div>
    </section>
  )
}

export default Intro