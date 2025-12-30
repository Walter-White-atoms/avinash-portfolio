import React from 'react';
import './App.css';

function App() {
  const skills = [
    {
      title: "Mobile Development",
      description: "Expert in React Native with 6+ years building scalable, high-performance mobile applications across fintech, trading, and blockchain platforms.",
      tags: ["React Native", "iOS", "Android", "Expo", "Metro"]
    },
    {
      title: "State Management & Architecture",
      description: "Advanced expertise in Redux Toolkit, context patterns, and architecting modular, event-driven mobile architectures.",
      tags: ["Redux Toolkit", "Context API", "MobX", "Zustand"]
    },
    {
      title: "Real-time & Backend Integration",
      description: "Specialized in WebSockets, real-time data pipelines, socket-driven features, and secure authentication systems.",
      tags: ["WebSockets", "Socket.io", "REST APIs", "GraphQL", "OAuth"]
    },
    {
      title: "Full-Stack Development",
      description: "Cross-platform expertise with Node.js, database design, and system architecture for scalable applications.",
      tags: ["Node.js", "MySQL", "Redis", "Kafka", "System Design"]
    }
  ];

  const experience = [
    {
      title: "Senior React Native Developer",
      duration: "6+ Years Experience",
      description: "Delivered scalable, high-performance mobile applications across fintech, trading, blockchain, and real-time systems. Architected end-to-end solutions with focus on performance optimization and user experience."
    },
    {
      title: "Technical Expertise",
      duration: "Core Competencies",
      description: "Complex UI/UX flows, real-time data pipelines, socket-driven features, secure authentication systems. Proven ability to translate business requirements into production-ready mobile solutions."
    },
    {
      title: "Leadership & Collaboration",
      duration: "Professional Skills",
      description: "Forward-thinking, detail-oriented professional who thrives in fast-paced environments. Effective collaboration with cross-functional teams to drive product impact and maintain code quality."
    }
  ];

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
        <div className="hero-content">
          <h1>Avinash</h1>
          <p className="subtitle">Senior React Native Developer</p>
          <p className="description">
            6+ years of hands-on experience delivering scalable, high-performance mobile applications 
            across fintech, trading, blockchain, and real-time systems. Proven ability to architect 
            end-to-end solutions using React Native, Redux Toolkit, WebSockets, and modern backend integrations.
          </p>
          <div className="cta-buttons">
            <a href="#skills" className="btn btn-primary">
              View Skills
            </a>
            <a href="#experience" className="btn btn-outline">
              Experience
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="skill-tags">
                  {skill.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3>{exp.title}</h3>
              <p className="duration">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Key Highlights</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>🚀 Performance Optimization</h3>
              <p>Expert in optimizing app performance without compromising user experience. Specialized in memory management, bundle optimization, and smooth animations.</p>
            </div>
            <div className="skill-card">
              <h3>🔒 Security & Authentication</h3>
              <p>Strong expertise in building secure authentication systems, implementing OAuth flows, and ensuring data protection in financial applications.</p>
            </div>
            <div className="skill-card">
              <h3>⚡ Real-time Systems</h3>
              <p>Proven track record in building real-time trading platforms, live data feeds, and socket-driven features for high-frequency applications.</p>
            </div>
            <div className="skill-card">
              <h3>🏗️ System Architecture</h3>
              <p>Experience in designing modular, event-driven architectures that scale. Focus on clean code practices and maintainable solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
