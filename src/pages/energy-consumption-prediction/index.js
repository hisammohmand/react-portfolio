import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../../content_option";

const EnergyConsumptionPrediction = () => {
  return (
    <HelmetProvider>
      <section id="energy-consumption-prediction" className="project-page">
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Energy Consumption Prediction | {meta.title} </title>
            <meta name="description" content="Time series forecasting for energy consumption patterns" />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Energy Consumption Prediction</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p className="lead">
                Advanced time series forecasting system for predicting energy consumption patterns and optimizing resource allocation.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <div className="project-overview">
                <h2>Project Overview</h2>
                <p>
                  Built a sophisticated energy consumption prediction model using time series analysis and machine learning 
                  to forecast energy demand, optimize grid operations, and support sustainable energy management.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="6">
              <div className="feature-card">
                <h3>Key Features</h3>
                <ul>
                  <li>Time Series Forecasting</li>
                  <li>Demand Prediction</li>
                  <li>Grid Optimization</li>
                  <li>Peak Load Analysis</li>
                  <li>Weather Integration</li>
                  <li>Cost Optimization</li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <div className="tech-card">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Prophet</span>
                  <span className="tech-tag">ARIMA</span>
                  <span className="tech-tag">LSTM</span>
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">NumPy</span>
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
                      <h3>94%</h3>
                      <p>Forecast Accuracy</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>25%</h3>
                      <p>Cost Reduction</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>30%</h3>
                      <p>Efficiency Gain</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>$500K</h3>
                      <p>Annual Savings</p>
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

export default EnergyConsumptionPrediction;
