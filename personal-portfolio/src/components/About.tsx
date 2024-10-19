import CardContainer from "./CardContainer";

function About() {
  return (
    <section id="about" className="h-screen flex flex-col w-full">
      <div className="h-auto pb-4">
        <CardContainer />
      </div>
      <div className="h-1/2 w-3/4 flex justify-center items-center flex-col text-center m-auto">
        <div className="m-4 p-8 h-full text-md lg:text-2xl grid gap-2 text-ellipsis overflow-y-auto text-slate-300 font-sans font-light">
          <p>
            <strong className="font-medium text-slate-50">From an early age, technology has always fascinated me</strong>—whether it was playing Super Mario on my Game Boy or diving into flash games online. After moving to the United States, my passion for computers truly ignited when my family gifted me a small laptop, opening up a world of possibilities.
          </p>
          <p>
          In high school, I delved into basic electronics and got my first taste of web development through HTML and CSS, which further stoked my curiosity. Over time, this initial spark grew into a <strong className="font-medium text-slate-50">deep love for programming</strong>, as I discovered the joy of transforming a blank screen into a fully functioning app or website.
          </p>
          <p>
          While I explored several career paths during my time at UTSA, I eventually found my true calling in <strong className="font-medium text-slate-50">Full-Stack development</strong>. Though the journey wasn’t always linear, I’m excited about where it has led me and what the future holds.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About