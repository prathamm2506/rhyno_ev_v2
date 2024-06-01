import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
// import { Link } from 'react-router-dom'

const BuyNow = () => {

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.btn').classList.add('animate');
    }, 6*300);
  }, []);

  return (
    <div>
      <button className="btn22"><a href="https://wa.me/9023987528" target='_blank'> Order Now </a></button>
    </div>
  )
}

export default BuyNow
