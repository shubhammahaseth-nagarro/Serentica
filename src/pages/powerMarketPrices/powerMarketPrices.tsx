import { PowerPricePanel } from "../../components/powerPricePanel";
import "./style.css";
function PowerMarketPrices() {
  return (
    <div className="power-market-price-container">
      <PowerPricePanel
        title={"Power Price Forecast"}
        subTitle={"Price by hour forecast"}
      />
      <PowerPricePanel
        title={"Actual Power Prices (IEX)"}
        subTitle={"Actual price by hour"}
      />
    </div>
  );
}

export default PowerMarketPrices;
