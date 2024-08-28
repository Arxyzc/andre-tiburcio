import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import { motion } from "framer-motion";

const ContactForm = () => {
    const { t } = useTranslation();  // Hook de traducción

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = t("contact.nameRequired");
        if (!formData.email) {
            errors.email = t("contact.emailRequired");
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = t("contact.emailInvalid");
        }
        if (!formData.message) errors.message = t("contact.messageRequired");
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs
                .send(
                    "service_quw59xn",
                    "template_6nq95sd",
                    formData,
                    "rZ-dawOCBwa9jC_1f",
                )
                .then((response) => {
                    console.log("ÉXITO!", response.status, response.text);
                    toast.success(t("contact.successMessage"));
                    setFormData({ name: "", email: "", message: "" });
                })
                .catch((error) => {
                    console.log("FALLO...", error);
                    toast.error(t("contact.errorMessage"));
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <div className="mx-auto max-w-3xl p-4" id="contact">
            <Toaster />
            <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
                {t("contact.title")}
            </h2>
            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder={t("contact.namePlaceholder")}
                        onChange={handleChange}
                        className="mb-8 w-full appearance-none rounded-lg border 
                        border-gray-900 bg-transparent px-3 py-2 text-sm 
                        focus:border-gray-400 focus:outline-none"
                    />
                    {errors.name && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            aria-live="polite"
                            className="text-sm text-pink-700"
                        >
                            {errors.name}
                        </motion.p>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder={t("contact.emailPlaceholder")}
                        onChange={handleChange}
                        className="mb-8 w-full appearance-none rounded-lg border 
                        border-gray-900 bg-transparent px-3 py-2 text-sm 
                        focus:border-gray-400 focus:outline-none"
                    />
                    {errors.email && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            aria-live="polite"
                            className="text-sm text-pink-700"
                        >
                            {errors.email}
                        </motion.p>
                    )}
                </div>
                <div className="mb-4">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        placeholder={t("contact.messagePlaceholder")}
                        onChange={handleChange}
                        className="mb-8 w-full appearance-none rounded-lg border 
                        border-gray-900 bg-transparent px-3 py-2 text-sm 
                        focus:border-gray-400 focus:outline-none"
                        rows="4"
                    />
                    {errors.message && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            aria-live="polite"
                            className="text-sm text-pink-700"
                        >
                            {errors.message}
                        </motion.p>
                    )}
                </div>
                <button
                    type="submit"
                    className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
                    disabled={isSending}
                >
                    {isSending ? t("contact.sending") : t("contact.send")}
                </button>
            </motion.form>
        </div>
    );
};

export default ContactForm;

{/*import { useState } from "react"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast'
import { motion } from "framer-motion"

const ContactForm = () => {
        const [formData, setFormData] = useState ({
            name: "",
            email: "",
            message: "",
        })

        const [errors, setErrors] = useState({});

        const [isSending, setIsSending] = useState(false);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            })
        }

        const validate = () => {
            let errors = {};
            if(!formData.name) errors.name = "Nombre es requerido";
            if(!formData.email) {
                errors.email = "Email es requerido";
            } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
                errors.email = "Email es invalido";
            }
            if (!formData.message) errors.message = "Mensaje es requerido";
            return errors;
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            const validationErrors = validate();
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
            } else {
                setErrors({});
                setIsSending(true);

                emailjs
                    .send(
                        "service_quw59xn",
                        "template_6nq95sd",
                        formData,
                        "rZ-dawOCBwa9jC_1f",
                    )
                    .then((response) => {
                        console.log("ÉXITO!", response.status, response.text);
                        toast.success("Mensaje enviado satisfactoriamente!");
                        setFormData({ name: "", email: "", message: "" });
                    })
                    .catch((error) => {
                        console.log("FALLO...", error);
                        toast.error("Fallo el envío del mensaje. Por favor inténtalo de nuevo mas tarde")
                    })
                    .finally(() => {
                        setIsSending(false);
                    })
            }
        }
    return (
        <div className="mx-auto max-w-3xl p-4" id="contact">
            <Toaster/>
            <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
                Contácteme
            </h2>
            <motion.form
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            placeholder="Nombre" 
                            onChange={handleChange}
                            className="mb-8 w-full appearance-none rounded-lg border 
                            border-gray-900 bg-transparent px-3 py-2 text-sm 
                            focus:border-gray-400 focus:outline-none"/>
                            {errors.name && (
                                <motion.p 
                                initial={{ opacity : 0 }}
                                whileInView={{ opacity: 1 }}
                                aria-live="polite"
                                className="text-sm text-pink-700">{errors.name}</motion.p>
                            )}
                    </div>
                <div className="mb-4">
                    <input type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email" 
                        onChange={handleChange}
                        className="mb-8 w-full appearance-none rounded-lg border 
                        border-gray-900 bg-transparent px-3 py-2 text-sm 
                        focus:border-gray-400 focus:outline-none"/>
                        {errors.email && (
                            <motion.p 
                            initial={{ opacity : 0 }}
                            whileInView={{ opacity: 1 }}
                            aria-live="polite"
                            className="text-sm text-pink-700">{errors.email}</motion.p>
                        )}
                </div>
                <div className="mb-4">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        placeholder="Mensaje" 
                        onChange={handleChange}
                        className="mb-8 w-full appearance-none rounded-lg border 
                        border-gray-900 bg-transparent px-3 py-2 text-sm 
                        focus:border-gray-400 focus:outline-none" rows="4"/>
                        {errors.message && (
                            <motion.p
                            initial={{ opacity : 0 }}
                            whileInView={{ opacity: 1 }}
                            aria-live="polite"
                            className="text-sm text-pink-700">{errors.message}</motion.p>
                        )}
                </div>
                <button type="submit" className={'mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 $ { isSending ? "cursor-not-allowed opacity-50" : "" }'} disabled={isSending}>
                    {isSending ? "Enviando..." : "Enviar"}
                </button>
            </motion.form>
        </div>
    )
}

export default ContactForm*/}