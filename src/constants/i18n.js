import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
        navigation: {
            about: "Sobre mi",
            projects: "Proyectos",
            skills: "Habilidades",
            experience: "Experiencia",
            contact: "Contacto",
        },
        profile: {
            name: "Andre Tiburcio",
            info: "Un desarrollador habilidoso, apasionado por crear soluciones innovadoras y eficaces. ¡Hagamos realidad tus ideas!",
        },
        about: {
            text1: "Creo sitios web únicos y eficientes, donde la creatividad y la funcionalidad se unen perfectamente.",
            text2: "¡Hola! Soy Andre Tiburcio, un desarrollador en crecimiento con una pasión por el desarrollo de aplicaciones y videojuegos. Disfruto creando experiencias web que no solo sean funcionales y fáciles de usar, sino también visualmente atractivas. Mi atención al detalle asegura que cada proyecto se vea profesional y pulido. Además de la programación, me encanta explorar nuevas culturas y cocinas. Mi curiosidad me mantiene al día con las últimas tecnologías y tendencias de desarrollo, permitiéndome ofrecer soluciones innovadoras y prácticas. Ya sea que esté desarrollando una aplicación, un videojuego o un sitio web, me esfuerzo por alcanzar la excelencia en cada proyecto.",
        },
        projects: {
            project1: {
            title: "Plataforma de E-commerce",
            subtitle: "Una plataforma de comercio electrónico full-stack construida con React, Node.js y MongoDB.",
            },
            project2: {
            title: "Aplicación de Redes Sociales",
            subtitle: "Una aplicación de redes sociales desarrollada con Next.js y Firebase.",
            },
            project3: {
                title: "Herramientas de gestión",
                subtitle: "Una herramienta de gestión de proyectos construida con Django y PostgreSQL.",
            },
        // Agrega más proyectos aquí...
        },
        skills: {
            skill1: {
                experience: "1.5+ años",
            },
            skill2: {
                experience: "1+ años",
            },
            skill3: {
                experience: "3+ años",
            },
            skill4: {
                experience: "1.5+ años",
            },
            skill5: {
                experience: "1+ años",
            },
            skill6: {
                experience: "3+ años",
            },
            skill7: {
                experience: "2+ años",
            },
        },
        experience: {
            experience1: {
                position: "Programador",
                description: "Desarollo de aplicaciones de realidad aumentada",
            },
            experience2: {
                position: "Logística",
                description: "Logistica Y Administracion",
            },
        },
        contact: {
            title: "Contácteme",
            namePlaceholder: "Nombre",
            emailPlaceholder: "Email",
            messagePlaceholder: "Mensaje",
            nameRequired: "Nombre es requerido",
            emailRequired: "Email es requerido",
            emailInvalid: "Email es inválido",
            messageRequired: "Mensaje es requerido",
            sending: "Enviando...",
            send: "Enviar",
            successMessage: "¡Mensaje enviado satisfactoriamente!",
            errorMessage: "Fallo el envío del mensaje. Por favor inténtalo de nuevo más tarde.",
        },
        footer: {
            rightsReserved: "Todos los derechos reservados."
        },
      // Continúa con las demás secciones...
        }
    },
    en: {
        translation: {
        navigation: {
            about: "About Me",
            projects: "Projects",
            skills: "Skills",
            experience: "Experience",
            contact: "Contact",
        },
        profile: {
            name: "Andre Tiburcio",
            info: "A skilled developer passionate about creating innovative and effective solutions. Let's make your ideas come true!",
        },
        about: {
            text1: "I create unique and efficient websites where creativity and functionality perfectly come together.",
            text2: "Hello! I'm Andre Tiburcio, a growing developer with a passion for app and video game development. I enjoy creating web experiences that are not only functional and easy to use, but also visually appealing. My attention to detail ensures that each project looks professional and polished. Besides programming, I love exploring new cultures and cuisines. My curiosity keeps me up to date with the latest technologies and development trends, allowing me to offer innovative and practical solutions. Whether I'm developing an app, video game, or website, I strive for excellence in every project.",
        },
        projects: {
            project1: {
            title: "E-commerce Platform",
            subtitle: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
            },
            project2: {
            title: "Social Media App",
            subtitle: "A social media application developed using Next.js and Firebase.",
            },
            project3: {
            title: "Management Tool",
            subtitle: "A project management tool built with Django and PostgreSQL.",
            },
        // Agrega más proyectos aquí...
        },
        skills: {
            skill1: {
                experience: "1.5+ year",
            },
            skill2: {
                experience: "1+ year",
            },
            skill3: {
                experience: "3+ year",
            },
            skill4: {
                experience: "1.5+ year",
            },
            skill5: {
                experience: "1+ year",
            },
            skill6: {
                experience: "3+ year",
            },
            skill7: {
                experience: "2+ year",
            },
        },
        experience: {
            experience1: {
                position: "Programmer",
                description: "Development of augmented reality applications",
            },
            experience2: {
                position: "Logistics",
                description: "Logistics and Administration",
            },
        },
        contact: {
            title: "Contact Me",
            namePlaceholder: "Name",
            emailPlaceholder: "Email",
            messagePlaceholder: "Message",
            nameRequired: "Name is required",
            emailRequired: "Email is required",
            emailInvalid: "Email is invalid",
            messageRequired: "Message is required",
            sending: "Sending...",
            send: "Send",
            successMessage: "Message sent successfully!",
            errorMessage: "Message sending failed. Please try again later.",
        },
        footer: {
            rightsReserved: "All rights reserved."
        },
      // Continúa con las demás secciones...
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "es", // idioma por defecto
    fallbackLng: "es", // idioma de reserva
    interpolation: {
        escapeValue: false // react ya hace escaping de xss
    }
});

export default i18n;