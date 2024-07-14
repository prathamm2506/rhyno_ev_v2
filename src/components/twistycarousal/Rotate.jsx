import React, { useEffect, useState, useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion"; // Add this import statement
import { useSwipeable } from 'react-swipeable';
import './Twistycarousal.css'; // Make sure to include the styles in a separate CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faCar, faMapMarkerAlt, faSmile, faWrench } from '@fortawesome/free-solid-svg-icons';

function Rotate() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  // Listen for resize events
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-130%"]);

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      // Swipe left logic
    },
    onSwipedRight: () => {
      // Swipe right logic
    },
  });

  const n = 5;
  const [current, setCurrent] = useState(0);
  const circleContainerRef = useRef(null);

  const texts = [
    'Equipped with advanced Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhynos longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesnt stop there—our technology goes the extra mile to ensure the batterys lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!',
    'Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet, mud and sand roads.',
    'Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind which provides precise information about the remaining battery.',
    'Rhyno is more than just a mode of transportation. It’s an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity! This experience is enhanced further with lower CG, which makes your Rhyno ultra-lightweight as if you are riding on a feather!',
    'We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, spending weeks and months at service stations for complex repairs. We took the bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not take a test drive? Click here to locate your nearest dealership or book a test drive at your home!',
  ];
  const headings = [
    'LFP Battery',
    'Wider Tyres',
    'Range Prediction',
    'Extraordinary Experience',
    'Rugged and Simple design'
  ];
  const icons = [
    faBatteryFull,
    faCar,
    faMapMarkerAlt,
    faSmile,
    faWrench
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!targetRef.current) return;

      const sectionPosition = targetRef.current.offsetTop;
      const sectionHeight = targetRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight * 0.6;
      const isComponentInView = scrollPosition >= sectionPosition && scrollPosition < sectionPosition + sectionHeight;

      if (isComponentInView) {
        const scrollIndex = Math.floor(((scrollPosition - sectionPosition) / sectionHeight) * n);
        setCurrent(scrollIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [n]);

  useEffect(() => {
    const angle = -220 / n;
    const wC = circleContainerRef.current.clientWidth;

    for (let i = 0; i < n; i++) {
      const dist = Math.round(200 + angle * i - angle * current);
      const item = document.querySelector(`.circle-container > .item:nth-of-type(${i + 1})`);
      const isVisible = dist <= 280 && dist >= 110; // Check if within 180-degree arc
      item.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      item.style.transform = `rotate(${dist}deg) translate(${wC / 2}px) rotate(-${dist}deg)`;
      item.style.opacity = isVisible ? 1 : 0; // Hide items out of the 180-degree arc
    }
  }, [current, n]);

  return (
    <div className='section' ref={targetRef}>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 container1">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 mt-7 text-white max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-extralight leading-[50px] tracking-[12.3px] max-md:max-w-full">
              WHAT MAKES RHYNO
            </div>
            <div className="mt-32 text-4xl font-medium tracking-wider leading-10 text-yellow-500 max-md:mt-10 max-md:max-w-full">
              {headings[current]}
            </div>
            <div className="shrink-0 mt-7 h-px bg-white border border-white border-solid max-md:max-w-full" />
            <div className="mt-6 text-base leading-8 text-justify capitalize max-md:max-w-full">
              {texts[current]}
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start text-white max-md:mt-10 max-md:max-w-full">
            {/* <div className="col"> */}
            <ul className="circle-container" ref={circleContainerRef}>
              {icons.map((icon, index) => (
                <li key={index} className="item">
                  <a
                    href="#"
                    className={current === index ? 'active1' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrent(index);
                    }}
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Rotate;
