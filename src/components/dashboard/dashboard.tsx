import { useState } from "react";
import { SerenticaIcon, CollapseIcon, ExpandIcon } from "../../assets/index";
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

  return (
    <div className="container">
      <div className={`nav-wrapper ${isExpanded ? "expanded" : "collapsed"}`}>
        <div className="inner-wrapper">
          <div className="top-section">
            {!isExpanded && (
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <img
                  src={isHovered ? ExpandIcon : SerenticaIcon}
                  width={54}
                  height={50}
                  alt="Logo"
                  title={isHovered ? "Toggle" : "Serentica"}
                />
              </div>
            )}
            {isExpanded && (
              <div onClick={() => setIsExpanded(!isExpanded)}>
                <img src={CollapseIcon} width={54} height={50} alt="Logo" />
              </div>
            )}
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

          <div className="bottom-section">
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
