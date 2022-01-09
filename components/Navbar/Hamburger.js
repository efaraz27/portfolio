import Image from "next/image";
import { useSelector } from "react-redux";
import { useState } from "react";
const Hamburger = (props) => {
  const dark = useSelector((state) => state.dark);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="menu-container">{props.children}</div>
      <style jsx>{`
        .menu-container {
          position: absolute;
          top: 70px;
          right: 0;
          background-color: rgba(41, 40, 40, 1);
          border: 2px solid rgba(22, 21, 21, 1);
          border-radius: 4px;
          width: 100px;
          z-index: 9999999;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: column;
          padding: 10px 0px;
          animation: fade 0.5s;
        }
        @keyframes fade {
          from {
            opacity: 0%;
          }
          to {
            opacity: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Hamburger;
