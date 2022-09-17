const Subscribe = () => {
  return (
    <div className="pb-5" style={{ backgroundColor: "#F0F0F0" }}>
      <h4 className="subText" style={{ fontSize: "2vw", paddingTop: "70px" }}>
        Subscribe our newsletter to be notified when it’ll be live.
      </h4>
      <div className="input-group pb-5 pt-3 w-50 m-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Email address"
          aria-label="Email address"
          aria-describedby="button-addon2"
          style={{ backgroundColor: "#F0F0F0" }}
        />
        <button className="btn btn-dark" type="button" id="button-addon2">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
