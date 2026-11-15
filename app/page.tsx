"use client";
import { useState } from "react";
import { portfolio } from "../data/portfolio";

export default function Page() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const visibleProjects = showMoreProjects ? portfolio.projects : portfolio.projects.slice(0, 3);

  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label={`${portfolio.name}, home`}><img className="wordmark-mark" src="/favicon.ico" alt="" /><span>{portfolio.name}</span></a>
          <div className="nav-links">{portfolio.navigation.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
          <a className="nav-cta" href={`mailto:${portfolio.email}`}>Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="home">
        <section className="hero page-shell">
          <div className="hero-copy">
            
            <h1>{portfolio.heroLines.map((line) => <span key={line}>{line}</span>)}</h1>
            <p className="hero-tagline">{portfolio.role}</p>
            <p className="hero-description">{portfolio.intro.before}</p>
            <div className="hero-actions"><a className="button button-primary" href="#flagships">Explore my work <span aria-hidden="true">↘</span></a><a className="text-link" href={portfolio.cvPath} target="_blank" rel="noopener noreferrer">View CV <span aria-hidden="true">↗</span></a></div>
            <div className="social-links" aria-label="Social profiles"><a href={portfolio.links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={portfolio.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
          </div>
          <div className="hero-visual"><div className="portrait-orbit" aria-hidden="true" /><div className="portrait-frame"><img src="/images/me.png" alt={portfolio.name} onError={(event) => { event.currentTarget.style.display = "none"; }} /></div></div>
        </section>
        <section className="about-section page-shell" id="about">
          <div className="about-statement"><p className="eyebrow">A little about me</p><h2>{portfolio.about.title}<span className="accent-dot">.</span></h2><div className="about-copy">{portfolio.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><blockquote>{portfolio.about.principle}</blockquote></div>
          <div className="about-focus">{portfolio.about.focus.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div>
        </section>        <section className="section page-shell skills-section" id="matrix">
          <div className="section-heading"><p className="eyebrow">A practical toolkit</p><h2>Things I work with<span className="accent-dot">.</span></h2><p className="section-intro">A growing set of tools I use to design, build and ship software.</p></div>
          <div className="skill-groups">{portfolio.skills.map((group) => <article className="skill-group" key={group.name}><h3>{group.name}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>
        <section className="section work-section" id="flagships">
          <div className="page-shell">
            <div className="section-heading section-heading-row">
              <div><p className="eyebrow">Selected projects</p><h2>Things I’ve worked on<span className="accent-dot">.</span></h2></div>
              <p className="section-intro">A selection of web, mobile and backend projects, built through hands-on work.</p>
            </div>
            <div className="project-grid">
              {visibleProjects.map((project, index) => (
                <article className={`project-card ${index === 0 ? "project-featured" : ""}`} key={project.name}>
                  <div className="project-image-wrap"><img className="project-image" src={project.image} alt={`${project.name} project preview`} onError={(event) => { event.currentTarget.style.display = "none"; }} /><span className="project-count">{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="project-content">
                    <p className="project-label">{project.label}</p>
                    <div className="project-title-row"><h3>{project.name}</h3><a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`}>↗</a></div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    {"liveDemo" in project && project.liveDemo && <a className="project-demo" href={project.liveDemo} target="_blank" rel="noopener noreferrer">Visit live project ↗</a>}
                  </div>
                </article>
              ))}
            </div>
            {portfolio.projects.length > 3 && (
              <div className="project-grid-actions">
                <button className="see-more-projects" type="button" aria-expanded={showMoreProjects} onClick={() => setShowMoreProjects((visible) => !visible)}>
                  {showMoreProjects ? "See fewer projects" : "See more projects"}<span aria-hidden="true">{showMoreProjects ? "↑" : "↓"}</span>
                </button>
              </div>
            )}
          </div>
        </section>        <section className="section page-shell experience-section" id="experience">
          <div className="section-heading section-heading-row"><div><p className="eyebrow">Where I’ve contributed</p><h2>Experience<span className="accent-dot">.</span></h2></div><p className="section-intro">Work that has helped me grow beyond the code.</p></div>
          <div className="experience-list">{portfolio.experience.map((role) => <article className="experience-item" key={`${role.organization}-${role.title}`}><div className="experience-meta"><span>{role.period}</span><span>{role.organization}</span></div><div className="experience-detail"><h3>{role.title}</h3><ul>{role.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div></article>)}</div>
        </section>
        <section className="section credentials-section" id="certs"><div className="page-shell">
          <div className="section-heading section-heading-row"><div><p className="eyebrow">Learning in progress</p><h2>Certifications<span className="accent-dot">.</span></h2></div><p className="section-intro">Recent learning across cloud, DevOps, containers and modern development.</p></div>
          <div className="credential-grid">{portfolio.certifications.map((certification) => <a className="credential-card" key={certification.title} href={certification.url} target="_blank" rel="noopener noreferrer"><img src={`/images/certifications/${certification.image}`} alt="" onError={(event) => { event.currentTarget.style.display = "none"; }} /><span className="credential-category">{certification.category} · {certification.date}</span><strong>{certification.title}</strong><span className="credential-issuer">{certification.issuer}</span><span className="credential-arrow" aria-hidden="true">↗</span></a>)}</div>
        </div></section>
        <section className="contact-section page-shell" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">Have a project or opportunity?</p>
            <h2>Let’s make<br />something useful<span className="accent-dot">.</span></h2>
            <p>I’m open to software engineering and DevOps internship opportunities. I’d be glad to hear what you’re building.</p>
            <a className="button button-dark" href={`mailto:${portfolio.email}`}>Get in touch ↗</a>
            <div className="contact-socials">
              <a href={portfolio.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={portfolio.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span>{portfolio.email}</span>
            </div>
          </div>
          <div className="contact-decoration" aria-hidden="true">{portfolio.firstName.slice(0, 1)}</div>
        </section>
      </main>
      <footer className="site-footer page-shell"><a className="footer-name" href="#home">{portfolio.name}</a><span>All rights reserved · © {new Date().getFullYear()}</span><a href={`mailto:${portfolio.email}`}>Say hello ↗</a></footer>
    </>
  );
}












