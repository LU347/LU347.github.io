import CardContainer from "./CardContainer";

function About() {
  return (
    <section className="bg-green-500 h-screen flex flex-col w-full">
      <div className="bg-slate-300 h-1/2">
        <CardContainer />
      </div>
      <div className="bg-slate-500 h-1/2">
        <h1>A little bit about me...</h1>
        <p>
          Since childhood, I’ve been fascinated by technology—whether it was playing Super Mario on my Game Boy, tinkering with a red floppy disk, or exploring flash games on the internet. After moving to the United States, my family gifted me a small Linux laptop, which sparked my love for computers.
        </p>
        <p>
          In high school, I learned basic electronics and was introduced to HTML and CSS, further fueling my passion for technology. Over time, this curiosity blossomed into a love for programming. There's something deeply satisfying about transforming a blank page into a fully developed app or website.
        </p>
        <p>
          Though I explored several career paths at UTSA, I’ve found my calling in Full-Stack development. It may have taken time to get here, but I’m excited about what the future holds.
        </p>
      </div>
    </section>
  )
}

export default About