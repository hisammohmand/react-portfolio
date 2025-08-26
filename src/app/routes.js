import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import CarSalesAnalysis from "../pages/car-sales-analysis";
import AmazonSalesAnalysis from "../pages/amazon-sales-analysis";
import TrustSafetyAnalytics from "../pages/trust-safety-analytics";
import FraudDetection from "../pages/fraud-detection";
import DataPipeline from "../pages/data-pipeline";
import CybersecurityThreats from "../pages/cybersecurity-threats";
import CustomerBehavior from "../pages/customer-behavior";
import RealTimeMonitoring from "../pages/real-time-monitoring";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/car-sales-analysis" element={<CarSalesAnalysis />} />
      <Route path="/amazon-sales-analysis" element={<AmazonSalesAnalysis />} />
      <Route path="/trust-safety-analytics" element={<TrustSafetyAnalytics />} />
      <Route path="/fraud-detection" element={<FraudDetection />} />
      <Route path="/data-pipeline" element={<DataPipeline />} />
      <Route path="/cybersecurity-threats" element={<CybersecurityThreats />} />
      <Route path="/customer-behavior" element={<CustomerBehavior />} />
      <Route path="/real-time-monitoring" element={<RealTimeMonitoring />} />
    </Routes>
  );
};

export default AppRoutes;
