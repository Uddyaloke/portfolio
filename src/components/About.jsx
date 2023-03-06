import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper} from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Google Cloud Platform Data Architect. Data Modernization Practice lead at TCS with over 19 years of experience. I work with presales team on designing data solutions and create proposals for large deals.
        <br />
        Adept in large scale Data Modernization & Migration, Capacity Planning, Architect ETL Workflow, Data Blending, Descriptive Analysis, Building Macros & Analytic Apps using Alteryx and GCP native services.
        <br />
        Worked as ETL/Big Data architect for major US based Banking client. Experienced in building data-warehouse, data lakes etc. Proficient with popular data migration tools like Ora2pg, Isiper, Striim, Oracle Golden Gate etc as well as ETL tools like Ab-Initio and GCP native Dataflow, Dataproc, Cloud Composer etc.
        <br />
        Recreational hobbies include creating web applications.

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")