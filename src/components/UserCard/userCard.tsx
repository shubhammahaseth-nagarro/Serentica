import { ArrowIcon } from "../../assets/index";
import "./style.css";

export default function UserCard() {
  return (
    <div className="user-card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
        alt="Profile"
        width={30}
        height={30}
        className="user-name"
      />
      <span className="user-card-title">Admin User</span>
      <img
        src={ArrowIcon}
        alt="arrow"
        className="arrow-icon"
        width={25}
        height={25}
      />
    </div>
  );
}
