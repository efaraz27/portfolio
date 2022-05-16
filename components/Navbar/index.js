import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useDeviceSize from "../../hooks/useDeviceSize";
import { switchMode } from "../../redux/action";
import Hamburger from "./Hamburger";
import { Link } from "react-scroll";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

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
            <div className="nav-link">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                Projects
              </Link>
            </div>
            <div
              className="nav-link"
              // onClick={() => {
              //   openInNewTab(
              //     "https://drive.google.com/file/d/1tEd7QW73NxeSqTMuhOh4smIhfm8ytFZT/view"
              //   );
              // }}
            >
              <a href="https://docs.google.com/document/d/1wtVhJ-epnGNUCCfQbJT-KEyzSBjMiu09VzzvH4iBYhw/edit?usp=sharing">
                Résumé
              </a>
            </div>
            <div className="nav-link">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                Contact
              </Link>
            </div>
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
            <div
              className="menu-item"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                Projects
              </Link>
            </div>
            <div
              className="menu-item"
              onClick={() => {
                openInNewTab(
                  "https://drive.google.com/file/d/1tEd7QW73NxeSqTMuhOh4smIhfm8ytFZT/view"
                );
                setOpen(!open);
              }}
            >
              Résumé
            </div>
            <div
              className="menu-item"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                Contact
              </Link>
            </div>
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
        .switch {
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
