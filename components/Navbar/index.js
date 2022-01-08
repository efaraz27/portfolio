import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { switchMode } from "../../redux/action";

const Navbar = () => {
  const dark = useSelector((state) => state.dark);
  const dispatch = useDispatch();
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
      </div>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          padding: 40px 0px;
          margin-bottom: 117px;
        }
        .nav-links {
          display: flex;
        }
        .nav-link {
          margin: 0px 15px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Navbar;
