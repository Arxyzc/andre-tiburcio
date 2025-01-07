import React from 'react'
import { EXPERIENCES } from "../constants"
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const containerVariants = {
    hidden: { opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20},
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}
}

const Experience = () => {
    const { t } = useTranslation();
    
    return (
        <div id="experience" className='container mx-auto mt-20 py-16 tracking-tighter'>
            <h2 className="mb-12 text-center text-4xl font-semibold">
                {t('navigation.experience')}
            </h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{once: true}}
                className="mx-auto max-w-3xl">
                    {EXPERIENCES.map((experience, index) => (
                        <motion.div 
                            variants={itemVariants}
                            key={index} className="mx-4 mb-8 flex flex-col items-center rounded-lg border border-dotted border-gray-600 p-6 md:flex-row">
                                <img src={experience.image} 
                                alt={experience.name} 
                                className="mb-4 mr-6 h-16 w-16 rounded-full md:mb-0" />
                                <div>
                                    <p className="mb-4 italic">"{t(experience.description)}"</p>
                                    <p className="font-bold">{experience.name}</p>
                                    <p className="text-gray-400">{t(experience.position)}</p>
                                </div>
                        </motion.div>
                    ))}
            </motion.div>
        </div>
    )
}

export default Experience