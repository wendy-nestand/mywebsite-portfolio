import React from "react";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="footer border border-slate-700 text-white">
        <div className="container p-4 flex justify-center ">
          <p className="text-slate-600 flex items-center">
            Wendy Nestand @All rights reserved.
          </p>
        </div>
        <div>
          <p className="text-slate-600 flex justify-center items-center">
            wnestand.dev@gmail.com
          </p>
          <p className="text-slate-600 justify-center flex items-center">
            (774)-274-4452
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
