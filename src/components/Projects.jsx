import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from "./Card";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants"; // Importa los proyectos desde index.jsx

const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.4,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
    const { t } = useTranslation(); // Hook de traducción

    return (
        <div id="projects">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="mt-20 text-center text-4xl font-semibold"
            >
                {t('navigation.projects')} {/* Traducción del título de la sección */}
            </motion.h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center py-8"
            >
                {PROJECTS.map((project, index) => (
                    <motion.div
                        variants={itemVariants}
                        key={index}
                    >
                        <Card
                            image={project.image}
                            title={t(project.title)}   
                            subtitle={t(project.subtitle)}  
                            link={project.link || "#"}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;



{/*import React from 'react'
import { PROJECTS } from "../constants"
import Card from "./Card"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0, y: -20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.4,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }}
};

const Projects = () => {
    return (
        <div id="projects">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="mt-20 text-center text-4xl font-semibold">Proyectos</motion.h2>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center py-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div 
                            variants={itemVariants}
                            key={index}>
                                <Card image={project.image}
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    link="#"/>
                        </motion.div>
                    ))}
            </motion.div>
        </div>
    )
}

export default Projects*/}