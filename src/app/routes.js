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
import HealthcareAnalytics from "../pages/healthcare-analytics";
import RealTimeMonitoring from "../pages/real-time-monitoring";
import EcommerceAnalytics from "../pages/e-commerce-analytics";
import SocialMediaSentiment from "../pages/social-media-sentiment";
import EnergyConsumptionPrediction from "../pages/energy-consumption-prediction";
import ClimateChangeAnalysis from "../pages/climate-change-analysis";

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
      <Route path="/healthcare-analytics" element={<HealthcareAnalytics />} />
      <Route path="/real-time-monitoring" element={<RealTimeMonitoring />} />
      <Route path="/e-commerce-analytics" element={<EcommerceAnalytics />} />
      <Route path="/social-media-sentiment" element={<SocialMediaSentiment />} />
      <Route path="/energy-consumption-prediction" element={<EnergyConsumptionPrediction />} />
      <Route path="/climate-change-analysis" element={<ClimateChangeAnalysis />} />
    </Routes>
  );
};

export default AppRoutes;
