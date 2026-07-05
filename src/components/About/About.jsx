import { useEffect, useState } from "react";

const skills = ["React", "JavaScript", "Tailwind CSS", "Responsive Design"];

const About = () => {
  const name = "Vaibhav";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let characterIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeName = () => {
      if (!isDeleting) {
        characterIndex += 1;
        setTypedName(name.slice(0, characterIndex));

        if (characterIndex === name.length) {
          isDeleting = true;
          timeoutId = window.setTimeout(typeName, 1200);
          return;
        }
      } else {
        characterIndex -= 1;
        setTypedName(name.slice(0, characterIndex));

        if (characterIndex === 0) {
          isDeleting = false;
        }
      }

      timeoutId = window.setTimeout(typeName, isDeleting ? 90 : 160);
    };

    timeoutId = window.setTimeout(typeName, 300);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="about"
      className="px-6 py-20 text-white sm:px-10 md:px-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="w-full">
          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-blue-700/20 shadow-2xl shadow-cyan-950/40">
            <img
              src="/generated-profile.png"
              alt="Vaibhav Kumar"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-5 text-center text-2xl font-bold text-white sm:text-3xl">
            I&apos;m{` `}
            <span className="typewriter-name text-cyan-300">{typedName}</span>
          </p>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Get to know me
          </p>
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            About Me
          </h2>

          <div className="space-y-4 text-base leading-7 text-slate-300 sm:text-lg">
            <p>
              Hi, I&apos;m Vaibhav—a frontend developer who enjoys turning ideas
              into clean, responsive, and easy-to-use web experiences.
            </p>
            <p>
              I build modern websites with React and Tailwind CSS, with a focus
              on thoughtful design, accessibility, and maintainable code. I am
              always learning and looking for new challenges that sharpen my
              skills.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#171d32]"
            >
              Let&apos;s Talk
            </a>
            <a
              href="/vaibhav-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-cyan-300 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#171d32]"
            >
              Resume PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
