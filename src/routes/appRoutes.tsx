import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { ProtectedRoute } from "../components/auth/protectedRoute";
import { PowerMarketPrices } from "../pages/powerMarketPrices";
import { GenerationForecastAnalysis } from "../pages/generationForecastAnalysis";
import { OptimisedPowerAllocations } from "../pages/optimisedPowerAllocations";
import { DSMRevenueAnalysis } from "../pages/DSM&RevenueAnalysis";
import { WhatIfAnalysis } from "../pages/whatIfAnalysis";
// import LandingPage from "@/pages";
import Login from "../pages/auth/login";
// import Register from "@/pages/auth/register";
// import ForgotPassword from "@/pages/auth/forgot-password";
// import MarketPrices from "@/pages/dashboard/market-prices";
// import ActualPrices from "@/pages/dashboard/actual-prices";
// import Settings from "@/pages/dashboard/settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}

        <Route path="/auth">
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/dashboard">
          <Route
            path="power-market-prices"
            element={
              <ProtectedRoute>
                <PowerMarketPrices />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="generation-forecast-analysis"
            element={
              <ProtectedRoute>
                <GenerationForecastAnalysis />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="optimised-power-allocations"
            element={
              <ProtectedRoute>
                <OptimisedPowerAllocations />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="DSM-revenue-analysis"
            element={
              <ProtectedRoute>
                <DSMRevenueAnalysis />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="what-if-analysis"
            element={
              <ProtectedRoute>
                <WhatIfAnalysis />
              </ProtectedRoute>
            }
          ></Route>
        </Route>
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
