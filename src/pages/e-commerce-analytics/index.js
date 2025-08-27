import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { meta } from "../../content_option";

const EcommerceAnalytics = () => {
  return (
    <HelmetProvider>
      <section id="e-commerce-analytics" className="project-page">
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> E-commerce Analytics Platform | {meta.title} </title>
            <meta name="description" content="Sales and customer behavior analysis for e-commerce platforms" />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">E-commerce Analytics Platform</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p className="lead">
                Comprehensive e-commerce analytics platform for sales analysis, customer behavior insights, and business intelligence.
              </p>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="12">
              <div className="project-overview">
                <h2>Project Overview</h2>
                <p>
                  Built a sophisticated e-commerce analytics platform that processes sales data, customer interactions, 
                  and market trends to provide actionable business insights and optimize revenue performance.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg="6">
              <div className="feature-card">
                <h3>Key Features</h3>
                <ul>
                  <li>Sales Performance Tracking</li>
                  <li>Customer Segmentation</li>
                  <li>Product Analytics</li>
                  <li>Revenue Forecasting</li>
                  <li>Conversion Rate Optimization</li>
                  <li>Market Trend Analysis</li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <div className="tech-card">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Power BI</span>
                  <span className="tech-tag">SQL</span>
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">Tableau</span>
                  <span className="tech-tag">Excel</span>
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
                      <h3>35%</h3>
                      <p>Revenue Increase</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>45%</h3>
                      <p>Conversion Rate</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>60%</h3>
                      <p>Customer Retention</p>
                    </div>
                  </Col>
                  <Col lg="3" md="6">
                    <div className="metric-card">
                      <h3>$1.2M</h3>
                      <p>Additional Revenue</p>
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

export default EcommerceAnalytics;
