import Image from "next/image";
import logo from "../assets/logo.png";

const LeftSideBar = () => {
  return (
    <div>
      <div className="px-8 py-10">
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default LeftSideBar;
