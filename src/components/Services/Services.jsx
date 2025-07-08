import React from "react";
import { motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee3 from "../../assets/coffee/coffee3.png";
const ServicesDate = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle:
      "Bold and intense, perfect for purists who savor every deep, roasted sip.",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Hot Coffee",
    subtitle:
      "Warm, comforting, and energizing — a classic brew to kickstart your day.",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Cold Coffee",
    subtitle:
      "Chilled and refreshing with a smooth finish — your go-to for cool caffeine cravings.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4 ">
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
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
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Sourced with care, brewed to perfection — enjoy every sip of rich,
          aromatic coffee crafted just for you.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {ServicesDate.map((service) => (
          <motion.div
            variants={cardVariants}
            className="items-center p-4 space-y-6"
          >
            <img
              src={service.image}
              alt={service.title}
              className="img-shadow2 w-[140px] sm:w-[180px] md:w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"

            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className="text-darkGray">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
