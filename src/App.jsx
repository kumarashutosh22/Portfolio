import React from 'react';
import PipelineAnimation from './PipelineAnimation';

function App() {
  return (
    <>
      <div className="bg-gradient"></div>
      
      <div className="container">
        {/* Hero Section */}
        <section className="hero" style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="avatar-container animate-float" style={{ flexShrink: 0 }}>
            <img src="/avatar.jpg" alt="Kumar Ashutosh Avatar" className="hero-avatar" />
          </div>
          <div className="glass-panel animate-fade-in" style={{ flex: '1 1 500px' }}>
            <h1>Hi, I'm <span className="gradient-text">Kumar Ashutosh</span></h1>
            <p className="delay-1 animate-fade-in" style={{ fontSize: '1.25rem', color: 'var(--accent-cyan)' }}>
              Senior Data Scientist @ Chubb | Ex-Mu Sigma
            </p>
            <p className="delay-2 animate-fade-in">
              Bridging the gap between Mechanical Engineering precision and Predictive Modeling. Passionate about AI, ML, and GenAI.
            </p>
            <div className="delay-3 animate-fade-in" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#experience" className="btn btn-primary">View My Work</a>
              <a href="mailto:kumar.wt19i@gmail.com" className="btn btn-secondary" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)', padding: '0.75rem 1.5rem', borderRadius: '4px', textDecoration: 'none' }}>Contact Me</a>
            </div>
          </div>
        </section>

        {/* Pipeline Architecture Section */}
        <section id="architecture" style={{ padding: '2rem 0' }}>
          <PipelineAnimation />
        </section>

        {/* About & Skills Section */}
        <section id="about">
          <h2>About & Skills</h2>
          <div className="grid-2">
            <div className="glass-card animate-fade-in">
              <h3>Background</h3>
              <p>
                Data Scientist with experience across Petrochemical, Marketing Science, and EduTech sectors. I transitioned from building robots at SRM University to developing end-to-end ML pipelines, bringing mechanical engineering precision to data-driven problem solving.
              </p>
            </div>
            <div className="glass-card animate-fade-in delay-1">
              <h3>Core Competencies</h3>
              <div className="skills-tags">
                <span className="skill-tag">Supply Chain Optimization</span>
                <span className="skill-tag">RAG & LangChain</span>
                <span className="skill-tag">Predictive Modeling</span>
                <span className="skill-tag">Demand Forecasting</span>
                <span className="skill-tag">Python & SQL</span>
                <span className="skill-tag">Hadoop</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2>Professional Experience</h2>
          <div className="timeline">
            
            <div className="timeline-item animate-fade-in">
              <div className="timeline-dot"></div>
              <div className="glass-card">
                <h3>Senior Data Scientist</h3>
                <h4 className="gradient-text" style={{ marginBottom: '0.5rem' }}>Chubb <span>(Dec 2025 - Present)</span></h4>
                <p>
                  Leading GenAI and ML initiatives.
                </p>
              </div>
            </div>

            <div className="timeline-item animate-fade-in delay-1">
              <div className="timeline-dot"></div>
              <div className="glass-card">
                <h3>Decision Scientist IV / Apprentice Leader</h3>
                <h4 className="gradient-text" style={{ marginBottom: '0.5rem' }}>Mu Sigma Inc. <span>(Sept 2022 - Dec 2025)</span></h4>
                <p>
                  Developed end-to-end ML pipelines for demand forecasting, beating accuracy benchmarks by 10%. Built linear programming models for feedstock optimization. Led a team of 26 cross-functional data professionals.
                </p>
              </div>
            </div>
            
            <div className="timeline-item animate-fade-in delay-2">
              <div className="timeline-dot"></div>
              <div className="glass-card">
                <h3>Senior Associate - Reporting & Insights</h3>
                <h4 className="gradient-text" style={{ marginBottom: '0.5rem' }}>Annalect India <span>(Apr 2021 - Aug 2022)</span></h4>
                <p>
                  Managed end-to-end reporting and analytics for marketing science clients.
                </p>
              </div>
            </div>

            <div className="timeline-item animate-fade-in delay-3">
              <div className="timeline-dot"></div>
              <div className="glass-card">
                <h3>Associate Content Manager</h3>
                <h4 className="gradient-text" style={{ marginBottom: '0.5rem' }}>Unacademy <span>(Dec 2020 - Apr 2021)</span></h4>
                <p>
                  Managed course content pipelines, optimized delivery mechanisms, and coordinated with educators to ensure high-quality learning materials.
                </p>
              </div>
            </div>
            
            <div className="timeline-item animate-fade-in delay-4">
              <div className="timeline-dot"></div>
              <div className="glass-card">
                <h3>Intern</h3>
                <h4 className="gradient-text" style={{ marginBottom: '0.5rem' }}>The Sparks Foundation <span>(Sep 2020 - Nov 2020)</span></h4>
                <p>
                  Data Science and Business Analytics intern. Handled foundational data wrangling and exploratory data analysis tasks.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <h2>Education</h2>
          <div className="grid-3">
            <div className="glass-card animate-fade-in">
              <h3>PG Degree, Data Science and Engineering</h3>
              <h4 className="gradient-text" style={{ marginBottom: '0.5rem' }}>Great Lakes Institute of Management</h4>
              <p>Bridging the gap between engineering foundations and advanced analytics.</p>
            </div>
            <div className="glass-card animate-fade-in delay-1">
              <h3>B.Tech, Mechanical Engineering</h3>
              <h4 className="gradient-text" style={{ marginBottom: '0.5rem' }}>SRM University</h4>
              <p>Co-Team Lead for SRM Team Robocon. Developed 6 DOF systems and omnidirectional platforms.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>Selected Projects</h2>
          <div className="grid-2">
            <div className="glass-card animate-fade-in">
              <h3>SRM Team Robocon</h3>
              <h4 className="gradient-text" style={{ marginBottom: '0.5rem' }}>Co-Team Lead / Programmer</h4>
              <p>
                Led a team to build complex robotic systems including a 6 DOF quadruped robot for ABU Robocon. Programmed ATMEGA microcontrollers for autonomous kinematics and motor control systems, integrating pneumatic valves and IR sensors.
              </p>
            </div>
            <div className="glass-card animate-fade-in delay-1">
              <h3>SRM Team WelkinSAT</h3>
              <h4 className="gradient-text" style={{ marginBottom: '0.5rem' }}>Programmer & Management Board</h4>
              <p>
                Developed a telemetry and atmospheric data payload for a CanSat mission. Automated data transmission using microcontrollers and radio modules, simulating a micro-satellite descent trajectory.
              </p>
            </div>
          </div>
        </section>

        {/* Honors & Certifications Section */}
        <section id="honors">
          <h2>Honors & Certifications</h2>
          <div className="grid-2">
            <div className="glass-card animate-fade-in">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Awards</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                <li><strong>Best Economical Robot</strong> – National ABU Robocon</li>
                <li><strong>Spot Award</strong> (x2) – For exceptional delivery and crisis management</li>
                <li><strong>Rookie Rockstar</strong> – For rapid onboarding and high impact</li>
              </ul>
            </div>
            <div className="glass-card animate-fade-in delay-1">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-indigo)' }}>Certifications</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                <li>Learning Data Analytics</li>
                <li>Digital Marketing Foundations</li>
                <li>Marketing Tools: Digital Marketing</li>
                <li>Content Marketing Foundations</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default App;
