import {
  PowerMarketPrices,
  GenerationForecastAnalysis,
  OptimisedPowerAllocations,
  DSMRevenueAnalysis,
  WhatIfAnalysis,
  SettingsIcon,
  LogoutIcon,
} from "../../assets/index";
import "./style.css";

function SidebarSection({ title, items, isExpanded, activeRoute, onNavigate }) {
  const ICONS_MAP = {
    PowerMarketPrices,
    GenerationForecastAnalysis,
    OptimisedPowerAllocations,
    DSMRevenueAnalysis,
    WhatIfAnalysis,
    Settings: SettingsIcon,
    Logout: LogoutIcon,
  };
  return (
    <div className="tabs">
      {isExpanded && (
        <div className="label-with-line">
          <div className="horizontal-line" />
          <span className="side-nav-title">{title}</span>
        </div>
      )}

      {items.map(({ key, label, route, iconKey }) => {
        const isActive = route && activeRoute === route;

        return (
          <div
            key={key}
            className={`tab-${title.toLowerCase()} ${
              isActive ? "active" : ""
            } ${isExpanded ? "" : "side-bar-expanded"}`}
            onClick={
              route ? () => onNavigate(`/dashboard/${route}`) : undefined
            }
          >
            <img
              src={ICONS_MAP[iconKey]}
              width={24}
              height={24}
              alt={label}
              title={label}
            />
            {isExpanded && (
              <span className={`text-wrapper ${isActive ? "active" : ""}`}>
                {label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SidebarSection;
