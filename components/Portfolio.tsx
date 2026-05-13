"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ServerCog,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const linkedInUrl = "https://www.linkedin.com/in/patrick-habchi-a99ab41b8";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Career", "career"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
] as const;

const services = [
  {
    title: "Frontend Development",
    text: "Fast, responsive interfaces with React.js, Redux, HTML, CSS, and JavaScript.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    text: "Reliable services and application logic with Node.js, Express.js, PHP, and Symfony.",
    icon: ServerCog,
  },
  {
    title: "API Integration",
    text: "Clean API communication, third-party integrations, Axios flows, and Redux Thunk state orchestration.",
    icon: Layers3,
  },
  {
    title: "UI/UX Focused Development",
    text: "Practical user experiences with clear layouts, accessible interactions, and polished details.",
    icon: Sparkles,
  },
  {
    title: "Database & System Architecture",
    text: "Structured data models and scalable foundations using MySQL, PostgreSQL, and MongoDB.",
    icon: Database,
  },
];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Suyool",
    location: "Lebanon",
    date: "01/2024 - Present",
    text: "Contributed to internal and customer-facing platforms, developed responsive API-integrated frontends using React.js and Redux, built backend services using PHP Symfony, and integrated financial service APIs.",
  },
  {
    role: "Full Stack Developer",
    company: "Ete-Services",
    location: "Lebanon",
    date: "10/2023 - 01/2024",
    text: "Built frontend interfaces using React.js and Redux, developed backend services with Express.js and Inversify, handled API communication with Axios and Redux Thunk, and implemented secure middleware and validation.",
  },
];

const projects = [
  {
    title: "HR System",
    description:
      "Full stack HR management system with REST APIs, authentication, authorization, role-based access control, OTP password reset, email notifications, pagination, form validation, and leave management.",
    tech: ["React.js", "Symfony", "REST APIs", "RBAC", "MySQL"],
  },
  {
    title: "Custodo Services",
    description: "Responsive company website built with WordPress and Elementor.",
    tech: ["WordPress", "Elementor", "Responsive UI"],
    link: "https://www.custodoservices.com",
  },
  {
    title: "OnPoint Services",
    description: "Responsive business website for a US-based service company using React.",
    tech: ["React", "JavaScript", "Responsive UI"],
    link: "https://www.on-point-services.com",
  },
  {
    title: "Paragon Facility",
    description:
      "Responsive maintenance company website using React with clean UI and enhanced user experience.",
    tech: ["React", "UX", "Business Website"],
    link: "https://www.paragonfacility.com",
  },
];

const skillGroups = [
  ["Frontend", ["React.js", "Redux", "HTML", "CSS", "JavaScript"]],
  ["Backend", ["Node.js", "Express.js", "PHP", "Symfony"]],
  ["Database", ["MySQL", "PostgreSQL", "MongoDB"]],
  ["Tools", ["Git", "Axios", "Redux Thunk", "Microsoft Office"]],
  ["Languages", ["Arabic", "French", "English"]],
] as const;

const education = [
  {
    school: "Lebanese Canadian University",
    degree: "B.A. in Computer Science",
    date: "10/2020 - 07/2023",
    location: "Lebanon",
  },
  {
    school: "Lycee Public Jbeil",
    degree: "Lebanese Baccalaureate",
    date: "10/2016 - 06/2019",
    location: "Lebanon",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-slate-300">{text}</p> : null}
    </motion.div>
  );
}

function MotionCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`glass rounded-2xl ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "Portfolio Contact").trim();
    const message = String(formData.get("message") || "").trim();
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

    window.location.href = `mailto:habchipatrick@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Contact",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/76 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-sm font-black text-slate-950 shadow-glow">
              PH
            </span>
            <span className="text-sm font-semibold text-white sm:text-base">Patrick Habchi</span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
            {navItems.map(([label, target]) => (
              <a
                key={target}
                href={`#${target}`}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="mailto:habchipatrick@gmail.com"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 lg:flex"
          >
            <Mail size={16} />
            Hire Me
          </a>

          <button
            aria-label="Toggle menu"
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-ink px-4 py-4 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map(([label, target]) => (
                <a
                  key={target}
                  href={`#${target}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/10"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>

      <section id="home" className="relative px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="absolute left-1/2 top-24 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-white md:text-7xl">
              Patrick Habchi
            </h1>
            <p className="mt-5 text-xl font-semibold text-cyan-200 md:text-2xl">
              Full Stack Developer / Software Engineer
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I build modern, scalable, and user-focused web applications using React.js,
              Node.js, Symfony, and modern web technologies.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/patrick-habchi-cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 font-bold text-slate-950 shadow-glow transition hover:bg-cyan-200"
              >
                <Download size={19} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/8 px-6 py-3.5 font-bold text-white transition hover:bg-white/14"
              >
                <Mail size={19} />
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 px-6 py-3.5 font-bold text-slate-200 transition hover:border-violet-300/50 hover:text-white"
              >
                View Projects
                <ArrowUpRight size={19} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-300/28 via-violet-500/22 to-emerald-300/18 blur-2xl" />
            <div className="glass relative rounded-[1.75rem] p-4">
              <div className="overflow-hidden rounded-[1.35rem] bg-slate-950">
                <Image
                  src="/patrick-habchi-photo.jpg"
                  alt="Patrick Habchi"
                  width={900}
                  height={1200}
                  priority
                  className="h-[32rem] w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/12 bg-slate-950/86 p-5 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Based in</p>
                    <p className="font-bold text-white">Byblos, Lebanon</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What I Do"
            title="Full-stack delivery with product-minded detail"
            text="Patrick works across React.js, Redux, Node.js, Express.js, PHP Symfony, MySQL, PostgreSQL, and MongoDB to build dependable web applications from interface to infrastructure."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MotionCard key={service.title} className="p-6 transition hover:-translate-y-1 hover:border-cyan-300/35" delay={index * 0.05}>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/12 text-cyan-200">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
                </MotionCard>
              );
            })}
          </div>
        </div>
      </section>

      <section id="career" className="section-pad bg-white/[0.025]">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Professional Career" title="Experience Timeline" />
          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-emerald-300 md:block" />
            <div className="space-y-6">
              {experiences.map((item, index) => (
                <MotionCard key={item.company} className="relative p-6 md:ml-16" delay={index * 0.08}>
                  <span className="absolute -left-[3rem] top-8 hidden h-4 w-4 rounded-full border-4 border-ink bg-cyan-300 md:block" />
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        {item.company}, {item.location}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-white">{item.role}</h3>
                    </div>
                    <span className="w-fit rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-slate-200">
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-5 leading-8 text-slate-300">{item.text}</p>
                </MotionCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Selected Work"
            title="Projects built for real business workflows"
            text="A mix of full-stack systems, service websites, and responsive React experiences."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <MotionCard key={project.title} className="group flex min-h-[20rem] flex-col p-6 transition hover:-translate-y-1 hover:border-violet-300/35" delay={index * 0.05}>
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-400/12 text-violet-200">
                    <BriefcaseBusiness size={24} />
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="rounded-xl border border-white/12 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                  ) : (
                    <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
                      Case Study
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 flex-1 leading-8 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-sm text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-pad bg-white/[0.025]">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Skills" title="Technologies Patrick uses" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {skillGroups.map(([group, skills], index) => (
              <MotionCard key={group} className="p-5" delay={index * 0.04}>
                <h3 className="mb-4 text-lg font-bold text-white">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-800/80 px-3 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Education" title="Academic Background" />
          <div className="grid gap-5 md:grid-cols-2">
            {education.map((item, index) => (
              <MotionCard key={item.school} className="p-6" delay={index * 0.05}>
                <ShieldCheck className="mb-5 text-emerald-200" size={28} />
                <h3 className="text-xl font-bold text-white">{item.school}</h3>
                <p className="mt-2 text-slate-300">{item.degree}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
                  <span>{item.date}</span>
                  <span>{item.location}</span>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Contact
            </p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">Let&apos;s build something useful.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              Reach out for full-stack development roles, freelance collaboration, or project discussions.
            </p>
            <div className="mt-8 space-y-4">
              <a href="mailto:habchipatrick@gmail.com" className="flex items-center gap-4 text-slate-200 transition hover:text-cyan-200">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/12 text-cyan-200">
                  <Mail size={21} />
                </span>
                habchipatrick@gmail.com
              </a>
              <a href="tel:+96170710892" className="flex items-center gap-4 text-slate-200 transition hover:text-cyan-200">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-300/12 text-violet-200">
                  <Phone size={21} />
                </span>
                +961 70 710 892
              </a>
              <a href={linkedInUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-200 transition hover:text-cyan-200">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-300/12 text-sky-200">
                  <Linkedin size={21} />
                </span>
                LinkedIn Profile
              </a>
              <div className="flex items-center gap-4 text-slate-200">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/12 text-emerald-200">
                  <MapPin size={21} />
                </span>
                Byblos, Lebanon
              </div>
            </div>
          </motion.div>

          <MotionCard className="p-5 md:p-7">
            <form className="grid gap-4" onSubmit={handleContactSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <input name="name" className="rounded-xl border border-white/10 bg-white/6 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="Name" type="text" required />
                <input name="email" className="rounded-xl border border-white/10 bg-white/6 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="Email" type="email" required />
              </div>
              <input name="subject" className="rounded-xl border border-white/10 bg-white/6 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="Subject" type="text" required />
              <textarea name="message" className="min-h-40 resize-none rounded-xl border border-white/10 bg-white/6 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="Message" required />
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-200 md:w-fit">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </MotionCard>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
          <p>Patrick Habchi</p>
          <p>Copyright © 2026 Patrick Habchi. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="mailto:habchipatrick@gmail.com" aria-label="Email Patrick" className="transition hover:text-cyan-200">
              <Mail size={18} />
            </a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="Patrick Habchi on LinkedIn" className="transition hover:text-cyan-200">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
