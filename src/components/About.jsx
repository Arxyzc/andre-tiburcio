import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"

const About = () => {
    const { t } = useTranslation(); // Hook de traducción

    return (
        <div className="container mx-auto" id="about">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-20 text-center text-4xl font-semibold">
                    {t('navigation.about')}
            </motion.h2>
            <motion.h3 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="p-4 text-6xl uppercase lg:text-[8rem]">
                    {t('about.text1')}
            </motion.h3>
            <motion.p 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0}}
                transition={{ duration: 1}}
                viewport={{ once: true }}
                className="mr-24 pl-4 text-lg leading-loose">
                    {t('about.text2')}
            </motion.p>
        </div>
    )
}

export default About