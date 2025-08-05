import { ExpandIcon } from "../../assets/index";
import "./style.css";

export default function UserCard() {
  return (
    <div className="user-card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
        alt="Profile"
        className="user-avatar"
      />
      <span className="user-name">Ameer S</span>
      <img src={ExpandIcon} alt="Expand" className="expand-icon" />
    </div>
  );
}
