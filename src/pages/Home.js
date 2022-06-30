import { useState } from "react";
import NavBar from "../components/NavBar";
import About from "./About";
import Connect from "./Connect";
import Tool from "./Tool";

const Home = () => {
  const [activeKey, setActiveKey] = useState(1);
  const renderContent = () => {
    switch (activeKey) {
      case 1:
        return <About></About>;
      case 2:
        return <Tool></Tool>;
      case 3:
        return <Connect></Connect>;
      default:
        return "To be continued";
    }
  };
  return (
    <>
      <NavBar setActiveKey={setActiveKey}></NavBar>
      <div style={{ margin: "50px" }}>{renderContent(activeKey)}</div>
    </>
  );
};

export default Home;
