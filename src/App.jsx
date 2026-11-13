
import { useEffect, useState } from "react";
import ParticleBackground from "./ParticleBackground";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness,
  CheckCircle2, Code2, ExternalLink, Github, GraduationCap, Linkedin,
  Mail, Menu, Palette, Send, Sparkles, X, Youtube, ChartNoAxesCombined,
  Layers3, MonitorSmartphone, Database, FileText, MapPin
} from "lucide-react";

const profile = {
  name: "Joti Kumari",
  email: "jotiwaduwani22@gmail.com",
  github: "https://github.com/JotiKumari14",
  linkedin: "https://www.linkedin.com/in/joti-kumari-6a5168358",
  youtube: "https://www.youtube.com/@StoryBox-m2l",
};

const projects = [
  {
    number: "01", title: "Responsive Image Gallery", type: "Frontend Development",
    description: "A responsive image gallery built with HTML and CSS, using Grid and Flexbox layouts to adapt to different screen sizes.",
    stack: ["HTML", "CSS", "Responsive Design"], icon: Layers3,
    link: "https://jotikumari14.github.io/Gallery/index.html", linkLabel: "Live demo",
    github: "https://github.com/JotiKumari14/Gallery", accent: "from-fuchsia-500/25 to-cyan-500/10",
  },
  {
    number: "02", title: "E-Commerce UI/UX Design", type: "UI/UX Design",
    description: "An e-commerce interface concept focused on clear product presentation, intuitive navigation, and consistent visual styling.",
    stack: ["Figma", "Wireframing", "Prototyping"], icon: MonitorSmartphone,
    link: profile.linkedin, linkLabel: "Ask about project", accent: "from-fuchsia-500/20 to-fuchsia-500/10",
  },
  {
    number: "03", title: "Mobile Application UI", type: "UI/UX Design",
    description: "Mobile app screens and interactive prototype explorations shaped by wireframing and user-centered design principles.",
    stack: ["Figma", "UI Design", "Prototyping"], icon: Palette,
    link: profile.linkedin, linkLabel: "Ask about project", accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    number: "04", title: "Expense Tracker Website", type: "Web Development",
    description: "A web interface concept for organizing and tracking expenses with a focus on readability and a straightforward user flow.",
    stack: ["HTML", "CSS", "JavaScript"], icon: ChartNoAxesCombined,
    link: profile.github, linkLabel: "View GitHub", accent: "from-emerald-500/15 to-cyan-500/10",
  },
  {
    number: "05", title: "Bank Management System", type: "Academic Project",
    description: "An academic software project focused on managing basic banking operations and records.",
    stack: ["Programming", "Data Handling", "Problem Solving"], icon: Database,
    link: profile.github, linkLabel: "View GitHub", accent: "from-amber-500/15 to-orange-500/10",
  },
];

const skillGroups = [
  { title: "Frontend Development", icon: Code2, skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"] },
  { title: "UI/UX & Creative", icon: Palette, skills: ["Figma", "Canva", "Wireframing", "Prototyping", "Visual Design", "2D Animation"] },
  { title: "Programming & Data", icon: Database, skills: ["Python", "SQL", "Data Visualization", "Prompt Writing", "Internet Research"] },
  { title: "Professional Tools", icon: BriefcaseBusiness, skills: ["Microsoft Word", "PowerPoint", "GitHub", "Presentation", "Team Collaboration"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <p className="section-label mb-4">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className={`mt-4 max-w-2xl leading-7 text-slate-400 ${centered ? "mx-auto" : ""}`}>{description}</p>}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Education", "#education"], ["Contact", "#contact"]];
  return (
    <header className="sticky top-0 z-50 border-b border-white/[.07] bg-[#05060B]/85 backdrop-blur-xl">
      <nav className="container-wide flex min-h-[72px] items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="font-display text-2xl font-bold tracking-tight" aria-label="Joti Kumari home">
          <span className="gradient-text">JK</span><span className="text-slate-500">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <a className="nav-link" key={href} href={href}>{label}</a>)}
          <a href="#contact" className="primary-button !rounded-lg !px-4 !py-2 text-sm">Let's talk <ArrowUpRight size={16} /></a>
        </div>
        <button className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && <div className="container-wide flex flex-col gap-1 border-t border-white/10 py-3 md:hidden">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5">{label}</a>)}
      </div>}
    </header>
  );
}


function Typewriter({ text, speed = 70, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStartTyping(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;

    const typingTimer = setInterval(() => {
      index += 1;
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(typingTimer);
      }
    }, speed);

    return () => clearInterval(typingTimer);
  }, [text, speed, startTyping]);

  return <>{displayedText}</>;
}




function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="container-wide relative grid min-h-[calc(90vh-72px)] items-center gap-12 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10">
        <div className="pill mb-7"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" /> Open to learning & opportunities</div>
        <p className="mb-3 text-lg text-slate-300">Hello, I'm</p>
        

        <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-[-.055em] text-white sm:text-6xl xl:text-7xl">
          <Typewriter text="Joti Kumari." speed={120} delay={500} />
          <span className="animate-pulse text-cyan-300">|</span>
        </h1>


        

        <h2 className="mt-5 max-w-xl font-display text-2xl font-semibold leading-snug text-slate-200 sm:text-3xl">
          <Typewriter text="Frontend Developer · UI/UX Designer"speed={55}delay={2200}/>
        </h2>


        <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          Computer Science student who blends code and creativity to build responsive web experiences and thoughtful digital interfaces.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="primary-button" href="#projects">Explore projects <ArrowRight size={17} /></a>
          <a className="secondary-button" href="#contact">Get in touch <Mail size={17} /></a>
        </div>
        <div className="mt-9 flex items-center gap-4 text-slate-400">
          <a className="rounded-lg border border-white/10 p-2.5 transition hover:border-fuchsia-400/50 hover:text-white" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={19} /></a>
          <a className="rounded-lg border border-white/10 p-2.5 transition hover:border-fuchsia-400/50 hover:text-white" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={19} /></a>
          <a className="rounded-lg border border-white/10 p-2.5 transition hover:border-fuchsia-400/50 hover:text-white" href={profile.youtube} target="_blank" rel="noreferrer" aria-label="YouTube channel"><Youtube size={19} /></a>
          <span className="h-7 w-px bg-white/10" />
          <span className="text-sm">Hyderabad, Pakistan</span>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: reduceMotion ? 1 : .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, delay: .12 }} className="relative mx-auto w-full max-w-[470px]">
        <div className="absolute inset-10 rounded-full bg-fuchsia-600/20 blur-[80px]" />
        <div className="glass-card relative overflow-hidden rounded-[30px] p-5 sm:p-7">
          

          <div className="mb-7 flex items-center">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
          </div>


          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/[.06] bg-[#0b1023]">
            <div className="absolute h-[74%] w-[74%] rounded-full border border-fuchsia-300/20" />
            <div className="absolute h-[57%] w-[57%] rounded-full border border-cyan-300/20" />
            <div className="absolute h-[40%] w-[40%] rounded-full bg-gradient-to-br from-fuchsia-500/25 to-cyan-400/10 blur-xl" />
            {!reduceMotion && <motion.div className="absolute h-[82%] w-[82%] rounded-full border border-dashed border-fuchsia-300/30" animate={{ rotate: 360 }} transition={{ duration: 36, repeat: Infinity, ease: "linear" }} />}
            
            
            


            
            <div className="group/laptop relative z-10 w-[82%] max-w-[290px] transition-all duration-500 [perspective:1000px] hover:-translate-y-2">
             {/* Laptop screen */}
             <div className="relative overflow-hidden rounded-t-xl border-[5px] border-slate-500/70 bg-[#090d1c] p-2 shadow-[0_0_45px_rgba(0,207,255,0.2)] transition-all duration-500 group-hover/laptop:border-cyan-300/70 group-hover/laptop:shadow-[0_0_65px_rgba(0,207,255,0.35)]">

              {/* Screen top bar */}
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
               <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
               </div>
               <span className="font-mono text-[9px] text-cyan-300">joti-portfolio.jsx</span>
              </div>

              {/* Code editor screen */}
              <div className="min-h-[135px] rounded-md bg-[#10182c] p-3 font-mono text-[10px] leading-5 sm:text-xs">
               <p className="text-fuchsia-300">const developer = {"{"}</p>
               <p className="pl-3 text-slate-400">
                name: <span className="text-cyan-300">"Joti Kumari"</span>,
               </p>
               <p className="pl-3 text-slate-400">
                role: <span className="text-emerald-300">"Frontend Developer"</span>,
               </p>
               <p className="pl-3 text-slate-400">
                skills: <span className="text-amber-300">["React", "UI/UX"]</span>
               </p>
               <p className="text-fuchsia-300">{"}"}</p>
               <p className="mt-2 text-cyan-300">
                <span className="text-fuchsia-300">{"// "}</span>
                Turning ideas into reality ✨
              </p>
            </div>
          </div>

          {/* Laptop keyboard/base */}
          <div className="relative mx-[-5%] h-3 rounded-b-[50%] border border-slate-400/40 bg-gradient-to-b from-slate-300 via-slate-500 to-slate-700 shadow-[0_12px_20px_rgba(0,0,0,0.5)]">
           <div className="mx-auto h-1 w-[25%] rounded-b-md bg-slate-800/80" />
          </div>

          {/* Neon reflection */}
          <div className="pointer-events-none absolute -inset-5 -z-10 rounded-full bg-cyan-400/10 opacity-50 blur-2xl transition-opacity duration-500 group-hover/laptop:opacity-100" />
        </div>





           


            <div className="absolute left-4 top-[18%] z-20 rounded-xl border border-white/10 bg-[#151a31]/95 p-3 shadow-xl sm:left-6">
             <Code2 className="text-fuchsia-300" size={21} />
             <span className="mt-1 block text-xs text-slate-300">Build</span>
            </div>

           

            <div className="absolute bottom-[25%] right-3 z-30 rounded-xl border border-white/10 bg-[#151a31]/95 p-2.5 shadow-xl sm:bottom-[22%] sm:right-6 sm:p-3">
              <Palette className="text-cyan-300" size={21} />
              <span className="mt-1 block text-xs text-slate-300">Design</span>
            </div>


            <Sparkles className="absolute right-[18%] top-[16%] z-10 text-fuchsia-300" size={20} />

            <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl border border-white/[.07] bg-[#0b1023]/95 px-4 py-3 backdrop-blur">
             <p className="font-mono text-xs text-slate-500">const mindset =</p>
             <p className="mt-1 font-mono text-sm text-cyan-200">"Learn · Design · Build"</p>
            </div>



          
          </div>
          

          
          <div className="mt-5 grid grid-cols-3 gap-3">
            <TiltCard number="01" title="Creative" />
            <TiltCard number="02" title="Curious" />
            <TiltCard number="03" title="User-first" />
          </div>


        </div>
        <div className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#11172c] px-4 py-3 shadow-xl sm:flex"><span className="h-2 w-2 rounded-full bg-cyan-400" /><span className="text-xs text-slate-300">Always learning</span></div>
      </motion.div>
      <a href="#about" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-slate-500 transition hover:text-slate-300 lg:flex"><ArrowDown size={15} /> Scroll to explore</a>
    </section>
  );
}



function TiltCard({ number, title }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setRotation({
      x: (0.5 - y) * 14,
      y: (x - 0.5) * 14,
    });
  };

  const resetCard = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetCard}
      className="group relative rounded-xl border border-cyan-300/20 bg-gradient-to-br from-[#151a31] via-[#10172c] to-[#21132f] p-4 text-center shadow-[0_8px_30px_rgba(0,207,255,0.08)] transition-shadow duration-300 hover:border-fuchsia-300/50 hover:shadow-[0_12px_35px_rgba(0,207,255,0.2)]"
      style={{
        transform: `perspective(700px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: rotation.x === 0 && rotation.y === 0
          ? "transform 500ms ease"
          : "transform 100ms ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/10 via-transparent to-fuchsia-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div style={{ transform: "translateZ(25px)" }} className="relative">
        <p className="font-mono text-sm font-semibold text-fuchsia-300">
          {number}
        </p>

        <p className="mt-2 text-sm font-medium text-white sm:text-base">
          {title}
        </p>
      </div>
    </div>
  );
}

const card3D = {
  transformPerspective: 900,
  transformStyle: "preserve-3d",
};

const cardHover = {
  y: -7,
  rotateX: 4,
  rotateY: -4,
  scale: 1.02,
  boxShadow: "0 15px 35px rgba(0, 207, 255, 0.15)",
  borderColor: "rgba(103, 232, 249, 0.45)",
};






function About() {
  return (
    <section id="about" className="section-space border-y border-white/[.05] bg-white/[.015]">
      <div className="container-wide grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
      


        

        <div>
          <SectionHeading
            eyebrow="A little about me"
            title={
             <>
              Curious mind.
              <br />
              <span className="gradient-text">Creative approach.</span>
             </>
            }
          />

          <motion.div
            whileHover={cardHover}
            style={card3D}
            className="glass-card inline-flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 transition-colors duration-300"
          >
            <GraduationCap className="text-fuchsia-300" size={24} />

            <div>
              <p className="text-sm font-semibold text-white">
                 BS Computer Science
              </p>
              <p className="mt-1 text-xs text-slate-400">
                SZABIST · Hyderabad
              </p>
            </div>
          </motion.div>
        </div>
        


        <div className="space-y-5 text-base leading-8 text-slate-400">
          <p>I'm a Computer Science student at Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST), Hyderabad, with a strong interest in frontend development, graphic design, UI/UX, and digital content creation.</p>
          <p>I enjoy turning ideas into responsive interfaces, interactive prototypes, and visually engaging designs. My academic projects have helped me practice problem-solving, visual communication, research, and collaborative work.</p>
          <p>I'm looking for opportunities to keep learning, gain practical industry experience, and contribute to useful digital products where good design and reliable implementation work together.</p>
          
          
          
          <div className="grid grid-cols-2 gap-3 pt-3 sm:grid-cols-3">
            {[
              ["3.7", "CGPA"],
              ["2023–Present", "BSCS"],
              ["3", "Languages"],
            ].map(([v, l]) => (
              <TiltCard key={l} number={v} title={l} />
            ))}
          </div>

          


          <p className="text-sm text-slate-500">Languages: English · Urdu · Sindhi</p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="container-wide">
        <SectionHeading eyebrow="What I work with" title={<>Skills that connect <span className="gradient-text">design & code.</span></>} description="A growing toolkit for building accessible interfaces, exploring ideas, and creating digital experiences." />
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, skills }, i) => <motion.div key={title}variants={fadeUp}initial="hidden"whileInView="visible"viewport={{ once: true, amount: .2 }}whileHover={cardHover}style={card3D}className="glass-card rounded-2xl border border-white/10 p-6 transition-colors duration-300 sm:p-7">
            <div className="mb-5 flex items-center gap-3"><div className="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-3"><Icon className="text-fuchsia-300" size={22} /></div><h3 className="font-display text-lg font-semibold text-white">{title}</h3></div>
            <div className="flex flex-wrap gap-2">{skills.map(s => <span key={s} className="rounded-lg border border-white/[.07] bg-white/[.035] px-3 py-2 text-sm text-slate-300">{s}</span>)}</div>
          </motion.div>)}
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-500">I am passionate about combining creativity and technology to build modern, responsive, and user-friendly digital experiences. With skills in Frontend Development, UI/UX Design, and Graphic Design, I enjoy turning ideas into attractive and functional designs. I love learning new technologies, exploring creative solutions, and improving my skills through practical projects.</p>
      </div>
    </section>
  );
}

function ProjectVisual({ project }) {
  const Icon = project.icon;
  return <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}>
    <div className="absolute h-40 w-40 rounded-full border border-white/10" />
    <div className="absolute h-28 w-28 rounded-full border border-white/10" />
    <div className="relative rounded-2xl border border-white/15 bg-[#0b1023]/75 p-5 shadow-2xl backdrop-blur"><Icon size={42} strokeWidth={1.3} className="text-fuchsia-200" /></div>
    <span className="absolute left-4 top-4 font-mono text-xs text-slate-300/60">PROJECT_{project.number}</span>
    <ArrowUpRight className="absolute right-4 top-4 text-white/60" size={18} />
  </div>;
}

function Projects() {
  return (
    <section id="projects" className="section-space border-y border-white/[.05] bg-white/[.015]">
      <div className="container-wide">
        <SectionHeading eyebrow="Selected work" title={<>Ideas made <span className="gradient-text">visible.</span></>} description="A selection of academic and personal projects across frontend development and interface design. Project descriptions reflect the work shared in my resume." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => <motion.article key={p.number} variants={fadeUp}initial="hidden"whileInView="visible"viewport={{ once: true, amount: .15 }}transition={{ delay: (i % 3) * .07 }}whileHover={cardHover}style={card3D}className="glass-card group flex flex-col overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300">
            <ProjectVisual project={p} />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[.13em] text-fuchsia-300">{p.type}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{p.stack.map(s => <span key={s} className="rounded-md bg-white/[.05] px-2.5 py-1.5 text-xs text-slate-400">{s}</span>)}</div>
              <div className="mt-6 flex flex-wrap gap-4 border-t border-white/[.07] pt-4">
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-fuchsia-300">{p.linkLabel} <ExternalLink size={15} /></a>
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">Code <Github size={15} /></a>}
              </div>
            </div>
          </motion.article>)}
        </div>
        <div className="mt-8 flex justify-center"><a href={profile.github} target="_blank" rel="noreferrer" className="secondary-button">Explore GitHub <ArrowUpRight size={16} /></a></div>
      </div>
    </section>
  );
}

function Education() {
  const entries = [
    { date: "2023 — Present", title: "BS Computer Science", place: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST), Hyderabad", detail: "CGPA: 3.7 · Academic software, frontend and UI/UX projects." },
    { date: "Practical learning", title: "Frontend & UI/UX projects", place: "Academic coursework and internship experience", detail: "Web interfaces, Figma prototypes, social media graphics, layouts, and responsive design practice." },
  ];
  return (
    <section id="education" className="section-space">
      <div className="container-wide">
        <SectionHeading eyebrow="My journey" title={<>Learning by <span className="gradient-text">doing.</span></>} description="My academic foundation and hands-on design and development experience." />
        
        
        
        <div className="relative ml-2 space-y-6 border-l border-fuchsia-400/25 pl-7 sm:ml-4 sm:pl-9">
          {entries.map((e) => (
            <motion.div
              key={e.title}
              whileHover={cardHover}
              style={card3D}
              className="relative glass-card rounded-2xl border border-white/10 p-5 transition-colors duration-300 sm:p-7"
            >
              <span className="absolute -left-[35px] top-7 h-3 w-3 rounded-full border-2 border-fuchsia-300 bg-[#05060B] shadow-[0_0_15px_rgba(255,36,184,.42)] sm:-left-[47px]" />

              <p className="text-xs font-semibold uppercase tracking-[.14em] text-fuchsia-300">
                {e.date}
              </p>

              <h3 className="mt-3 font-display text-xl font-semibold text-white">
                {e.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                {e.place}
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {e.detail}
              </p>
            </motion.div>
          ))}
        </div>

        
      
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              name: "Introduction to HTML and CSS",
              provider: "IBM SkillsBuild",
              date: "5 August 2026",
            },
            {
              name: "Introduction to Artificial Intelligence",
              provider: "IBM",
              date: "9 July 2026",
            },
            {
              name: "Google AI Essentials",
              provider: "Google",
              date: "16 October 2026",
            },
            {
              name: "Google Prompt Engineering Specialization",
              provider: "Google / Coursera",
              date: "5 October 2025",
            },
            {
              name: "Power BI for Beginners",
              provider: "Simplilearn",
              date: "20 June 2026",
            },
          ].map((certificate, index) => (
            <div
              key={index}
              className="rounded-xl border border-cyan-400/20 bg-white/[.025] p-5 transition duration-300 hover:border-fuchsia-400/50 hover:bg-white/[.05]"
            >
              <div className="flex items-start gap-3">
                <FileText
                  className="mt-1 shrink-0 text-fuchsia-300"
                  size={22}
                />
                <div>
                  <h3 className="font-semibold text-white">
                    {certificate.name}
                  </h3>
                  <p className="mt-2 text-sm text-cyan-300">
                    {certificate.provider}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Completed: {certificate.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>




      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // Honeypot field for simple bot filtering.
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey || [serviceId, templateId, publicKey].some(v => v.startsWith("your_"))) {
      setStatus({ type: "error", message: "The contact form is not configured yet. Please email me directly at jotiwaduwani22@gmail.com." });
      return;
    }
    setSending(true);
    setStatus({ type: "idle", message: "" });
    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      setStatus({ type: "success", message: "Thanks for reaching out! Your message was sent successfully." });
      form.reset();
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus({ type: "error", message: "Sorry, your message could not be sent. Please try again or email me directly." });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section-space border-t border-white/[.05] bg-white/[.015]">
      <div className="container-wide">
        <SectionHeading eyebrow="Let's connect" title={<>Have an idea? Let's <span className="gradient-text">talk.</span></>} description="For internships, collaborations, project discussions, or learning opportunities, feel free to send me a message." />
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-4">
            <a href={`mailto:${profile.email}`} className="glass-card flex items-center gap-4 rounded-2xl p-5 transition hover:border-fuchsia-300/30">
              <span className="rounded-xl bg-fuchsia-400/10 p-3 text-fuchsia-300"><Mail size={22} /></span>
              <span className="min-w-0"><span className="block text-sm text-slate-400">Email me</span><span className="mt-1 block break-all font-medium text-white">{profile.email}</span></span><ArrowUpRight className="ml-auto shrink-0 text-slate-500" size={18} />
            </a>
            <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
              <span className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300"><MapPin size={22} /></span>
              <span><span className="block text-sm text-slate-400">Based in</span><span className="mt-1 block font-medium text-white">Hyderabad, Pakistan</span></span>
            </div>
            <div className="flex gap-3 pt-2">
              <a className="secondary-button !p-3" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
              <a className="secondary-button !p-3" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
              <a className="secondary-button !p-3" href={profile.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={19} /></a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="name">Your name</label><input className="field" id="name" name="from_name" autoComplete="name" placeholder="Enter your name" required maxLength={100} /></div>
              <div><label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="email">Email address</label><input className="field" id="email" name="reply_to" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></div>
            </div>
            <div className="mt-5"><label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="subject">Subject</label><input className="field" id="subject" name="subject" placeholder="What would you like to discuss?" required maxLength={150} /></div>
            <div className="mt-5"><label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="message">Message</label><textarea className="field min-h-36 resize-y" id="message" name="message" placeholder="Write your message here..." required minLength={10} maxLength={4000} /></div>
            <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex="-1" autoComplete="off" /></div>
            <button className="primary-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto" type="submit" disabled={sending}>{sending ? "Sending..." : "Send message"} <Send size={16} /></button>
            <div className="mt-4" aria-live="polite" role="status">
              {status.message && <p className={`flex items-start gap-2 text-sm leading-6 ${status.type === "success" ? "text-emerald-300" : "text-amber-200"}`}>{status.type === "success" && <CheckCircle2 size={17} className="mt-0.5 shrink-0" />}{status.message}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="border-t border-white/[.07] py-7"><div className="container-wide flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left"><a href="#home" className="font-display text-lg font-bold text-white">JK<span className="text-fuchsia-300">.</span></a><p className="text-xs text-slate-500">Designed & built by Joti Kumari · {new Date().getFullYear()}</p><a href="#home" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white">Back to top <ArrowDownRight className="rotate-[-135deg]" size={14} /></a></div></footer>;
}



export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#05060B]">
      {/* Animated background */}
      <ParticleBackground />

      {/* Website content */}
      <div className="relative z-10">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-black"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
