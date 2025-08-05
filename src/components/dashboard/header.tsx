import { useLocation } from "react-router-dom";
import { TABS } from "../../constants";
import { Fragment } from "react";
import DateTimeWidget from "../dateTimeWidget";
import "./style.css";
import { ExpandIcon } from "../../assets/index";
import { UserCard } from "../UserCard";

function Header() {
  const location = useLocation();
  const headerContent = TABS[0].tabs.filter(
    (item) => item.route === location.pathname.split("/").pop()
  );
  console.log(headerContent, "TABS");
  return (
    <div className="header-container">
      <div>
        <div>{headerContent[0].label}</div>
        <div>{headerContent[0].subLabel}</div>
      </div>
      <div className="header-sub-wrapper">
        <div>
          <DateTimeWidget />
        </div>
        <div>
          <img src={ExpandIcon} width={54} height={50} alt="expand" />
        </div>
        <div>
          <img src={ExpandIcon} width={54} height={50} alt="expand" />
        </div>
        <div>
          <UserCard />
        </div>
      </div>
    </div>
  );
}

export default Header;
