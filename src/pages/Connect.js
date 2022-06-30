import Card from "antd/lib/card/Card";
import Tooltip from "antd/lib/tooltip";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Connect = () => {
  const onClickIcon = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          fontFamily: "Dosis",
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: 50 }}>Let's Connect!</h1>
      </div>

      <Card
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
        }}
        bodyStyle={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <LinkedinOutlined
          onClick={() => {
            onClickIcon("https://www.linkedin.com/in/lim-pui-san-965a28ab/");
          }}
          style={{ fontSize: 40, margin: 10 }}
        />
        <GithubOutlined
          onClick={() => {
            onClickIcon("https://github.com/sunnyside88");
          }}
          style={{ fontSize: 40, margin: 10 }}
        />
        <Tooltip placement="bottomRight" title="puisanlim98@gmail.com">
          <MailOutlined
            style={{ fontSize: 40, margin: 10 }}
            onClick={() => (window.location = "mailto:puisanlim98@gmail.com")}
          ></MailOutlined>
        </Tooltip>
      </Card>
    </>
  );
};

export default Connect;
