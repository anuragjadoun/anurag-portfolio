import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Youtube,
  ExternalLink, Code2, Terminal, Database, Layers3, Sparkles, Mail,
  Download, BriefcaseBusiness, GraduationCap, FileText, Menu, Globe
} from "lucide-react";
import projects from "./data/projects";
import "./styles.css";

const resumeUrl = "/Anurag_Jadoun_Resume.pdf";
const socials = [
  { label: "GitHub", href: "https://github.com/anuragjadoun", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anuragsinghjadoun", Icon: Linkedin },
  { label: "X / Twitter", href: "https://x.com/anuragjadoun17", Icon: Globe },
  { label: "YouTube", href: "https://youtube.com/@aliienindisguisee", Icon: Youtube },
];

const skills = [
  { title: "Languages", icon: Code2, items: ["Java", "C++", "C", "JavaScript", "C#"] },
  { title: "Backend", icon: Terminal, items: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "REST APIs", "ASP.NET Core MVC"] },
  { title: "Frontend", icon: Layers3, items: ["React.js", "HTML", "CSS", "Bootstrap", "jQuery"] },
  { title: "Data & Tools", icon: Database, items: ["MySQL", "Git", "GitHub", "Postman", "Docker", "Kafka", "Redis", "Spring AI", "Gemini API"] },
];

function SectionTitle({ eyebrow, number, children }) {
  return <div className="section-heading reveal">
    <div className="section-kicker"><span>{number}</span><p>{eyebrow}</p></div>
    <h2>{children}</h2>
    <div className="heading-line" />
  </div>;
}

function ProjectCard({ project, index }) {
  return <article className={`project-card ${project.theme} reveal`} style={{ "--delay": `${index * 90}ms` }}>
    <div className="project-topline"><span>PROJECT / {String(index + 1).padStart(2, "0")}</span><span className="project-mark"><ArrowUpRight size={19}/></span></div>
    <div className="project-art">
      <div className="art-rings"/><div className="art-grid"/><span className="project-symbol">{project.symbol}</span>
      <span className="art-caption"><i/> BUILT WITH INTENTION</span>
    </div>
    <div className="project-info">
      <p className="project-type">{project.type}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tech-tags">{project.technologies.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="project-actions">
        {project.liveUrl ? <a className="project-button project-button-main" href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={16}/> Live demo</a> : <span className="project-button project-disabled"><Code2 size={16}/> Demo unavailable</span>}
        <a className="project-button" href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a>
      </div>
    </div>
  </article>;
}

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(node => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <main>
    <header className="site-header">
      <nav className="nav shell">
        <a href="#home" className="brand" aria-label="Anurag home">
          <img src="/anurag-logo.jpg" alt="Anurag's pixel-art logo" className="brand-avatar"/>
          <span>Anurag<span className="brand-muted">.dev</span></span>
        </a>
        <div className="nav-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div>
        <a href={resumeUrl} className="nav-resume" download><Download size={15}/> Resume</a>
      </nav>
    </header>

    <section className="hero shell" id="home">
      <div className="hero-copy">
        <div className="availability"><span className="status-dot"/> OPEN TO OPPORTUNITIES</div>
        <p className="overline">SOFTWARE DEVELOPER · PUNE, INDIA</p>
        <h1>Building useful<br/>things with <span>code.</span></h1>
        <p className="hero-description">I’m Anurag Singh Jadoun — a software developer focused on Java, Spring Boot, REST APIs, and full-stack applications. I enjoy learning new technologies and turning ideas into working products.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore projects <ArrowDownRight size={17}/></a>
          <a className="button button-secondary" href={resumeUrl} download><Download size={16}/> Download resume</a>
        </div>
        <div className="hero-socials">{socials.map(({label, href, Icon}) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><Icon size={18}/></a>)}</div>
      </div>
      <div className="hero-visual">
        <div className="visual-glow"/>
        <div className="portrait-frame"><img src="/anurag-logo.jpg" alt="Anurag's pixel-art avatar"/><span className="portrait-corner corner-tl"/><span className="portrait-corner corner-tr"/><span className="portrait-corner corner-bl"/><span className="portrait-corner corner-br"/></div>
        <div className="float-card float-card-top"><span className="float-icon"><Code2 size={17}/></span><span><strong>Build. Learn.</strong><small>Repeat.</small></span></div>
        <div className="float-card float-card-bottom"><span className="online-pulse"/><span><strong>Currently exploring</strong><small>Generative AI + Backend</small></span></div>
        <span className="hero-coordinate">27° N · 77° E</span>
      </div>
      <a href="#about" className="scroll-prompt"><span className="scroll-mouse"><i/></span> SCROLL TO EXPLORE <ArrowDown size={13}/></a>
    </section>

    <section className="section shell about-section" id="about">
      <SectionTitle eyebrow="A LITTLE ABOUT ME" number="01">About me <span className="accent">✳</span></SectionTitle>
      <div className="about-layout">
        <div className="about-copy reveal">
          <p className="about-statement">I like building software that is <span>useful, reliable, and thoughtfully made.</span></p>
          <p>I’m a PG-DAC graduate with hands-on experience in Java, Spring Boot, REST APIs, SQL, database integration, and full-stack application development. I’m also learning to bring Generative AI capabilities into practical applications.</p>
          <div className="resume-panel"><div className="resume-icon"><FileText size={23}/></div><div className="resume-panel-copy"><strong>My resume</strong><span>Education, technical skills & projects · PDF</span></div><a href={resumeUrl} download aria-label="Download resume"><Download size={18}/></a></div>
          <div className="about-social-row">{socials.map(({label, href, Icon}) => <a href={href} key={label} target="_blank" rel="noreferrer"><Icon size={15}/>{label}</a>)}</div>
        </div>
        <div className="timeline reveal">
          <article className="timeline-entry"><span className="timeline-node"><GraduationCap size={17}/></span><p className="timeline-date">AUG 2025 — FEB 2026</p><h3>Post Graduate Diploma in Advanced Computing <span>(PG-DAC)</span></h3><p className="timeline-place">C-DAC, Pune <b>·</b> Grade A</p><p>Completed an intensive 900+ hour curriculum in advanced computing, Java, full-stack development, databases, and software engineering.</p></article>
          <article className="timeline-entry"><span className="timeline-node"><GraduationCap size={17}/></span><p className="timeline-date">AUG 2021 — AUG 2025</p><h3>B.Tech in Computer Science & Engineering</h3><p className="timeline-place">Dr. A.P.J. Abdul Kalam Technical University <b>·</b> 81.4%</p><p>Built a foundation in programming, data structures, databases, and core computer science concepts.</p></article>
          <article className="timeline-entry"><span className="timeline-node"><BriefcaseBusiness size={17}/></span><p className="timeline-date">CURRENT FOCUS</p><h3>Full-stack development & Generative AI</h3><p>Building projects with Java, Spring Boot, React, and AI APIs while strengthening software design and backend development skills.</p></article>
        </div>
      </div>
    </section>

    <section className="section projects-section" id="projects">
      <div className="shell">
        <SectionTitle eyebrow="A FEW THINGS I’VE BUILT" number="02">Featured projects <span className="accent">↗</span></SectionTitle>
        <div className="projects-intro reveal"><p>Real projects, practical learning, and ideas brought to life.</p><span>{String(projects.length).padStart(2, "0")} PROJECTS</span></div>
        <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index}/>)}</div>
        <div className="all-projects reveal"><span>More code, experiments, and repositories</span><a href="https://github.com/anuragjadoun" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={15}/></a></div>
      </div>
    </section>

    <section className="section shell skills-section" id="skills">
      <SectionTitle eyebrow="TOOLS I WORK WITH" number="03">Skills & technologies <span className="accent">⌘</span></SectionTitle>
      <p className="skills-intro reveal">A growing toolkit for building full-stack and AI-powered applications.</p>
      <div className="skills-grid">{skills.map(({title, icon: Icon, items}, index) => <article className="skill-card reveal" key={title} style={{"--delay": `${index * 70}ms`}}><div className="skill-card-top"><span className="skill-icon"><Icon size={20}/></span><span className="skill-count">0{index+1}</span></div><h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
      <div className="core-skills reveal"><span>CORE CONCEPTS</span><p>Object-Oriented Programming <i/> Data Structures & Algorithms <i/> RESTful API Design</p></div>
    </section>

    <section className="contact-section" id="contact"><div className="shell contact-layout">
      <div className="contact-copy reveal"><p className="overline"><span className="status-dot"/> LET’S CONNECT</p><h2>Let’s make<br/><span>something meaningful.</span></h2><p>I’m open to software development opportunities, collaborations, and conversations about technology.</p><a className="button button-primary" href="mailto:anuragjadoun024@gmail.com"><Mail size={17}/> anuragjadoun024@gmail.com <ArrowUpRight size={15}/></a></div>
      <div className="contact-links reveal"><p className="contact-label">FIND ME ONLINE</p>{socials.map(({label, href, Icon}) => <a href={href} key={label} target="_blank" rel="noreferrer"><span className="contact-social-icon"><Icon size={19}/></span><span>{label}</span><ArrowUpRight size={16}/></a>)}</div>
    </div></section>

    <footer className="footer shell"><a href="#home" className="brand"><img src="/anurag-logo.jpg" alt="" className="brand-avatar"/><span>Anurag<span className="brand-muted">.dev</span></span></a><p>Made with curiosity and code.</p><a href={resumeUrl} download className="footer-resume"><Download size={14}/> Download resume</a><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} Anurag Singh Jadoun</span></footer>
  </main>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);