import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import { services } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4  text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a full stack developer, I have a comprehensive understanding of the
        software development process, from the front-end to the back-end. I 'm
        skilled in various programming languages and frameworks such as
        JavaScript, TypeScript, Ruby, Node.js, Express, React, Tailwind CSS,
        PostgreSQL, and many others. I have experience working collaboratively
        with a team as well as independently, demonstrating my ability to
        communicate effectively and manage my time efficiently. My expertise in
        various technologies makes me a valuable asset to many project, and my
        versatility allows me to adapt to new challenges with ease.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={index} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
