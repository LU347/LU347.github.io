import CardContainer from "./CardContainer";

function About() {
  const SuperStrong = ({ children }: any) => {
    return <strong className="font-light text-slate-50">{children}</strong>
  }

  const Paragraph = ({ children }: any) => {
    return <p className="leading-9 text-lg">{children}</p>
  }

  return (
    <section id="about" className="h-screen flex flex-col w-full pt-20 p-16 m-auto">
      <div className="text-center pb-12 m-8 text-3xl 2xl:text-6xl font-serif font-medium">
        <h1>About Me</h1>
      </div>
      <div className="hidden h-1/4 2xl:h-2/4 2xl:block">
        <CardContainer />
      </div>
      <div className="h-auto lg:h-2/3 w-3/4 flex justify-center items-center flex-col text-center m-auto overflow-auto">
        <div className="m-4 p-8 h-full text-md lg:text-2xl grid gap-2 text-ellipsis text-slate-300 font-sans font-thin">
          <Paragraph>
            From an early age,
            <SuperStrong> technology has always fascinated me</SuperStrong>—whether it was playing Super Mario on my Game Boy or diving into flash games online. After moving to the United States, my passion for computers truly ignited when my family gifted me a small laptop, opening up a world of possibilities.
          </Paragraph>
          <Paragraph>
            In high school, I delved into basic electronics and got my first taste of web development through HTML and CSS, which further stoked my curiosity. Over time, this initial spark grew into a <SuperStrong>deep love for programming</SuperStrong>, as I discovered the joy of transforming a blank screen into a fully functioning app or website.
          </Paragraph>
          <Paragraph>
            While I explored several career paths during my time at UTSA, I eventually found my true calling in <SuperStrong>Full-Stack development</SuperStrong>. Though the journey wasn’t always linear, I’m excited about where it has led me and what the future holds.
          </Paragraph>
        </div>
      </div>
    </section>
  )
}

export default About