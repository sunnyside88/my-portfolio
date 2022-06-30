import Card from "antd/lib/card/Card";
import { Row, Col } from "antd/lib/grid";
import Divider from "antd/lib/divider";
import Image from "antd/lib/image";

const Tool = () => {
  return (
    <>
    <div>
        <Divider orientation="left">Programming</Divider>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              />
              <p>JavaScript</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://img.icons8.com/color/48/000000/python--v1.png"
              />
              <p>Python</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
              />
              <p>Java</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://img.icons8.com/officel/30/000000/php-logo.png"
              />
              <p>php</p>
            </Card>
          </Col>
        </Row>
      </div>
      <Divider orientation="left">Libraries/Frameworks</Divider>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://img.icons8.com/color/48/000000/nodejs.png"
              />
              <p>Node.js</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://img.icons8.com/ultraviolet/40/000000/react--v1.png"
              />
              <p>React.js</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://img.icons8.com/color/48/000000/redux.png"
              />
              <p>Redux</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png"
              />
              <p>Vue.js</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
              />
              <p>Express.js</p>
            </Card>
          </Col>
        </Row>
      </div>
      <Divider orientation="left">Platforms</Divider>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://img.icons8.com/color/48/000000/git.png"
              />
              <p>Git</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://img.icons8.com/color/48/000000/mongodb.png"
              />
              <p>MongoDB</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://img.icons8.com/color/48/000000/firebase.png"
              />
              <p>Firebase</p>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              bordered={true}
              bodyStyle={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Dosis",
              }}
            >
              <Image
                width={50}
                src="https://img.icons8.com/color/48/000000/heroku.png"
              />
              <p>Heroku</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
      
    </>
  );
};

export default Tool;
