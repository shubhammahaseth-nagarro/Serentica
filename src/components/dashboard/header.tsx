import { useLocation } from "react-router-dom";
import { TABS } from "../../constants";
import { Fragment } from "react";
import DateTimeWidget from "../dateTimeWidget";
import "./style.css";
import { NotificationIcon, SearchIcon } from "../../assets/index";
import { UserCard } from "../userCard";

function Header() {
  const location = useLocation();
  const headerContent = TABS[0].tabs.filter(
    (item) => item.route === location.pathname.split("/").pop()
  );

  return (
    <div className="header-container">
      <div>
        <div className="header-label">{headerContent[0].label}</div>
        <div className="header-sub-label">{headerContent[0].subLabel}</div>
      </div>
      <div className="header-sub-wrapper">
        <div>
          <DateTimeWidget />
        </div>
        <div>
          <img src={SearchIcon} width={40} height={40} alt="search" />
        </div>
        <div>
          <img
            src={NotificationIcon}
            width={40}
            height={40}
            alt="notification"
          />
        </div>
        <div>
          <UserCard />
        </div>
      </div>
    </div>
  );
}

export default Header;
