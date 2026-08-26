import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Terminal,
} from "lucide-react";
import { FadeIn, HoverCard } from "../components/motion";

const projects = [
  {
    name: "OnTime",
    label: "Featured project",
    description:
      "Employee management platform with scheduling, attendance, leave management and an administrative dashboard.",
    stack: ["React", "Firebase", "Firestore", "Flutter", "Tailwind"],
    github: "https://github.com/OnTime-HR/OnTime-web",
    demo: "#contact",
    featured: true,
  },
  {
    name: "CallDoc",
    label: "Full-Stack Web Application",
    description:
      "Doctor channeling platform that allows patients to find doctors, view available schedules, and book appointments through an interactive web application.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Praveen-Thathsara/Doctor-Channeling-Website-CallDoc",
    demo: "#contact",
  },
  {
    name: "Trending Movies API",
    label: "Backend / API",
    description:
      "FastAPI-based movie service designed around external movie data, API endpoints and backend development practice.",
    stack: ["Python", "FastAPI", "REST API"],
    github: "https://github.com/Praveen-Thathsara",
    demo: "#contact",
  },
  {
    name: "Gallery Website",
    label: "Front-End project",
    description:
      "Photo gallery application with upload and download functionality, built while learning full-stack web development.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Praveen-Thathsara/Gallery-website-Praveen-s-Gallery-",
    demo: "#contact",
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "Java", "Python", "Dart", "C"]
  },

  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"]
  },

  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "FastAPI", "REST APIs"]
  },

  {
    title: "Mobile",
    icon: Smartphone,
    items: ["Flutter"]
  },

  {
    title: "Databases",
    icon: Database,
    items: ["Firebase", "Firestore", "MongoDB", "MySQL"]
  },

  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "AWS",
      "EC2",
      "Elastic Beanstalk",
      "RDS",
      "Elastic Load Balancing",
      "Auto Scaling",
      "CloudWatch",
      "SNS",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
      "Git",
      "GitHub"
    ]
  },
];

export default function Home() {
  return (
    <main>
      <header className="glass fixed inset-x-0 top-0 z-50">
        <nav className="container-page flex h-18 items-center justify-between">
          <a href="#home" className="text-xl font-black tracking-tight">
            <span className="text-gradient">PR</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {["about", "experience", "projects", "skills", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="capitalize transition hover:text-teal-300">
                {item}
              </a>
            ))}
            <a href="/resume.pdf" className="rounded-lg border border-slate-700 px-4 py-2 transition hover:border-teal-400 hover:text-teal-300">
              Resume
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="grid-bg min-h-screen pt-28">
        <div className="container-page flex min-h-[calc(100vh-7rem)] items-center py-20">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="mb-5 flex items-center gap-3 text-sm font-medium text-teal-300">
                <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_18px_rgba(45,212,191,.8)]" />
                Open to internship opportunities
              </div>
              <p className="mb-3 font-mono text-sm text-slate-400">Hi, I&apos;m</p>
              <h1 className="text-5xl font-black tracking-[-.06em] text-white sm:text-7xl">
                Praveen <span className="text-gradient">Thathsara.</span>
              </h1>
              <h2 className="mt-5 max-w-3xl text-2xl font-bold tracking-tight text-slate-300 sm:text-4xl">
                Computer Science Undergraduate · Software Developer · DevOps Enthusiast
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                I build modern web and mobile applications and I&apos;m expanding my skills in cloud computing,
                DevOps, APIs and reliable software delivery.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5">
                  View Projects <ArrowUpRight size={18} />
                </a>
                <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-teal-400 hover:text-teal-300">
                  Download CV
                </a>
              </div>

              <div className="mt-9 flex gap-4">
                <Social href="https://github.com/Praveen-Thathsara" icon={<Github size={20} />} label="GitHub" />
                <Social href="https://linkedin.com/in/praveen-thathsara-rathnayake-994389316/" icon={<Linkedin size={20} />} label="LinkedIn" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="about" className="container-page py-24">
        <FadeIn>
          <p className="mb-2 font-mono text-sm text-teal-300">01 / About</p>
          <h2 className="section-title">Building skills through real projects.</h2>
        </FadeIn>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.6fr_1fr]">
          <FadeIn delay={0.08} className="card p-7 sm:p-9">
            <p className="leading-8 text-slate-300">
              I&apos;m a Computer Science undergraduate at Sabaragamuwa University of Sri Lanka. My main interest is
              building practical software systems that solve real problems.
            </p>
            <p className="mt-5 leading-8 text-slate-400">
              My current development work spans React, Flutter, Firebase, Node.js, APIs and databases. Alongside
              application development, I&apos;m deliberately building a stronger foundation in Linux, Docker, CI/CD,
              cloud platforms and DevOps practices.
            </p>
          </FadeIn>

          <FadeIn delay={0.14} className="card p-7 sm:p-9">
            <div className="flex items-center gap-3 text-teal-300">
              <Terminal size={20} />
              <span className="font-semibold">Current focus</span>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li>→ Full-stack application development</li>
              <li>→ Cloud & DevOps fundamentals</li>
              <li>→ CI/CD and deployment automation</li>
              <li>→ API design and backend systems</li>
              <li>→ Writing maintainable, documented code</li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section id="experience" className="container-page py-24">
        <FadeIn>
          <p className="mb-2 font-mono text-sm text-teal-300">02 / Experience</p>
          <h2 className="section-title">Professional experience.</h2>
        </FadeIn>
        <FadeIn delay={0.08} className="card mt-10 p-7 sm:p-9">
          <div className="flex flex-col justify-between gap-3 sm:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-white">Digital Marketing Assistant</h3>
              <p className="mt-1 text-teal-300">People&apos;s Bank · 2024</p>
            </div>
            <BriefcaseBusiness className="text-slate-600" />
          </div>
          <ul className="mt-7 list-disc space-y-3 pl-5 leading-7 text-slate-400">
            <li>Supported digital marketing campaigns for banking products and services across online channels.</li>
            <li>Monitored campaign performance and prepared reports to support data-driven decisions.</li>
            <li>Collaborated with the marketing team to create digital content and improve customer engagement.</li>
          </ul>
        </FadeIn>
      </section>

      <section id="projects" className="bg-slate-950/35 py-24">
        <div className="container-page">
          <FadeIn>
            <p className="mb-2 font-mono text-sm text-teal-300">03 / Projects</p>
            <h2 className="section-title">Selected work.</h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              A few projects that demonstrate application development, backend work and my progression toward cloud and DevOps.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project, i) => (
              <HoverCard key={project.name} delay={i * 0.05} className={`card flex flex-col p-7 ${project.featured ? "lg:col-span-2" : ""}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-teal-300">{project.label}</span>
                  {project.featured && <Rocket size={20} className="text-teal-300" />}
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">{project.name}</h3>
                <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">{tech}</span>
                  ))}
                </div>
                <div className="mt-auto flex gap-5 pt-8 text-sm font-semibold">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-300">
                    <Github size={17} /> GitHub
                  </a>
                  <a href={project.demo} className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-300">
                    <ExternalLink size={17} /> Demo
                  </a>
                </div>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="container-page py-24">
        <FadeIn>
          <p className="mb-2 font-mono text-sm text-teal-300">04 / Skills</p>
          <h2 className="section-title">Technical toolkit.</h2>
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <FadeIn key={group.title} delay={i * 0.04} className="card p-6">
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-teal-300" />
                  <h3 className="font-bold text-white">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-lg bg-slate-900 px-3 py-2 text-xs text-slate-300">{item}</span>
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="container-page py-16">
        <FadeIn className="card grid gap-8 p-8 sm:p-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-teal-300">
              Cloud & DevOps
            </p>
            <h3 className="mt-3 text-2xl font-bold">
              Deployment & Automation
            </h3>
          </div>

          <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
            {[
              ["AWS", "EC2, Elastic Beanstalk, RDS and cloud deployment"],
              ["Load Balancing", "Elastic Load Balancing and Auto Scaling"],
              ["Monitoring", "CloudWatch and SNS notifications"],
              ["Docker", "Containerizing applications and microservices"],
              ["Kubernetes", "Container orchestration and persistent volumes"],
              ["Jenkins", "CI/CD pipelines and automated deployments"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-800 bg-slate-950/40 p-4"
              >
                <div className="font-semibold text-slate-200">{title}</div>
                <div className="mt-1 text-sm text-slate-500">{desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section id="contact" className="container-page py-24">
        <FadeIn className="card overflow-hidden p-8 text-center sm:p-14">
          <ShieldCheck className="mx-auto text-teal-300" size={28} />
          <p className="mt-5 font-mono text-sm text-teal-300">05 / Contact</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-white">Let&apos;s build something useful.</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            I&apos;m preparing for software engineering and DevOps internship opportunities. If you&apos;d like to connect,
            feel free to reach out.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:praveenstudy823@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-sky-500 px-6 py-3 font-semibold text-slate-950">
              <Mail size={18} /> Email me
            </a>
            <a href="https://github.com/Praveen-Thathsara" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200">
              <Github size={18} /> GitHub
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-5 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2"><MapPin size={15} /> Sri Lanka</span>
            <span>·</span>
            <span>Computer Science Undergraduate</span>
          </div>
        </FadeIn>
      </section>

      <footer className="border-t border-slate-800/80 py-8">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <span>© 2026 Praveen Thathsara</span>
          <span>Built with Next.js · TypeScript · Tailwind CSS</span>
        </div>
      </footer>
    </main>
  );
}

function Social({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-lg border border-slate-800 p-3 text-slate-400 transition hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-300">
      {icon}
    </a>
  );
}