import PanelHeader from "./panelHeader";
import "./style.css";
export default function PowerPricePanel({ title, subTitle }) {
  return (
    <div className="power-price-panel-container">
      <PanelHeader title={title} subTitle={subTitle} />
      Power
    </div>
  );
}
