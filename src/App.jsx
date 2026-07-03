import React from 'react';
import PipelineAnimation from './PipelineAnimation';
import { 
  Briefcase, 
  Code, 
  Award, 
  Mail,
  Link,
  Terminal,
  Activity,
  Layers,
  Database,
  Cloud,
  BrainCircuit
} from 'lucide-react';

function App() {
  return (
    <div className="app-layout">
      {/* Sidebar Navigation */}
      <aside className="sb-card">
        <div className="sb-header">
          <span className="sb-logo">&lt;KA /&gt;</span>
        </div>
        <nav className="sb-nav">
          <p className="sb-section-label">Work</p>
          <a href="#experience" className="sb-nav-item"><Briefcase size={16} /> Experience</a>
          <a href="#architecture" className="sb-nav-item"><Activity size={16} /> Architecture</a>
          <p className="sb-section-label">Details</p>
          <a href="#skills" className="sb-nav-item"><Code size={16} /> Tech Stack</a>
          <a href="#honors" className="sb-nav-item"><Award size={16} /> Honors & Ed</a>
          <a href="#contact" className="sb-nav-item"><Mail size={16} /> Contact</a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="bg-gradient"></div>
        
        <div className="container">
          {/* Hero Section */}
          <section className="hero" id="hero" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="hero-anim-1" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '2.5rem', height: '1px', background: 'var(--accent-cyan)' }}></div>
              <p style={{ fontFamily: 'monospace', color: 'var(--accent-cyan)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Data Scientist · AI Engineer
              </p>
            </div>
            
            <h1 className="hero-anim-2" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: '900', lineHeight: '0.9', marginBottom: '2rem' }}>
              <span style={{ display: 'block', color: 'var(--text-primary)' }}>Kumar</span>
              <span className="gradient-text" style={{ display: 'block' }}>Ashutosh</span>
            </h1>
            
            <div className="hero-anim-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              <span className="role-pill role-pill-cyan">Data Scientist</span>
              <span className="role-pill role-pill-rose">AI Engineer</span>
              <span className="role-pill role-pill-indigo">Predictive Modeler</span>
            </div>
            
            <p className="hero-anim-4" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '1.25rem', maxWidth: '800px', lineHeight: '1.4' }}>
              Building <span style={{ color: 'var(--accent-cyan)', fontStyle: 'italic' }}>Intelligent</span>, <span style={{ color: 'var(--accent-rose)', fontStyle: 'italic' }}>Scalable</span>, and <span style={{ color: '#818cf8', fontStyle: 'italic' }}>Optimized</span> ML Pipelines.
            </p>
            
            <p className="hero-anim-4" style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '700px', lineHeight: '1.6' }}>
              Data Scientist with 5+ years of experience in Machine Learning, Demand Forecasting, and Data Engineering. Specializing in predictive modeling, time series forecasting, and Generative AI.
            </p>
            
            <div className="hero-anim-5" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <a href="https://linkedin.com/in/kumarashutosh22" target="_blank" rel="noopener noreferrer" className="btn-outline"><Link size={18} /> LinkedIn</a>
              <a href="https://github.com/kumarashutosh22" target="_blank" rel="noopener noreferrer" className="btn-outline"><Terminal size={18} /> GitHub</a>
              <a href="mailto:kumar.wt19i@gmail.com" className="btn-outline"><Mail size={18} /> Contact</a>
            </div>

            <div className="hero-anim-6" style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
              <p style={{ fontFamily: 'monospace', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>Core Stack & Platforms</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
                <span className="platform-tag"><Code size={16} /> Python</span>
                <span className="platform-tag"><Database size={16} /> SQL</span>
                <span className="platform-tag"><Cloud size={16} /> AWS</span>
                <span className="platform-tag"><Activity size={16} /> Tableau</span>
                <span className="platform-tag"><BrainCircuit size={16} /> OpenAI / RAG</span>
              </div>
            </div>
          </section>

          {/* Architecture Section */}
          <section id="architecture" style={{ padding: '4rem 0' }}>
            <h2 className="section-title"><Activity className="section-icon" /> Pipeline Architecture</h2>
            <PipelineAnimation />
          </section>

          {/* Experience Section */}
          <section id="experience" style={{ padding: '4rem 0' }}>
            <h2 className="section-title"><Briefcase className="section-icon" /> Professional Journey</h2>
            <div className="timeline">
              
              <div className="timeline-item animate-fade-in">
                <div className="timeline-dot"></div>
                <div className="glass-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>Chubb</h4>
                      <p style={{ fontFamily: 'monospace', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>Senior Data Scientist</span>
                      </p>
                    </div>
                    <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Dec 2025 - Present</p>
                  </div>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <li style={{ display: 'flex', marginBottom: '0.5rem' }}><span style={{ color: 'var(--accent-cyan)', marginRight: '0.75rem' }}>▹</span>Leading GenAI and ML initiatives.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item animate-fade-in delay-1">
                <div className="timeline-dot"></div>
                <div className="glass-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>Mu Sigma</h4>
                      <p style={{ fontFamily: 'monospace', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>Apprentice Leader - Data Scientist</span>
                      </p>
                    </div>
                    <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Sept 2022 - Dec 2025</p>
                  </div>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <li style={{ display: 'flex', marginBottom: '0.5rem' }}><span style={{ color: 'var(--accent-cyan)', marginRight: '0.75rem' }}>▹</span>Building a hierarchical forecasting solution on timeseries data to predict demand using XGB, Croston, SGD, ARIMA and Holt Winters.</li>
                    <li style={{ display: 'flex', marginBottom: '0.5rem' }}><span style={{ color: 'var(--accent-cyan)', marginRight: '0.75rem' }}>▹</span>Developed end-to-end Price Prediction and News sentiment analysis for a Fortune-260 petrochemical company.</li>
                    <li style={{ display: 'flex', marginBottom: '0.5rem' }}><span style={{ color: 'var(--accent-cyan)', marginRight: '0.75rem' }}>▹</span>Pitched GenAI solutions involving RAG, OpenAI and FAISS.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item animate-fade-in delay-2">
                <div className="timeline-dot"></div>
                <div className="glass-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>Annalect India</h4>
                      <p style={{ fontFamily: 'monospace', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>Senior Associate - Data Analyst</span>
                      </p>
                    </div>
                    <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Apr 2021 - Aug 2022</p>
                  </div>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <li style={{ display: 'flex', marginBottom: '0.5rem' }}><span style={{ color: 'var(--accent-cyan)', marginRight: '0.75rem' }}>▹</span>Automated API calls for marketing metrics, processing via Alteryx to Amazon Redshift for Tableau.</li>
                    <li style={{ display: 'flex', marginBottom: '0.5rem' }}><span style={{ color: 'var(--accent-cyan)', marginRight: '0.75rem' }}>▹</span>Automated Databricks notebooks to process and upload 1st Party Digital Marketing Data.</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* Skills / Tech Stack Section */}
          <section id="skills" style={{ padding: '4rem 0' }}>
            <h2 className="section-title"><Layers className="section-icon" /> Tech Stack</h2>
            <div className="grid-2">
              <div className="glass-card">
                <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>Core Machine Learning</h3>
                <div className="skills-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Time Series Forecasting</span>
                  <span className="skill-tag">Demand Forecasting</span>
                  <span className="skill-tag">Price Prediction</span>
                  <span className="skill-tag">XGBoost / ARIMA</span>
                </div>
              </div>
              <div className="glass-card">
                <h3 style={{ color: 'var(--accent-rose)', marginBottom: '1rem' }}>Data Engineering & GenAI</h3>
                <div className="skills-tags">
                  <span className="skill-tag" style={{ color: 'var(--accent-rose)', borderColor: 'rgba(251, 113, 133, 0.2)', background: 'rgba(251, 113, 133, 0.1)' }}>SQL</span>
                  <span className="skill-tag" style={{ color: 'var(--accent-rose)', borderColor: 'rgba(251, 113, 133, 0.2)', background: 'rgba(251, 113, 133, 0.1)' }}>Databricks</span>
                  <span className="skill-tag" style={{ color: 'var(--accent-rose)', borderColor: 'rgba(251, 113, 133, 0.2)', background: 'rgba(251, 113, 133, 0.1)' }}>Redshift</span>
                  <span className="skill-tag" style={{ color: 'var(--accent-rose)', borderColor: 'rgba(251, 113, 133, 0.2)', background: 'rgba(251, 113, 133, 0.1)' }}>RAG / FAISS</span>
                  <span className="skill-tag" style={{ color: 'var(--accent-rose)', borderColor: 'rgba(251, 113, 133, 0.2)', background: 'rgba(251, 113, 133, 0.1)' }}>OpenAI</span>
                </div>
              </div>
            </div>
          </section>

          {/* Honors Section */}
          <section id="honors" style={{ padding: '4rem 0' }}>
            <h2 className="section-title"><Award className="section-icon" /> Honors & Certifications</h2>
            <div className="grid-2">
              <div className="glass-card animate-fade-in">
                <h3 style={{ marginBottom: '1rem', color: 'var(--accent-cyan)' }}>Awards</h3>
                <ul style={{ listStyleType: 'none', padding: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <li style={{ display: 'flex', marginBottom: '0.75rem' }}><span style={{ color: 'var(--accent-cyan)', marginRight: '0.5rem' }}>★</span><strong>Ranked #1</strong> in AL Program evaluation (Mu Sigma, 2025)</li>
                  <li style={{ display: 'flex', marginBottom: '0.75rem' }}><span style={{ color: 'var(--accent-cyan)', marginRight: '0.5rem' }}>★</span><strong>SPOT Award (x2)</strong> for AI sales/demand prediction</li>
                  <li style={{ display: 'flex', marginBottom: '0.75rem' }}><span style={{ color: 'var(--accent-cyan)', marginRight: '0.5rem' }}>★</span><strong>Rookie Rockstar Award</strong> for automating project (Annalect)</li>
                  <li style={{ display: 'flex', marginBottom: '0.75rem' }}><span style={{ color: 'var(--accent-cyan)', marginRight: '0.5rem' }}>★</span><strong>Best Economical Robot</strong> (ABU Robocon)</li>
                </ul>
              </div>
              <div className="glass-card animate-fade-in delay-1">
                <h3 style={{ marginBottom: '1rem', color: 'var(--accent-rose)' }}>Education</h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>Great Lakes Institute of Management</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>PGP(DSE) - Data Science & Engineering</p>
                  <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--accent-rose)' }}>2020 - 2021</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>SRM University</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>B.Tech - Mechanical Engineering</p>
                  <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--accent-rose)' }}>2012 - 2016</p>
                </div>
              </div>
            </div>
          </section>

          {/* Get in Touch */}
          <section id="contact" style={{ padding: '6rem 0', textAlign: 'center' }}>
            <div className="glass-card" style={{ padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto', border: '1px solid rgba(136, 192, 208, 0.3)' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem' }}><Mail size={36} /> Let's connect</h2>
              <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>I'm currently focused on GenAI and scalable ML pipelines at Chubb, but always open to discussing data architecture and AI strategy.</p>
              <a href="mailto:kumar.wt19i@gmail.com" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>Say Hello</a>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default App;
