export const TABS = [
  {
    section: "GENERAL",
    tabs: [
      {
        key: "PowerMarketPrices",
        label: "Power Market Prices",
        route: "power-market-prices",
        iconKey: "PowerMarketPrices",
        subLabel: "View upcoming and real-time electricity prices at a glance.",
      },
      {
        key: "GenerationForecastAnalysis",
        label: "Generation Forecast Analysis",
        route: "generation-forecast-analysis",
        iconKey: "GenerationForecastAnalysis",
        subLabel:
          "Forecasted power generation insights for planning and optimization.",
      },
      {
        key: "OptimisedPowerAllocations",
        label: "Optimised Power Allocations",
        route: "optimised-power-allocations",
        iconKey: "OptimisedPowerAllocations",
        subLabel: "Smart allocation of energy based on forecasted needs.",
      },
      {
        key: "DSMRevenueAnalysis",
        label: "DSM Revenue Analysis",
        route: "DSM-revenue-analysis",
        iconKey: "DSMRevenueAnalysis",
        subLabel: "Insights into deviations, penalties, and revenue outcomes.",
      },
      {
        key: "WhatIfAnalysis",
        label: "What If Analysis",
        route: "what-if-analysis",
        iconKey: "WhatIfAnalysis",
        subLabel: "Analyze alternate scenarios and their impacts",
      },
    ],
  },
  {
    section: "SETTINGS",
    tabs: [
      { key: "Logout", label: "Logout", iconKey: "Logout" },
      { key: "Settings", label: "Settings", iconKey: "Settings" },
    ],
  },
];
