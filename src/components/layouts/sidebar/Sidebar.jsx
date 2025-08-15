import { FaCalendar, FaHome, FaMoneyCheck } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import { auth } from "../../firebase/firebase.config";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  // menu toggle
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const handleLogOut = () => {
    logOut(auth)
      .then(() => {
        console.log("User log out");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="bg-[#0e0d0d] w-[100vw] sm:w-auto py-2 sm:p-0">
        <button
          onClick={toggleNav}
          className="cursor-default bg-[#00DAC6] inline-flex items-center p-1 ms-3 text-sm text-red-500 border-2 border-[#00DAC6] rounded-md sm:hidden shadow-lg">
          <IoMenu className="text-black" />
        </button>
        {(toggleMenu || screenWidth > 640) && (
          <aside
            id="default-sidebar"
            className="fixed sm:static top-0 left-0 z-40 w-18 sm:w-80 h-screen"
            aria-label="Sidebar">
            <div className="h-full px-2 lg:py-4 overflow-y-auto bg-[#1B1B1B]">
              <div className="hidden sm:flex flex-col justify-center items-center d-10">
                <div className="rounded-[100%]  text-[#00DAC6] p-2">
                  <CgProfile className="w-24 h-24" />
                </div>
                <div className="text-2xl text-[#D8FFFB] font-semibold py-2">
                  Md Rhihan
                </div>
                <div className="text-2xl font-semibold py-2"></div>
              </div>
              <div className="sm:hidden flex justify-end">
                <button
                  onClick={toggleNav}
                  className="p-1 border-2 bg-[#00DAC6] border-[#00DAC6] rounded-md my-4">
                  <IoMdClose className="text-black" />
                </button>
              </div>
              <ul className="space-y-2 lg:font-medium">
                <li>
                  <Link
                    to="/dashboard"
                    className="flex items-center p-2 text-[#D8FFFB]  rounded-sm hover:bg-[#3C3C3C] hover:text-[#00DAC6] ">
                    <FaHome className="w-6 h-6" />
                    <span className="ms-3">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expenses"
                    className="flex items-center p-2 text-[#D8FFFB]  rounded-sm hover:bg-[#3C3C3C] hover:text-[#00DAC6] ">
                    <FaMoneyCheck className="w-6 h-6" />
                    <span className="ms-3">My Expenses</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="/calendar"
                    className="flex items-center p-2 text-[#D8FFFB]  rounded-sm hover:bg-[#3C3C3C] hover:text-[#00DAC6] ">
                    <FaCalendar className="w-6 h-6" />
                    <span className="ms-3">Calendar</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="w-full flex  p-2flex items-center p-2 text-[#D8FFFB]  rounded-sm hover:bg-[#3C3C3C] hover:text-[#00DAC6] ">
                    <IoLogOut className="w-6 h-6" />
                    <span className="ms-3">Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
