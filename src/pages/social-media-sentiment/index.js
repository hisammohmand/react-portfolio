import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../../content_option";

const SocialMediaSentiment = () => {
  return (
    <HelmetProvider>
      <section id="social-media-sentiment" className="project-page">
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Social Media Sentiment Analysis | {meta.title} </title>
            <meta name="description" content="NLP-based sentiment analysis for social media content" />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Social Media Sentiment Analysis</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p className="lead">
                Advanced NLP-based sentiment analysis system for social media content monitoring and brand reputation management.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <div className="project-overview">
                <h2>Project Overview</h2>
                <p>
                  Developed a sophisticated sentiment analysis platform that processes social media content to provide 
                  real-time insights into public opinion, brand sentiment, and trending topics across multiple platforms.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="6">
              <div className="feature-card">
                <h3>Key Features</h3>
                <ul>
                  <li>Real-time Sentiment Analysis</li>
                  <li>Multi-platform Monitoring</li>
                  <li>Brand Reputation Tracking</li>
                  <li>Trend Detection</li>
                  <li>Emotion Classification</li>
                  <li>Automated Alerts</li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <div className="tech-card">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">NLTK</span>
                  <span className="tech-tag">TextBlob</span>
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">Flask</span>
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
                      <h3>92%</h3>
                      <p>Accuracy Rate</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>10K+</h3>
                      <p>Posts Analyzed</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>85%</h3>
                      <p>Response Time</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>24/7</h3>
                      <p>Monitoring</p>
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

export default SocialMediaSentiment;
