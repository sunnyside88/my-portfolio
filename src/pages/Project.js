import { LinkOutlined } from "@ant-design/icons";
import { Row, Col, Tooltip } from "antd";
import Card from "antd/lib/card/Card";

const Project = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Team UI Mock Up"
            extra={
              <Tooltip placement="top" title="to Github">
                <a
                  href="https://github.com/sunnyside88/team-mockup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkOutlined />
                </a>
              </Tooltip>
            }
          >
            This is a static UI Teams Mockup site by using Ant Design
            components. View{" "}
            <a
              href="https://team-mockup.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="PyQT Mini Project"
            extra={
              <Tooltip placement="top" title="to Github">
                <a
                  href="https://github.com/sunnyside88/PyQt-Mini-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkOutlined />
                </a>
              </Tooltip>
            }
          >
            A python based mini program for calculating the number of pages of
            pdf files in a choosen directory.
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Concert Booking App"
            extra={
              <Tooltip placement="top" title="to Github">
                <a
                  href="https://github.com/sunnyside88/concertBookingApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkOutlined />
                </a>
              </Tooltip>
            }
          >
            A group assignment to create a concert booking web app prototype
            using Laravel framework.{" "}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
