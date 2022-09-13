import "./Sidebar.css";
import { useMoralis } from "react-moralis";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { MdPreview } from "react-icons/md";
import { Link } from "react-router-dom";

import logo from "../../../asset/images/m.png";

const Sidebar = () => {
  const { logout } = useMoralis();

  const logOut = async () => {
    await logout();
  };
  return (
    <>
      <div className="siderContent">
        <img className="logo" src={logo}></img>
        <div className="menu">
          <Link to="/" className="link">
            <div className="menuItems">
              <AiOutlineHome />
            </div>
          </Link>
          <Link to="/myBlogs" className="link">
            <div className="menuItems">
              <FiBookOpen />
            </div>
          </Link>
          <Link to="/newStory" className="link">
            <div className="menuItems">
              <MdPreview />
            </div>
          </Link>
        </div>
        <div className="logout" onClick={logOut}>
          <HiOutlineLogout />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
