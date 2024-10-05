import React, { useEffect } from "react";
import { gsap, Linear } from "gsap";
import "./NotFound.css";

const NotFound = () => {
  useEffect(() => {
    let t1 = gsap.timeline();
    let t2 = gsap.timeline();
    let t3 = gsap.timeline();

    t1.to(".cog11900", {
      transformOrigin: "50% 50%",
      rotation: "+=360",
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8,
    });

    t2.to(".cog21900", {
      transformOrigin: "50% 50%",
      rotation: "-=360",
      repeat: -1,
      ease: Linear.easeNone,
      duration: 8,
    });

    t3.fromTo(
      ".wrong-para1900",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: {
          repeat: -1,
          yoyo: true,
        },
      }
    );
  }, []);

  return (
    <div className="container1900">
      <h1 className="first-four1900">4</h1>
      <div className="cog-wheel11900">
        <div className="cog11900">
          <div className="top1900"></div>
          <div className="down1900"></div>
          <div className="left-top1900"></div>
          <div className="left-down1900"></div>
          <div className="right-top1900"></div>
          <div className="right-down1900"></div>
          <div className="left1900"></div>
          <div className="right1900"></div>
        </div>
      </div>

      <div className="cog-wheel21900">
        <div className="cog21900">
          <div className="top1900"></div>
          <div className="down1900"></div>
          <div className="left-top1900"></div>
          <div className="left-down1900"></div>
          <div className="right-top1900"></div>
          <div className="right-down1900"></div>
          <div className="left1900"></div>
          <div className="right1900"></div>
        </div>
      </div>
      <h1 className="second-four1900">4</h1>
      <p className="wrong-para1900">Uh Oh! Page not found!</p>
    </div>
  );
};

export default NotFound;
