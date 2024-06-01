import React from 'react'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
// import { Link } from 'react-router-dom'

const BuyNow = () => {

  useGSAP(() => {
    gsap.fromTo('.btn22', {
      duration: 1,
      y: -30,
      scale: 0.8,
      ease: 'power3.out',
    },
    {
      y: 0,
      scale: 1,
      ease: 'power3.in',
    });
  }, []);

  return (
    <div>
      <button className="btn btn22"><a href="https://wa.me/9023987528" target='_blank'> Order Now </a></button>
    </div>
  )
}

export default BuyNow
