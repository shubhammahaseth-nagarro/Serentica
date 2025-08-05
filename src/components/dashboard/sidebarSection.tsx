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
          <span>{title}</span>
        </div>
      )}

      {items.map(({ key, label, route, iconKey }) => {
        const isActive = route && activeRoute === route;

        return (
          <div
            key={key}
            className={`tab-${title.toLowerCase()} ${isActive ? "active" : ""}`}
            onClick={
              route ? () => onNavigate(`/dashboard/${route}`) : undefined
            }
          >
            <img src={ICONS_MAP[iconKey]} alt={label} title={label} />
            {isExpanded && <span>{label}</span>}
          </div>
        );
      })}
    </div>
  );
}

export default SidebarSection;
