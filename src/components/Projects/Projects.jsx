import { RiArrowRightUpLine, RiGithubLine } from "@remixicon/react";

const projects = [
  {
    title: "GoodWillEdu (Tutor Finder)",
    description:
      "Find the perfect home tutor near you. We connect students with qualified, trusted, and experienced tutors who provide personalized learning, improve academic performance, and build confidence.",
    technologies: ["React", "Tailwind CSS", "Vite", "Node", "MongoDB"],
    image: "/project-banners/tutor-finder.png",
    githubUrl: "https://github.com/mrvaibhav06/gv-tutor_1.git",
    liveUrl: "https://www.goodwilledu.in/",
  },
  {
    title: "Task Manager",
    description:
      "A simple productivity application for creating, organizing, and completing daily tasks with a clear user experience.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/project-banners/task-manager.png",
  },
  {
    title: "Zoom Applicaion(loopmeet)",
    description:
      "A Zoom-inspired application for joining video meetings, collaborating with a team, and connecting from anywhere.",
    technologies: ["React", "WebRTC", "JavaScript", "Socket.io", "Node", "Express"],
    image: "/project-banners/video-meeting.png",
    githubUrl: "https://github.com/mrvaibhav06/LoopMeet.git",
    liveUrl: "https://loopmeet-video-call2.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 py-20 text-white sm:px-10 md:px-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Things I have built
        </p>
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl md:text-5xl">
          Featured Projects
        </h2>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30"
            >
              <div className="h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.title} banner`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-5 text-sm font-semibold">
                  <a
                    href={project.githubUrl ?? "#"}
                    target={project.githubUrl ? "_blank" : undefined}
                    rel={project.githubUrl ? "noreferrer" : undefined}
                    aria-label={`${project.title} source code`}
                    className="flex items-center gap-2 text-slate-300 transition hover:text-cyan-300"
                  >
                    <RiGithubLine size={19} /> Code
                  </a>
                  <a
                    href={project.liveUrl ?? "#"}
                    target={project.liveUrl ? "_blank" : undefined}
                    rel={project.liveUrl ? "noreferrer" : undefined}
                    aria-label={`${project.title} live demo`}
                    className="flex items-center gap-1 text-cyan-300 transition hover:text-cyan-200"
                  >
                    Live Demo <RiArrowRightUpLine size={19} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
