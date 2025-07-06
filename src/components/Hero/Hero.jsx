import { main } from "framer-motion/client";
import React from "react";
import BgImage from "../../assets/bg-slate.png";
import CoffeeMain from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 ">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-6xl font-bold leading-tight ml-14"
              >
                Sip in Style
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="realative z-10 space-y-4">
                  <h1 className="text-2xl">Black LifeStyle Lover,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Crafted for those who move with purpose. This tumbler blends
                    sleek design with everyday function perfect for your morning
                    brew, late-night grind, or anywhere in between. Stay bold.
                    Stay grounded.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25">
                  {" "}
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={CoffeeMain}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
              >
                {/* circle */}
              </motion.div>
              <div className="absolute -top-16 left-[250px] z-[1]">
                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.8,
                  }}
                  className="text-[140px] scale-125 font-bold text-darkGray/40 leading-none"
                >
                  Coffee Time
                </motion.h1>
              </div>
            </div>
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 "
              >
                <h1 className="opacity-0 text-6xl font-bold leading-tight ml-14">
                  Sip in Style
                </h1>
                <div className="relative">
                  <div className="realative z-10 space-y-4">
                    <h1 className="text-2xl">Strong brews. Stronger vibes!</h1>
                    <h1 className="text-sm opacity-55 leading-loose">
                      A sleek companion for your daily brew. Minimal, bold, and
                      built to keep you going in style.
                    </h1>
                  </div>
                  <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* sidebar */}
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-50"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                <div className="w-[1px] h-[70px] bg-white"></div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaGithub className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaLinkedin className="text-2xl" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
