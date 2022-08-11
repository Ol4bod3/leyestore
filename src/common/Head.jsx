import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone cursor"></i>
            <label className=" cursor">+2349152348687</label>
            <i className="fa fa-envelope  cursor"></i>
            <label className=" cursor">olaleyeolabode121@gamil.com</label>
          </div>
          <div className="right row RText">
            <label className=" cursor">Theme FAQ's</label>
            <span>🇳🇬</span>
            <label htmlFor=""> EN</label>
            <span>🇳🇬</span>
            <label htmlFor=""> NGN</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
