import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../../content_option";

const ClimateChangeAnalysis = () => {
  return (
    <HelmetProvider>
      <section id="climate-change-analysis" className="project-page">
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Climate Change Data Analysis | {meta.title} </title>
            <meta name="description" content="Environmental data analysis for climate change insights" />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Climate Change Data Analysis</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p className="lead">
                Comprehensive environmental data analysis platform for climate change research and sustainability insights.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <div className="project-overview">
                <h2>Project Overview</h2>
                <p>
                  Developed a comprehensive climate change analysis platform that processes environmental data to provide 
                  insights into climate patterns, temperature trends, and sustainability metrics for informed decision-making.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="6">
              <div className="feature-card">
                <h3>Key Features</h3>
                <ul>
                  <li>Temperature Trend Analysis</li>
                  <li>Carbon Emission Tracking</li>
                  <li>Weather Pattern Prediction</li>
                  <li>Environmental Impact Assessment</li>
                  <li>Sustainability Metrics</li>
                  <li>Climate Risk Modeling</li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <div className="tech-card">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">Matplotlib</span>
                  <span className="tech-tag">Seaborn</span>
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">GeoPandas</span>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <div className="results-section">
                <h2>Results & Impact</h2>
                <Row>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>50+</h3>
                      <p>Years Analyzed</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>1M+</h3>
                      <p>Data Points</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>95%</h3>
                      <p>Model Accuracy</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>Global</h3>
                      <p>Coverage</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

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

export default ClimateChangeAnalysis;
