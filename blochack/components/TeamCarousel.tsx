"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { teamMembers } from "@/components/sections/Team";

const TeamCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {teamMembers.map((member, index) => (
        <div key={index} className="p-4">
          <Image
            src={member.imageUrl}
            alt={`Photo of ${member.name}`}
            width={300}
            height={300}
            className="rounded-3xl"
          />
          <h1 className="mt-3 text-2xl font-bold">{member.name}</h1>
          <p>{member.role}</p>
          
        </div>
      ))}
    </Slider>
  );
};

export default TeamCarousel;
