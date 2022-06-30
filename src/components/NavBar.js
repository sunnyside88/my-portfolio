import { Menu } from "antd";
import {
  HomeOutlined,
  ToolOutlined,
  BulbOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const NavBar = ({ setActiveKey }) => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
      <Menu.Item
        key="home"
        icon={<HomeOutlined />}
        onClick={() => {
          setActiveKey(1);
        }}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="tools"
        icon={<ToolOutlined />}
        onClick={() => {
          setActiveKey(2);
        }}
      >
        Tools
      </Menu.Item>
      <Menu.Item
        key="connect"
        icon={<MessageOutlined />}
        onClick={() => {
          setActiveKey(3);
        }}
      >
        Connect
      </Menu.Item>
      <Menu.Item
        key="blog"
        icon={<BulbOutlined />}
        onClick={() => {
          setActiveKey(4);
        }}
      >
        Blog
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
