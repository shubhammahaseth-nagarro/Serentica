import { DatePicker, Space, Upload, Button } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
import "./style.css";

export default function PanelHeader({ title, subTitle }) {
  const { RangePicker } = DatePicker;

  return (
    <div className="panel-header-container">
      <div>
        <div className="header-label">{title}</div>
        <div className="header-sub-label">{subTitle}</div>
      </div>
      {/* <div>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </div> */}
      <Space direction="vertical" size={12}>
        <RangePicker
          size="middle"
          onFocus={(_, info) => {
            console.log("Focus:", info.range);
          }}
          onBlur={(_, info) => {
            console.log("Blur:", info.range);
          }}
        />
      </Space>
    </div>
  );
}
