import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import './PreLoader.css';
import Logo from "../../assets/Rhyno Logo Italic Transperant.png";

const PreLoader = ({ onComplete }) => {

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to('.header > h1', {
            duration: 2,
            top: 0,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.3,
            },
            onComplete: () => {
                document.querySelectorAll('.header > h1').forEach(el => {
                    el.classList.add('filled');
                });
            }
        }).fromTo('.pre-loader-img img', {
            duration: 1,
            opacity: 0,
            scale: 3,
            y: 0,
            ease: 'power4.out',
        },
            {
                delay: 1.5,
                opacity: 1,
                scale: 1,
                y: '-12%',

            }).to('.pre-loader', {
                delay: 1,
                duration: 2,
                y: '-120%',
                ease: 'power2.inOut',
                borderRadius: '45%',
                onComplete: () => {
                    setTimeout(onComplete, 100);
                }
            });

    }, [onComplete]);

    return (
        <div className="pre-loader">
            <div className="pre-loader-container">
                <div className="pre-loader-header">
                    {headers.map((header, index) => (
                        <div className={`header ${header.concat ? 'concat' : ''}`} key={index}>
                            {header.texts.map((text, i) => (
                                <React.Fragment key={i}>
                                    <h1 data-text={text.dataText}>{text.content}</h1>
                                    {i < header.texts.length - 1 && <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                                </React.Fragment>
                            ))}
                            <div className="header-wrapper"></div>
                        </div>
                    ))}
                </div>
                <div className="pre-loader-img">
                    <img src={Logo} alt="Rhyno" />
                </div>
            </div>
        </div>
    );
}

const headers = [
    { texts: [{ content: "Let's Elevate" }] },
    { texts: [{ content: "Your Ride Experience" }] },
    { concat: true, texts: [{ content: "with" }, { content: "Rhyno", dataText: "Rhyno" }] },
    { texts: [{ content: "Where Superiority" }] },
    { concat: true, texts: [{ content: "Meets" }, { content: "Style", dataText: "Style" }] }
];

export default PreLoader;
