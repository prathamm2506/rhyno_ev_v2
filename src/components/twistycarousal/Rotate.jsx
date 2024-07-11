import * as React from "react";

function Rotate() {
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
            <div className="mt-24 text-4xl font-semibold tracking-wider leading-10 text-yellow-500 uppercase max-md:mt-10 max-md:max-w-full">
              About Us
            </div>
            <div className="mt-9 text-base tracking-wider leading-7 text-justify capitalize max-md:max-w-full">
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
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start text-white max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fd40152457ae5bdeb5b620171fe3ebbc1994ea5a98122a454e2d403b8230291?"
              className="self-end max-w-full aspect-[0.97] w-[658px]"
            />
            <div className="flex gap-5 px-5 mt-64 max-md:flex-wrap max-md:mt-10">
              <div className="my-auto text-5xl font-black tracking-widest leading-[54.45px] max-md:text-4xl">
                75%
              </div>
              <div className="flex-auto text-base tracking-wider leading-6 capitalize">
                Students are 75% more likely to enroll in a degree program that
                offers industry micro-credentials
              </div>
            </div>
            <div className="flex gap-5 px-5 mt-14 max-md:mt-10">
              <div className="my-auto text-5xl font-black tracking-widest leading-[54.45px] max-md:text-4xl">
                88%
              </div>
              <div className="flex-auto text-base tracking-wider leading-6 capitalize">
                of employers believe that Professional Certificates strengthen a
                candidate’s job application.
              </div>
            </div>
            <div className="flex gap-5 px-5 mt-20 max-md:flex-wrap max-md:mt-10">
              <div className="text-5xl font-black tracking-widest leading-[54.45px] max-md:text-4xl">
                90%
              </div>
              <div className="flex-auto text-base tracking-wider leading-6 capitalize">
                of students agree that a Professional Certificate will help them
                secure a job.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rotate;

