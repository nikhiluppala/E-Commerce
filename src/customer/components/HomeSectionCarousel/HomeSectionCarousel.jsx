import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";


const HomeSectionCarousel = ({data, sectionName}) => {
  

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6.5 },
  };



  const items = data.slice(0, 20).map((item, index) => (
    <div key={index}>
      <HomeSectionCard product={item} />
    </div>
  ));

  return (
    <div className="lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-800 py-5 ">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
