import Image from "next/image";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const ContactBtn = (props) => {
  return (
    <>
      <a href={props.url}>
        <div
          className="btn-container"
          // onClick={() => {
          //   openInNewTab(props.url);
          // }}
        >
          <div className="icon">
            <Image
              src={props.icon}
              width="24px"
              height="24px"
              alt={props.alt}
            />
          </div>
          <div className="btn-txt">{props.txt}</div>
        </div>
      </a>
      <style jsx>{`
        .btn-container {
          display: flex;
          font-size: 16px;
          justify-content: center;
          align-items: center;
          border: 1px solid white;
          border-radius: 4px;
          max-width: 210px;
          height: 49px;
          padding: 12px 35px;
          margin-left: 12px;
          margin-bottom: 27px;
          opacity: 60%;
          transition: 0.25s;
          cursor: pointer;
          width: 210px;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        .btn-container:hover {
          opacity: 100%;
          background-color: rgba(255, 255, 255, 0.05);
        }
        .btn-container:active {
          transform: scale(98%);
        }
        .icon {
          margin-right: 9px;
        }
      `}</style>
    </>
  );
};

export default ContactBtn;
