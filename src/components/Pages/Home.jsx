import React from 'react';
import { motion } from 'framer-motion';
import { Hero, Universities, Courses, World, Success, FAQ, Footer } from "../Home Components";
import { Card } from '../Home Components/Card';
import courseImage from '../../assets/images/Courses/image.png';
import courseImage1 from '../../assets/images/Courses/image1.png';
import courseImage2 from '../../assets/images/Courses/image2.png';
import why from '../../assets/images/Why/why.png';
import why1 from '../../assets/images/Why/why1.png';
import why2 from '../../assets/images/Why/why2.png';

const fadeInOnScroll = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const rotateOnScroll = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const Home = () => {
  return (
    <>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeInOnScroll}>
        <Hero temp={true} />
      </motion.div>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeInOnScroll}>
        <Universities />
      </motion.div>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}>
        <Courses 
          heading="My Popular Courses" 
          subhead="Top courses mentored by expert educators for guaranteed success."
          gradient="linear-gradient(#bad4ef, #c6d9ef)"
          cards={[
            <motion.div key={1} variants={scaleIn}>
              <Card imgsrc={courseImage} Heading="GRE: Graduate Record Examination" description="Master the GRE with in-depth lessons, test-taking techniques, and adaptive learning." />
            </motion.div>,
            <motion.div key={2} variants={scaleIn}>
              <Card imgsrc={courseImage1} Heading="GMAT: Graduate Management Admission Test" description="Boost your GMAT score with expert guidance and practice tests." />
            </motion.div>,
            <motion.div key={3} variants={scaleIn}>
              <Card imgsrc={courseImage2} Heading="SAT: Scholastic Assessment Test" description="Ace the SAT with detailed study materials and strategic learning." />
            </motion.div>
          ]}
        />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}>
        <Courses 
          heading="Why You Should Choose MyTutee?" 
          subhead="Reach Your Goals with Guidance from Expert Instructors and Premium Resources"
          gradient="linear-gradient( #c6d9ef,#bad4ef)"
          cards={[
            <motion.div key={1} variants={rotateOnScroll}>
              <Card imgsrc={why} color="none" alignText="center" subColor="#5F5B5B" imgW="auto" shadow="none" Heading="BRILLIANT INSTRUCTORS" description="Our expert instructors tailor their teaching to your learning style for a personalized, impactful experience." />
            </motion.div>,
            <motion.div key={2} variants={rotateOnScroll}>
              <Card imgsrc={why1} color="none" alignText="center" headColor="#161E64" subColor="#5F5B5B" imgW="auto" shadow="none" Heading="ENJOYABLE COURSES" description="Explore interactive courses that make learning enjoyable and help you master new skills at your own pace." />
            </motion.div>,
            <motion.div key={3} variants={rotateOnScroll}>
              <Card imgsrc={why2} color="none" alignText="center" headColor="#161E64" subColor="#5F5B5B" imgW="auto" shadow="none" Heading="ONE-ON-ONE LEARNING" description="Delivering customized, one-on-one learning sessions designed to meet your individual needs and aspirations." />
            </motion.div>
          ]}
        />
      </motion.div>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeInOnScroll}>
        <World />
      </motion.div>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeInOnScroll}>
        <Success />
      </motion.div>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeInOnScroll}>
        <FAQ />
      </motion.div>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeInOnScroll}>
        <Footer />
      </motion.div>
    </>
  );
};
