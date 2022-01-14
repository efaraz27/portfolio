import { useSelector } from "react-redux";
const Divider = () => {
  const dark = useSelector((state) => state.dark);
  return (
    <>
      {dark ? (
        <>
          <div className="divider"></div>
          <style jsx>{`
            .divider {
              width: 100%;
              height: 1px;
              background-color: rgba(255, 255, 255, 1);
              margin-top: 59px;
            }
          `}</style>
        </>
      ) : (
        <>
          <div className="divider"></div>
          <style jsx>{`
            .divider {
              width: 100%;
              height: 1px;
              background-color: rgba(0, 0, 0, 1);
              margin-top: 59px;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default Divider;
