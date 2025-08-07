import { useState, useEffect } from "react";
import { CollapseIcon, ExpandIcon, SerenticaLogo } from "../../assets/index";
import { useNavigate, useLocation } from "react-router-dom";
import { TABS } from "../../constants";
import "./style.css";
import SidebarSection from "./sidebarSection";
import Header from "./header";

function Dashboard({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activeRoute = location.pathname.split("/").pop();

  function handleCollapse() {
    setIsExpanded(!isExpanded);
    setIsHovered(false);
  }

  return (
    <div className="container">
      <div className={`nav-wrapper ${isExpanded ? "expanded" : "collapsed"}`}>
        <div className="inner-wrapper">
          <div className="top-section">
            <div
              className={`nav-header ${
                isExpanded ? "nav-header-expanded" : ""
              }`}
            >
              {isExpanded && (
                <div>
                  <img
                    src={SerenticaLogo}
                    width={100}
                    height={22}
                    alt="Logo"
                    title={"Serentica"}
                  />
                </div>
              )}
              {!isExpanded && (
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`${isHovered ? "side-nav-toggle" : ""} `}
                >
                  <img
                    src={isHovered ? ExpandIcon : SerenticaLogo}
                    width={isHovered ? 32 : 50}
                    height={isHovered ? 32 : 11}
                    alt="Logo"
                    title={isHovered ? "Toggle" : "Serentica"}
                  />
                </div>
              )}

              {isExpanded && (
                <div onClick={handleCollapse}>
                  <img src={CollapseIcon} width={35} height={35} alt="Logo" />
                </div>
              )}
            </div>
            {TABS.filter((s) => s.section === "GENERAL").map(
              ({ section, tabs }) => (
                <SidebarSection
                  key={section}
                  title={section}
                  items={tabs}
                  isExpanded={isExpanded}
                  activeRoute={activeRoute}
                  onNavigate={navigate}
                />
              )
            )}
          </div>

          <div
            className={`bottom-section ${
              isExpanded ? "bottom-section-expanded" : ""
            }`}
          >
            {TABS.filter((s) => s.section === "SETTINGS").map(
              ({ section, tabs }) => (
                <SidebarSection
                  key={section}
                  title={section}
                  items={tabs}
                  isExpanded={isExpanded}
                  activeRoute={activeRoute}
                  onNavigate={navigate}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="side-wrapper">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Dashboard;
