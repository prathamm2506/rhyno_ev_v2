import * as React from "react";

function Rotate() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
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

  const x = useTransform(scrollYProgress, [0, 1], ["200%", "-130%"]);

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
  // const sectionRef = useRef(null);

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
  useEffect(() => {
    const handleScroll = () => {
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
    const angle = 360 / n;
    const wC = circleContainerRef.current.clientWidth;

    for (let i = 0; i < n; i++) {
      const dist = Math.round(630 + angle * i - angle * current);
      const item = document.querySelector(`.circle-container > .item:nth-of-type(${i + 1})`);
      item.style.transform = `rotate(${dist}deg) translate(${wC / 2}px) rotate(-${dist}deg)`;
    }
  }, [current, n]);
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 mt-7 text-white max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-extralight leading-[50px] tracking-[12.3px] max-md:max-w-full">
              WHAT MAKES RHYNO
            </div>
            <div className="mt-32 text-4xl font-medium tracking-wider leading-10 text-yellow-500 max-md:mt-10 max-md:max-w-full">
              LFP BATTERY
            </div>
            <div className="shrink-0 mt-7 h-px bg-white border border-white border-solid max-md:max-w-full" />
            <div className="mt-6 text-base leading-8 text-justify capitalize max-md:max-w-full">
              Equipped with advanced Lithium Iron Phosphate (LFP) batteries,
              renowned for their safety features—eliminating the risk of fire.
              These batteries boast a broader temperature range, ideal for the
              diverse Indian climate. Our technology enhances Rhyno’s longevity,
              complemented by an Active Balancing Smart Battery Management
              System (BMS) for extended life and reduced maintenance. Each
              battery undergoes rigorous waterproofing tests according to IP76
              standards. But it doesn’t stop there—our technology goes the extra
              mile to ensure the battery’s lasting durability. Connect with us
              to discover the thoughtful engineering behind our batteries!
            </div>
            {/* <div className="mt-24 text-4xl font-semibold tracking-wider leading-10 text-yellow-500 uppercase max-md:mt-10 max-md:max-w-full">
              About Us
            </div> */}
            {/* <div className="mt-9 text-base tracking-wider leading-7 text-justify capitalize max-md:max-w-full">
              Established in 2019 by an automotive engineer with a vision for
              sustainable and robust mobility solutions, RHYNO EV is not just a
              company; it's a collective effort of a dynamic team of young
              individuals passionately driving innovation in the electric
              vehicle industry. We believe in engineering solutions that solve
              problems.
              <br />
              <br />
              With our first product, we've taken a bold step to create
              something more than just a vehicle; it's a unique experience of
              elegance, comfort, and style, addressing the pitfalls of
              conventional electric scooters. Our design prioritizes safety,
              eliminating concerns of fires and ensuring a longer battery
              lifespan with our battery technology. Perfectly suited for fleet
              operators, especially in tourist-centric locations like Goa, our
              rugged yet aesthetically appealing scooters are engineered for
              longevity and reliability. Join us as we pioneer a new era in
              sustainable and dependable electric transportation.
            </div> */}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start text-white max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fd40152457ae5bdeb5b620171fe3ebbc1994ea5a98122a454e2d403b8230291?"
              className="self-end max-w-full aspect-[0.97] w-[600px] mr-3"
            />
            {/* <div className="flex gap-5 px-5 mt-64 max-md:flex-wrap max-md:mt-10">
              <div className="my-auto text-5xl font-black tracking-widest leading-[54.45px] max-md:text-4xl">
                75%
              </div>
              <div className="flex-auto text-base tracking-wider leading-6 capitalize">
                Students are 75% more likely to enroll in a degree program that
                offers industry micro-credentials
              </div>
            </div> */}
            {/* <div className="flex gap-5 px-5 mt-14 max-md:mt-10">
              <div className="my-auto text-5xl font-black tracking-widest leading-[54.45px] max-md:text-4xl">
                88%
              </div>
              <div className="flex-auto text-base tracking-wider leading-6 capitalize">
                of employers believe that Professional Certificates strengthen a
                candidate’s job application.
              </div>
            </div> */}
            {/* <div className="flex gap-5 px-5 mt-20 max-md:flex-wrap max-md:mt-10">
              <div className="text-5xl font-black tracking-widest leading-[54.45px] max-md:text-4xl">
                90%
              </div>
              <div className="flex-auto text-base tracking-wider leading-6 capitalize">
                of students agree that a Professional Certificate will help them
                secure a job.
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rotate;

