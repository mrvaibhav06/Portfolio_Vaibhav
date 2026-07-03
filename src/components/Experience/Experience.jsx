const experiences = [
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    period: "2025 — Present",
    description:
      "Building responsive web applications with React and Tailwind CSS, focusing on reusable components, accessibility, and clean user interfaces.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    role: "Web Development Learner",
    company: "Independent Study",
    period: "2024 — 2025",
    description:
      "Developed a strong foundation in HTML, CSS, JavaScript, Git, and modern frontend development through hands-on practice.",
    technologies: ["HTML", "CSS", "Git"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-black/10 px-6 py-20 text-white sm:px-10 md:px-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          My journey
        </p>
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl md:text-5xl">
          Experience
        </h2>

        <div className="relative space-y-8 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-cyan-300/30">
          {experiences.map((experience) => (
            <article key={`${experience.role}-${experience.period}`} className="relative pl-10">
              <span className="absolute left-0 top-7 h-[15px] w-[15px] rounded-full border-4 border-[#171d32] bg-cyan-300 ring-2 ring-cyan-300/30" />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 sm:p-8">
                <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold sm:text-2xl">{experience.role}</h3>
                    <p className="mt-1 font-medium text-cyan-300">{experience.company}</p>
                  </div>
                  <span className="text-sm text-slate-400">{experience.period}</span>
                </div>
                <p className="leading-7 text-slate-300">{experience.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span key={technology} className="rounded-full bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
