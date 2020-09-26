import React from "react";

import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function WelcomePage() {
  return (
    <>
      <Header />
      <section>
        <div className="secondDiv">
          <video className="videoCon" autoPlay loop muted>
            <source
              src="https://res.cloudinary.com/dlqxvzqrh/video/upload/v1601095355/Saigon_-_14385_gr0xau.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="firstDiv">
          <div className="firstChild">
            <h1>Logs is where you store data</h1>
            <p>
              With account in LOGSen, you can save visited location with
              Geolocation, comments and picture to our database and access it on
              a click.
            </p>
          </div>
          <div className="secondChild">
            <h3>Easily accesible from anywhere</h3>
            <Link to="/register">
              <p className="welcomeParaForReg">
                Click here to create an account
              </p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default WelcomePage;
