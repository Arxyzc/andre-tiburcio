import { useTranslation } from 'react-i18next';
import profilePic from "../assets/andreTiburcio1.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
    const { t } = useTranslation(); // Hook de traducción

    return (
        <>
            <div className="relative flex min-h-screen items-end justify-center" id="hero">
                <motion.img 
                    src={profilePic} 
                    alt={t('profile.name')} // Usando traducción para el atributo alt
                    className="absolute inset-0 z-10 h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.div 
                    className="absolute inset-0 z-10 bg-gradient-to-b 
                    from-transparent from-60% to-black lg:from-30%"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1,  delay: 1 }}
                    className="z-20 mx-4 max-w-3xl pb-20"
                >
                    <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
                        {t('profile.name')} {/* Usando traducción para el nombre */}
                    </h1>
                    <p className="pt-2 font-semibold">
                        {t('profile.info')} {/* Usando traducción para la información */}
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default HeroSection;

{/* import { PROFILE } from "../constants"
import profilePic from "../assets/andreTiburcio1.jpg"
import { motion } from "framer-motion"

const HeroSection = () => {
    return (
        <>
            <div className="relative flex min-h-screen items-end justify-center" id="hero">
                <motion.img 
                    src={profilePic} 
                    alt={PROFILE.name}
                    className="absolute inset-0 z-10 h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}/>
                <motion.div 
                    className="absolute inset-0 z-10 bg-gradient-to-b 
                    from-transparent from-60% to-black lg:from-30%"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}></motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1,  delay: 1 }}
                    className="z-20 mx-4 max-w-3xl pb-20">
                    <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
                        {PROFILE.name}
                    </h1>
                    <p className="pt-2 font-semibold">{PROFILE.info}</p>
                </motion.div>
            </div>
        </>
    )
}

export default HeroSection*/}