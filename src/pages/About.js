import Avatar from "antd/lib/avatar/avatar";
import Card from "antd/lib/card/Card";
import { Button } from "antd/lib/radio";
import { DownloadOutlined } from "@ant-design/icons";

const About = () => {
  const onClickResume = () => {
    const url =
      "https://drive.google.com/file/d/13LPujXEdWoqvre3hwYfnALB4zX3Ki9QW/view?usp=sharing";
    window.open(url, "_blank");
  };
  return (
    <>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Avatar
          size={200}
          src="https://media-exp1.licdn.com/dms/image/C5603AQGXmlFrCeN4-w/profile-displayphoto-shrink_800_800/0/1598684908920?e=1661990400&v=beta&t=gXPul_7n23DM_eFvLHGrQ5q9fs2NWejwPos2VUDeGZU"
        />
      </div>

      <Card
        style={{
          width: "100%",
          marginTop: 10,
        }}
        bodyStyle={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Dosis",
        }}
      >
        <h1 style={{ fontWeight: "bold" }}>Hi there, I'm Pui San</h1>
        <h2>Software Engineer | React Developer </h2>
        <h3>
          I'm a curious person. I pursue things based on what sparks my
          interest!
        </h3>
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="large"
          onClick={onClickResume}
        >
          Resume
        </Button>
      </Card>
    </>
  );
};

export default About;
