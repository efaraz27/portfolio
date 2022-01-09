import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useDeviceSize from "../../hooks/useDeviceSize";
import { switchMode } from "../../redux/action";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const dark = useSelector((state) => state.dark);
  const dispatch = useDispatch();
  const [width, height] = useDeviceSize();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Image
            src={dark ? "/logo.svg" : "/light/logo.svg"}
            alt="logo"
            height="39px"
            width="39px"
          />
        </div>
        {width > 500 ? (
          <div className="nav-links">
            <div className="nav-link">Projects</div>
            <div className="nav-link">Résumé</div>
            <div className="nav-link">Contact</div>
            <div className="nav-link" onClick={() => dispatch(switchMode())}>
              <Image
                src={dark ? "/sun-fill.svg" : "/light/moon-fill.svg"}
                alt="dark-light"
                height="24px"
                width="24px"
              />
            </div>
          </div>
        ) : (
          <div className="icons">
            <div className="icon switch" onClick={() => dispatch(switchMode())}>
              <Image
                src={dark ? "/sun-fill.svg" : "/light/moon-fill.svg"}
                alt="dark-light"
                height="24px"
                width="24px"
              />
            </div>
            <div
              className="icon"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Image
                src={
                  dark ? "/hamburger-filled.svg" : "/light/hamburger-filled.svg"
                }
                alt="logo"
                height="24px"
                width="24px"
              />
            </div>
          </div>
        )}
        {open && (
          <Hamburger>
            <div className="menu-item">Projects</div>
            <div className="menu-item">Résumé</div>
            <div className="menu-item">Contact</div>
          </Hamburger>
        )}
      </div>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          padding: 40px 0px;
          margin-bottom: 117px;
          position: relative;
        }
        .nav-links {
          display: flex;
        }
        .nav-link {
          margin: 0px 15px;
          cursor: pointer;
        }
        .icons {
          display: flex;
        }
        .icon {
          width: 24px;
          height: 24px;
          position: relative;
        }
        .menu-item {
          display: inline-block;
          width: 100%;
          color: white;
        }
        .menu-item:hover {
          background-color: #201f1f;
        }
        .switch{
          margin-right: 20px;
        }
        @media only screen and (max-width: 800px) {
          .navbar {
            margin-bottom: 30px;
          }
        }
        @media only screen and (max-width: 800px) {
          .navbar {
            margin-bottom: 0px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
