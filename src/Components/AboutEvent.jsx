import React from 'react';
import { CiHeart } from "react-icons/ci";
import { GrUserNew } from "react-icons/gr";
import { IoMailOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";

const AboutEvent = () => {
  const chooseUs = [
    {
      icons: <CiHeart />,
      title: "Get Inspired",
      description: "Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.",
    },
    {
      icons: <GrUserNew />,
      title: "Meet New Faces",
      description: "Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.",
    },
    {
      icons: <IoMailOutline />,
      title: "Fresh Tech Insights",
      description: "Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.",
    },
    {
      icons: <CiTrophy />,
      title: "Network Session",
      description: "Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.",
    },
    {
      icons: <FaRegMessage />,
      title: "Free Swags",
      description: "Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.",
    },
  ]
  return (
    <section id="about" className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">About This Event</h2>
      <p className="w-2/3 mx-auto text-lg">
        Join us for an exciting conference that brings together professionals from around the globe. Learn about the latest trends, technologies, and innovations that are shaping the future.
      </p>
      <section className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 px-4 text-white my-10'>
        {
          chooseUs.map((c) =>
            <div className='flex flex-col items-center justify-center bg-primary hover:bg-secondary duration-300 cursor-pointer py-8 px-4 rounded-md'>
              <span className='text-8xl'>{c.icons}</span>
              <h3 className='font-semibold text-lg'>{c.title}</h3>
              <p className='font-light'>{c.description}</p>
            </div>
          )
        }
      </section>
    </section>
  );
};

export default AboutEvent;
