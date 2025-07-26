import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Hi! I’m Landon Williams, a forth-year Computer Science student at the University of Florida’s Honors College 
        with a minor in Business Administration. I’m passionate about building impactful tech solutions that bridge 
        innovation and real-world needs. Most recently, I interned at Oracle, where I led the development of a GenAI-powered 
        chatbot using Oracle Cloud, LangChain, Cohere, and vector search to help teams extract insights from large internal 
        documents. The solution was adopted by multiple teams and showcased to Oracle executives. Previously, I contributed 
        to Jacksonville’s $400M self-driving bus project through a technical project management internship at Miller Electric, 
        and I’ve led the development of projects like Fresh Watch, a grocery tracking app with AI meal suggestions, and 
        Research.uf, a centralized platform for student research opportunities. With experience in software development, 
        cloud technologies, and cross-functional collaboration, I enjoy solving meaningful problems at the intersection 
        of tech and business.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
