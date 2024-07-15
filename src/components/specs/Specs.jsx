import React, { useEffect } from 'react'
import IMG1 from '../../assets/spec.png'


const Spec = () => {
    return (
        <div>
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-xl font-bold tracking-widest text-right text-white max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 px-5 max-md:flex-wrap">
                  <div className="flex-auto my-auto">
                    <span className="font-bold">Comfort</span>{" "}
                    <span className="font-light">Indulge in comfort,revel in</span>
                    <br />
                    <span className="font-light">
                      stability, and embrace safty.{" "}
                    </span>
                  </div>
                  <div className="shrink-0 bg-zinc-300 h-[49px] w-[49px]" />
                </div>
                <div className="flex gap-5 self-end px-5 mt-11 max-md:flex-wrap max-md:mt-10">
                  <div className="flex-auto my-auto">
                    Speed{" "}
                    <span className="font-light">Experience the thrill with</span>
                    <br />
                    <span className="font-light">Max speed soaring at kmph.</span>
                  </div>
                  <div className="shrink-0 bg-zinc-300 h-[49px] w-[49px]" />
                </div>
                <div className="flex gap-5 px-5 mt-11 max-md:flex-wrap max-md:mt-10">
                  <div className="flex-auto my-auto">
                    Charge <span className="">Revitalize your ride with </span>
                    <br />
                    <span className="">swift 4-hour (12A) charge.</span>
                  </div>
                  <div className="shrink-0 bg-zinc-300 h-[49px] w-[49px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src={IMG1}
                      className="grow w-full aspect-[0.55] max-md:mt-4"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-xl font-bold tracking-widest text-white max-md:mt-10">
                      <div className="flex gap-4 px-5">
                        <div className="shrink-0 bg-zinc-300 h-[49px] w-[49px]" />
                        <div className="flex-auto my-auto">
                          <span className="font-bold">Power</span>{" "}
                          <span className="font-light">
                            Elevate your journey with
                          </span>
                          <br />
                          <span className="font-light">
                            the dynamic motor power.
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-4 px-5 mt-12 max-md:mt-10">
                        <div className="shrink-0 bg-zinc-300 h-[49px] w-[49px]" />
                        <div className="flex-auto my-auto">
                          Battery
                          <span className="font-light"> kWh illuminates </span>
                          <br />
                          <span className="font-light">
                            sustainability in small packages.
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-4 px-5 mt-11 max-md:mt-10">
                        <div className="shrink-0 self-start bg-zinc-300 h-[49px] w-[49px]" />
                        <div className="flex-auto">
                          Range{" "}
                          <span className="font-light">Unleash freedom with</span>
                          <br />
                          <span className="font-light">
                            ranges stretching to an{" "}
                          </span>
                          <br />
                          <span className="font-light">electrifying km.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Spec