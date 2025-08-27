import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../../content_option";

const HealthcareAnalytics = () => {
  return (
    <HelmetProvider>
      <section id="healthcare-analytics" className="project-page">
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Healthcare Analytics Dashboard | {meta.title} </title>
            <meta name="description" content="Patient data analysis and healthcare insights platform" />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Healthcare Analytics Dashboard</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p className="lead">
                Advanced healthcare analytics platform for patient data analysis, risk prediction, and clinical insights.
              </p>
            </Col>
          </Row>

          {/* Project Overview */}
          <Row className="mb-5">
            <Col lg="12">
              <div className="project-overview">
                <h2>Project Overview</h2>
                <p>
                  Developed a comprehensive healthcare analytics dashboard that processes patient data to provide 
                  actionable insights for healthcare providers. The system includes risk prediction models, 
                  patient outcome analysis, and clinical decision support tools.
                </p>
              </div>
            </Col>
          </Row>

          {/* Key Features */}
          <Row className="mb-5">
            <Col lg="6">
              <div className="feature-card">
                <h3>Key Features</h3>
                <ul>
                  <li>Patient Risk Assessment</li>
                  <li>Treatment Outcome Prediction</li>
                  <li>Clinical Decision Support</li>
                  <li>Real-time Patient Monitoring</li>
                  <li>Healthcare Quality Metrics</li>
                  <li>Resource Optimization</li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <div className="tech-card">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">NumPy</span>
                  <span className="tech-tag">Matplotlib</span>
                  <span className="tech-tag">Seaborn</span>
                  <span className="tech-tag">Flask</span>
                  <span className="tech-tag">SQL</span>
                </div>
              </div>
            </Col>
          </Row>

          {/* Results & Impact */}
          <Row className="mb-5">
            <Col lg="12">
              <div className="results-section">
                <h2>Results & Impact</h2>
                <Row>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>95%</h3>
                      <p>Prediction Accuracy</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>40%</h3>
                      <p>Risk Reduction</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>60%</h3>
                      <p>Faster Diagnosis</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>$2.5M</h3>
                      <p>Cost Savings</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          {/* Methodology */}
          <Row className="mb-5">
            <Col lg="12">
              <div className="methodology-section">
                <h2>Methodology</h2>
                <Row>
                  <Col lg="4">
                    <div className="method-step">
                      <h4>1. Data Collection</h4>
                      <p>Gathered patient demographics, medical history, lab results, and treatment outcomes from multiple healthcare systems.</p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="method-step">
                      <h4>2. Feature Engineering</h4>
                      <p>Created predictive features including risk scores, treatment patterns, and patient journey mapping.</p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="method-step">
                      <h4>3. Model Development</h4>
                      <p>Built ensemble models using Random Forest, XGBoost, and Neural Networks for optimal prediction accuracy.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          {/* Back to Portfolio */}
          <Row className="mb-5">
            <Col lg="12" className="text-center">
              <Link to="/portfolio" className="btn btn-primary btn-lg">
                ← Back to Portfolio
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </HelmetProvider>
  );
};

export default HealthcareAnalytics;
