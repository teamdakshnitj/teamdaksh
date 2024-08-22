/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import coffee1 from "../../assets/coffee1.png";
import coffee2 from "../../assets/coffee3.png";

const servicesData = [
  {
    id: 1,
    title: "Black Coffee",
    image: coffee1,
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },

  {
    id: 2,
    title: "Hot Coffee",
    image: coffee2,
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },

  {
    id: 3,
    title: "Cold Coffee",
    image: coffee1,
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}

      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          eaque accusamus amet accusantium corrupti expedita deleniti, quisquam
          temporibus fugiat excepturi voluptatum aut molestiae praesentium
          provident, ea possimus, quasi tempore qui.
        </motion.p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div className="text-center p-4 space-y-6">
            <img
              src={service.image}
              alt=""
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className="text-darkGray">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
