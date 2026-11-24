import { ArrowDownRight, ArrowUpRight, Asterisk, Github, Linkedin, Menu, Moon, MoveUpRight, Sun, X } from 'lucide-react'
import { useState } from 'react'

// Personalize these values with your own details and profile URLs.
const profile = {
  name: 'Srinivas',
  email: 'srinivaskrishna2404@gmail.com',
  github: 'https://github.com/Srinivas-krishna',
  linkedin: 'https://www.linkedin.com/in/srinivas-krishna-a97a0826b/',
}

const projects = [
  { number: '01', name: 'Taskflow', type: 'Task manager · Web app', description: 'A task planner to organize priorities, track progress, and keep daily work focused.', year: '2026', className: 'forma', symbol: 'task', note: 'Plan your day. Find your focus.' },
  { number: '02', name: 'Ticketboard', type: 'Ticket management · Kanban', description: 'A Kanban ticket tracker that moves work from backlog through active development to done.', year: '2026', className: 'goodgoods', symbol: 'board', note: 'Every ticket, moving forward.' },
  { number: '03', name: 'PhishGuard', type: 'Machine learning · Python', description: 'A Python ML classifier that analyzes URL features to identify likely phishing links.', year: '2026', className: 'daybreak', symbol: 'scan', note: 'Spot suspicious links before you click.' },
]

const skills = ['React & TypeScript', 'Web development', 'Python', 'Machine learning', 'ML systems', 'UI engineering', 'Computer science']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portfolio-theme') === 'dark')
  const emailHref = `mailto:${profile.email}?subject=${encodeURIComponent('Let’s make something great')}`

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className={darkMode ? 'site dark-mode' : 'site'}>
      <header className="header shell">
        <a className="brand" href="#home" aria-label={`${profile.name} home`}><span className="brand-mark">G.S.K<span className="brand-period">.</span></span></a>
        <div className="header-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={16} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={16} /></a></div>
        <button className="theme-toggle" onClick={() => setDarkMode(current => { const next = !current; localStorage.setItem('portfolio-theme', next ? 'dark' : 'light'); return next })} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>{darkMode ? <Sun size={16} /> : <Moon size={16} />}<span>{darkMode ? 'LIGHT' : 'DARK'}</span></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" className="nav-contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={13} /></a>
        </nav>
      </header>

      <section className="hero shell" id="home">
        <div className="hero-top"><span className="eyebrow"><Asterisk size={13} /> COMPUTER SCIENCE ENGINEER · WEB DEVELOPER</span></div>
        <h1>Thoughtful digital<br /><span className="hero-second">things, <em>beautifully</em> made<span className="period">.</span></span></h1>
        <div className="hero-bottom"><p className="hero-copy">I’m {profile.name}, a Computer Science Engineering graduate and web developer who builds thoughtful digital experiences.</p></div>
        <div className="hero-rule"><span>DESIGN WITH INTENTION</span><span className="rule-symbol">✳</span><span>BUILD WITH CARE</span></div>
      </section>

      <section className="work-section" id="work">
        <div className="shell">
          <div className="section-heading"><div><span className="eyebrow muted"><span className="tiny-dot" /> PROJECTS</span><h2>A few things<br />I’ve <em>put into</em> the world.</h2></div><span className="section-count">( 01 — 03 )</span></div>
          <div className="project-list">{projects.map((project) => <article className="project" key={project.number}><a className={`project-art ${project.className}`} href={emailHref} aria-label={`Ask about ${project.name}`}><div className="art-grain" /><span className="art-index">PROJECT {project.number}</span><span className="art-note">{project.note}</span><div className={`app-preview preview-${project.className}`} aria-hidden="true">
            {project.className === 'forma' && <><div className="preview-top"><span className="preview-logo"><i /> Taskflow</span><span className="preview-avatar">S</span></div><div className="task-layout"><aside className="task-sidebar"><b>WORKSPACE</b><span className="active-nav">◫ &nbsp; My tasks</span><span>▦ &nbsp; Projects</span><span>⚙ &nbsp; Settings</span><small>YOUR LISTS</small><span>◉ &nbsp; Personal</span><span>◉ &nbsp; Work</span></aside><div className="task-main"><div className="task-greeting">Good morning, Srinivas <span>✳</span></div><div className="task-subtitle">Here’s your focus for today.</div><div className="task-stats"><span><b>08</b><small>TO DO</small></span><span><b>03</b><small>IN PROGRESS</small></span><span><b>12</b><small>COMPLETED</small></span></div><div className="task-section-title">Today <small>VIEW ALL →</small></div><div className="task-row"><i className="check" /><span>Review project requirements<small>Product launch · 10:30 AM</small></span><b className="priority">HIGH</b></div><div className="task-row"><i className="check done" /><span>Update design system<small>Website refresh · 1:00 PM</small></span><b className="priority medium">MED</b></div><div className="task-row"><i className="check" /><span>Prepare sprint notes<small>Team planning · 3:30 PM</small><b className="priority low">LOW</b></span></div></div></div></>}
            {project.className === 'goodgoods' && <><div className="board-top"><span className="board-brand">▦ &nbsp; Ticketboard</span><span className="board-team">Engineering team　　＋ Invite</span></div><div className="board-title">Sprint tickets <small>BOARD · 12 TICKETS</small></div><div className="kanban"><div className="kanban-lane"><div className="lane-title"><i className="lane-gray" /> Not completed <b>3</b><span>＋</span></div><div className="ticket-card"><small>WEB-104</small><b>Update account settings page</b><span>◉ &nbsp; Product · ●●●</span></div><div className="ticket-card"><small>API-082</small><b>Add password reset endpoint</b><span>◉ &nbsp; Backend · ●●○</span></div></div><div className="kanban-lane"><div className="lane-title"><i className="lane-amber" /> Ongoing <b>2</b><span>＋</span></div><div className="ticket-card"><small>WEB-099</small><b>Build responsive dashboard</b><span>◉ &nbsp; Frontend · ●●○</span></div><div className="ticket-card"><small>DSN-026</small><b>Polish navigation states</b><span>◉ &nbsp; Design · ●●●</span></div></div><div className="kanban-lane"><div className="lane-title"><i className="lane-green" /> Completed <b>7</b><span>＋</span></div><div className="ticket-card"><small>WEB-091</small><b>Set up project structure</b><span>◉ &nbsp; Frontend · ●●○</span></div><div className="ticket-card"><small>API-076</small><b>Configure auth middleware</b><span>◉ &nbsp; Backend · ●●●</span></div></div></div></>}
            {project.className === 'daybreak' && <><div className="scan-top"><span className="scan-logo">◉ &nbsp; PhishGuard</span><span className="scan-status"><i /> SYSTEM ACTIVE</span></div><div className="scan-main"><div className="scan-copy"><small>URL THREAT ANALYSIS · ML POWERED</small><b>Every link has<br />a <em>story.</em> Know it<br />before you click.</b><span>Python-powered detection for a safer web.</span></div><div className="scan-widget"><span>URL SCAN</span><div className="scan-url">https://example.com <b>↵</b></div><div className="scan-result"><span className="scan-shield">✓</span><span><b>Looks safe</b><small>Low risk · Confidence 98.4%</small></span><i>●</i></div><div className="scan-features"><span><b>01</b> URL structure</span><span><b>02</b> Domain age</span><span><b>03</b> ML classification</span></div></div></div><div className="scan-footer"><span>MODEL STATUS &nbsp; <b>● &nbsp; ONLINE</b></span><span>PYTHON · SCIKIT-LEARN</span><span>THREAT INTELLIGENCE ↗</span></div></>}
          </div></a><div className="project-meta"><div className="project-title"><span className="project-number">{project.number}</span><div><h3>{project.name}</h3><p className="project-description">{project.description}</p></div></div><span className="project-type">{project.type}</span><span className="project-year">{project.year}</span></div></article>)}</div>
          <div className="work-end"><span>THAT’S THE SHORT LIST.</span><a href={emailHref}>Have something in mind? <ArrowUpRight size={14} /></a></div>
        </div>
      </section>

      <section className="about-section shell" id="about">
        <div className="about-label"><span className="eyebrow muted"><span className="tiny-dot" /> A LITTLE ABOUT ME</span><span className="about-asterisk">✳</span></div>
        <div className="about-content"><h2>Computer science<br />meets <em>curiosity.</em></h2><div className="about-lower"><p className="about-text">I’m a Computer Science Engineering graduate from SASTRA University and a web developer who loves building useful systems. I’m passionate about computer science—from solving problems and shaping ideas to creating thoughtful experiences for the web.</p><div className="skills-block"><span className="eyebrow muted">A FEW THINGS I DO</span><div className="skills">{skills.map(skill => <span className="skill" key={skill}>{skill}<ArrowUpRight size={12} /></span>)}</div></div></div><div className="about-foot"><span>CURIOUS BY NATURE. CONSIDERED BY DESIGN.</span><span>ALWAYS LEARNING <span className="foot-star">✳</span></span></div></div>
      </section>

      <section className="contact-section" id="contact"><div className="shell contact-inner"><div className="contact-top"><span className="eyebrow"><span className="contact-dot" /> HAVE A GOOD ONE IN MIND?</span><span className="contact-index">LET’S MAKE IT REAL.</span></div><h2>Let’s make<br /><em>something</em> matter<span className="period">.</span></h2><div className="contact-bottom"><div className="email-block"><span className="email-label">EMAIL</span><div className="email-button"><span>{profile.email}</span></div></div><span className="contact-note">GOOD IDEAS START WITH A HELLO.</span></div><div className="contact-decoration">✳</div></div></section>

      <footer className="footer shell"><a className="footer-brand" href="#home">{profile.name}<span className="period">.</span></a><span className="footer-copy">DESIGNED WITH INTENTION · BUILT WITH CARE</span><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /><span>GITHUB</span><MoveUpRight size={10} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /><span>LINKEDIN</span><MoveUpRight size={10} /></a></div><span className="copyright">© 2026 {profile.name.toUpperCase()}</span><a href="#home" className="back-top" aria-label="Back to top">BACK TO TOP <ArrowDownRight size={13} /></a></footer>
    </main>
  )
}

export default App
