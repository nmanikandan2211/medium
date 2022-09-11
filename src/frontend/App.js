import { Routes, Route } from "react-router-dom";
import NewStory from "./pages/NewStory/NewStory";
import MyBlogs from "./pages/MyBlogs/MyBlogs";
import Blog from "./components/Blog/Blog";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Rightbar from "./components/Rightbar/Rightbar";
import "./App.css";
import { ConnectButton } from "web3uikit";
import logo from "../asset/images/medium.png";
import { useMoralis } from "react-moralis";

const App = () => {
  const { isAuthenticated } = useMoralis();

  return (
    <>
      {isAuthenticated ? (
        <div className="App">
          <div className="sideBar">
            <Sidebar />
          </div>
          <div className="mainWindow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newStory" element={<NewStory />} />
              <Route path="/myBlogs" element={<MyBlogs />} />
              <Route path="/blog/:url" element={<Blog />} />
            </Routes>
          </div>
          <div className="rightBar">
            <Rightbar />
          </div>
        </div>
      ) : (
        <div className="unAuth">
          <img src={logo} alt="logo" height="200px" />
          <ConnectButton />
        </div>
      )}
    </>
  );
};

export default App;
