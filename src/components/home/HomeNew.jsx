import * as React from "react";
import IMG1 from '../../assets/home.png'

function HomeNew() {
  return (
    <div className="flex overflow-hidden relative flex-col items-center px-16 pt-20 mt-28 pb-10 min-h-[575px] max-md:px-5">
      <img
        loading="lazy"
        src={IMG1}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative gap-5 justify-between mt-96 w-full max-w-[1219px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2bfe87e1e22ff0cdb4bd0bcd6d88649d8b8626892878d588b902923151c9b92?"
          className="shrink-0 aspect-[0.22] w-[22px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bae231d05a442bf502ef160238497cdfb9582ee515a8a06fc460e0b895f7e75?"
          className="shrink-0 self-end mt-16 max-w-full aspect-[3.45] w-[119px] max-md:mt-10"
        />
      </div>
    </div>
  );
}

export default HomeNew;



