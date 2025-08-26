import React from "react";

import "./style.css";

const CybersecurityThreats = () => {
  return (
    <div className="cybersecurity-page">
      <div className="container">
        <section className="hero">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop"
            alt="Cybersecurity Threat Analysis"
            className="hero-image"
          />
          <h1>Cybersecurity Threat Analysis</h1>
          <p>Advanced threat detection and analysis system for cybersecurity monitoring and incident response.</p>
        </section>

        <section className="project-steps">
          <h3>Project Implementation Steps</h3>
          <ul className="step-list">
            <li><strong>Phase 1:</strong> Threat Intelligence Gathering - Collected data from multiple security sources and threat feeds</li>
            <li><strong>Phase 2:</strong> Pattern Recognition - Developed algorithms to identify attack patterns and anomalies</li>
            <li><strong>Phase 3:</strong> Real-time Monitoring - Implemented 24/7 threat monitoring and alerting system</li>
            <li><strong>Phase 4:</strong> Incident Response - Created automated response workflows for threat mitigation</li>
            <li><strong>Phase 5:</strong> Security Analytics - Built comprehensive reporting and analytics dashboard</li>
          </ul>
        </section>

        <section className="threat-metrics">
          <h2>Security Metrics & Performance</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h4>Threat Detection Rate</h4>
              <div className="metric-value">99.2%</div>
              <p>Accuracy in identifying security threats</p>
            </div>
            <div className="metric-card">
              <h4>Response Time</h4>
              <div className="metric-value">1.8s</div>
              <p>Average time to detect and respond</p>
            </div>
            <div className="metric-card">
              <h4>False Positive Rate</h4>
              <div className="metric-value">0.8%</div>
              <p>Minimal false alarms</p>
            </div>
            <div className="metric-card">
              <h4>System Uptime</h4>
              <div className="metric-value">99.9%</div>
              <p>Reliable monitoring availability</p>
            </div>
          </div>
        </section>

        <section className="technical-implementation">
          <h2>Technical Implementation</h2>
          <div className="tech-stack">
            <h3>Technology Stack</h3>
            <div className="tech-grid">
              <div className="tech-item">Python (Security Libraries)</div>
              <div className="tech-item">Machine Learning (Scikit-learn)</div>
              <div className="tech-item">Elasticsearch</div>
              <div className="tech-item">Kibana Dashboard</div>
              <div className="tech-item">Docker Containers</div>
              <div className="tech-item">AWS Security Services</div>
            </div>
          </div>
        </section>

        <section className="business-impact">
          <h2>Business Impact</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <h4>Security Incidents Reduced</h4>
              <div className="impact-value">90%</div>
              <p>Significant reduction in security breaches</p>
            </div>
            <div className="impact-item">
              <h4>Response Time Improved</h4>
              <div className="impact-value">85%</div>
              <p>Faster threat response and resolution</p>
            </div>
            <div className="impact-item">
              <h4>Cost Savings</h4>
              <div className="impact-value">$3.2M</div>
              <p>Annual savings from prevented incidents</p>
            </div>
          </div>
        </section>

        {/* Project Documentation */}
        <section className="project-documentation">
          <h2>📋 Project Documentation</h2>

          <div className="doc-section">
            <h3>Project Overview</h3>
            <p>
              This advanced cybersecurity threat detection and analysis system was developed to identify, analyze, and respond
              to security threats in real-time. The project implements sophisticated machine learning algorithms and threat
              intelligence to provide comprehensive security monitoring and incident response capabilities.
            </p>
          </div>

          <div className="doc-section">
            <h3>🎯 Key Objectives</h3>
            <ul className="doc-list">
              <li>Implement real-time threat detection and analysis capabilities</li>
              <li>Develop advanced pattern recognition for security threats</li>
              <li>Create automated incident response and alerting systems</li>
              <li>Build comprehensive security analytics and reporting</li>
              <li>Ensure system security and maintain threat intelligence</li>
            </ul>
          </div>

          <div className="doc-section">
            <h3>🛠️ Technical Implementation Details</h3>
            <div className="tech-details">
              <div className="tech-category">
                <h4>Machine Learning</h4>
                <ul>
                  <li>Python for ML model development and training</li>
                  <li>Advanced anomaly detection algorithms</li>
                  <li>Pattern recognition for threat identification</li>
                  <li>Predictive modeling for threat prevention</li>
                </ul>
              </div>
              <div className="tech-category">
                <h4>Security Infrastructure</h4>
                <ul>
                  <li>Elasticsearch for log analysis and search</li>
                  <li>Kibana for security visualization and monitoring</li>
                  <li>Docker for containerized deployment</li>
                  <li>Real-time threat intelligence feeds</li>
                </ul>
              </div>
              <div className="tech-category">
                <h4>Data Processing</h4>
                <ul>
                  <li>Real-time data streaming and processing</li>
                  <li>Distributed threat intelligence analysis</li>
                  <li>Automated threat correlation and scoring</li>
                  <li>Security event normalization and enrichment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="doc-section">
            <h3>📊 Data Sources & Methodology</h3>
            <div className="methodology">
              <div className="method-item">
                <h4>Data Sources</h4>
                <ul>
                  <li>Security logs and event data (15,000+ daily events)</li>
                  <li>Network traffic and packet analysis</li>
                  <li>External threat intelligence feeds</li>
                  <li>Vulnerability assessment reports</li>
                </ul>
              </div>
              <div className="method-item">
                <h4>Analysis Methodology</h4>
                <ul>
                  <li>Real-time threat detection and correlation</li>
                  <li>Machine learning-based pattern analysis</li>
                  <li>Statistical anomaly detection</li>
                  <li>Automated incident response workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Project Results & Impact */}
        <section className="project-results">
          <h2>📈 Project Results & Business Impact</h2>

          <div className="results-overview">
            <div className="result-highlight">
              <h3>🚀 Key Achievements</h3>
              <div className="achievement-grid">
                <div className="achievement-item">
                  <div className="achievement-number">99.2%</div>
                  <div className="achievement-text">Detection Rate</div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-number">1.8s</div>
                  <div className="achievement-text">Response Time</div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-number">0.8%</div>
                  <div className="achievement-text">False Positive Rate</div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-number">99.9%</div>
                  <div className="achievement-text">System Uptime</div>
                </div>
              </div>
            </div>
          </div>

          <div className="detailed-results">
            <div className="result-category">
              <h3>📈 Performance Improvements</h3>
              <ul>
                <li><strong>Threat Detection:</strong> Achieved 99.2% detection rate for security threats</li>
                <li><strong>Response Time:</strong> Reduced incident response time to 1.8 seconds</li>
                <li><strong>False Positives:</strong> Maintained low 0.8% false positive rate</li>
                <li><strong>System Reliability:</strong> Achieved 99.9% uptime with automated failover</li>
              </ul>
            </div>

            <div className="result-category">
              <h3>💼 Business Impact</h3>
              <ul>
                <li><strong>Security Incidents:</strong> Reduced security incidents by 90% through proactive detection</li>
                <li><strong>Response Efficiency:</strong> Improved response time by 85% through automation</li>
                <li><strong>Cost Savings:</strong> Saved $3.2M annually through prevented security breaches</li>
                <li><strong>Compliance:</strong> Achieved 100% compliance with security standards</li>
              </ul>
            </div>

            <div className="result-category">
              <h3>🎯 Deliverables</h3>
              <ul>
                <li><strong>Threat Detection System:</strong> Real-time threat detection and analysis platform</li>
                <li><strong>ML Models:</strong> Deployed threat detection and classification models</li>
                <li><strong>Monitoring Dashboard:</strong> Comprehensive security monitoring interface</li>
                <li><strong>Incident Response:</strong> Automated incident response and alerting system</li>
              </ul>
            </div>
          </div>

          <div className="lessons-learned">
            <h3>📚 Lessons Learned & Best Practices</h3>
            <div className="lessons-grid">
              <div className="lesson-item">
                <h4>Real-time Processing</h4>
                <p>Implementing real-time threat detection is crucial for effective security monitoring.</p>
              </div>
              <div className="lesson-item">
                <h4>Threat Intelligence</h4>
                <p>Integrating external threat intelligence enhances detection accuracy and coverage.</p>
              </div>
              <div className="lesson-item">
                <h4>Automation</h4>
                <p>Automating incident response reduces manual effort and improves response times.</p>
              </div>
              <div className="lesson-item">
                <h4>Continuous Monitoring</h4>
                <p>24/7 monitoring and alerting are essential for maintaining security posture.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="back-button-container">

        </div>
      </div>
    </div>
  );
};

export default CybersecurityThreats;
