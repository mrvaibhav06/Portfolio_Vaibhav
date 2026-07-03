import {
  RiCss3Fill,
  RiGitBranchFill,
  RiGithubFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNodejsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "@remixicon/react";

const skills = [
  { name: "HTML5", type: "Language", icon: RiHtml5Fill, color: "text-orange-400", background: "bg-orange-400/10" },
  { name: "CSS3", type: "Language", icon: RiCss3Fill, color: "text-blue-400", background: "bg-blue-400/10" },
  { name: "JavaScript", type: "Language", icon: RiJavascriptFill, color: "text-yellow-300", background: "bg-yellow-300/10" },
  { name: "React", type: "Framework", icon: RiReactjsFill, color: "text-cyan-300", background: "bg-cyan-300/10" },
  { name: "Tailwind CSS", type: "Framework", icon: RiTailwindCssFill, color: "text-sky-300", background: "bg-sky-300/10" },
  { name: "Node.js", type: "Runtime", icon: RiNodejsFill, color: "text-green-400", background: "bg-green-400/10" },
  { name: "Git", type: "Tool", icon: RiGitBranchFill, color: "text-red-400", background: "bg-red-400/10" },
  { name: "GitHub", type: "Tool", icon: RiGithubFill, color: "text-slate-200", background: "bg-white/10" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black/10 px-6 py-20 text-white sm:px-10 md:px-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          My toolkit
        </p>
        <h2 className="mb-5 text-3xl font-bold sm:text-4xl md:text-5xl">
          Skills &amp; Technologies
        </h2>
        <p className="mb-12 max-w-2xl text-lg leading-8 text-slate-300">
          Languages, frameworks, and tools I use to build modern web experiences.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {skills.map(({ name, type, icon: Icon, color, background }) => (
            <article
              key={name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-950/20 sm:p-6"
            >
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${background} ${color} transition duration-300 group-hover:scale-110`}>
                <Icon size={34} />
              </div>
              <h3 className="font-bold sm:text-lg">{name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">{type}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
