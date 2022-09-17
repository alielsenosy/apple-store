import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="container text-center foot" style={{ padding: "40px" }}>
        <div className="row row-cols-4">
          <div className="col">
            <img src={img1} width={"45vw"} height={"70vh"} alt="" />
          </div>
          <div className="col">
            <img src={img2} width={"85vw"} height={"70vh"} alt="" />
          </div>
          <div className="col">
            <img src={img3} width={"80vw"} height={"70vh"} alt="" />
          </div>
          <div className="col">
            <img src={img4} width={"55vw"} height={"70vh"} alt="" />
          </div>
        </div>
      </div>
      <p
        className="footerText"
        style={{
          color: "whitesmoke",
          paddingBottom: "30px",
          marginBottom: "0px",
        }}
      >
        Copyright © 2022 - All rights reserved
      </p>
    </div>
  );
};

export default Footer;
