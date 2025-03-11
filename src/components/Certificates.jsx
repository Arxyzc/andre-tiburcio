import { useState } from "react";
import { useTranslation } from "react-i18next"; // 🔹 Importar traducción
import { motion } from "framer-motion";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import certificateImage from "../assets/certificates/certificate1.jpg";
import certificatePDF from "../assets/certificates/certificate1.pdf";

Modal.setAppElement("#root");

const certificates = [
  {
    id: 1,
    title: "certificates.certificate1.title",  // 🔹 Traducción
    institution: "certificates.certificate1.institution", // 🔹 Traducción
    date: "certificates.certificate1.date", // 🔹 Traducción
    image: certificateImage,
    pdf: `${certificatePDF}#zoom=100`,
  },
];

const Certificates = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const { t } = useTranslation(); // 🔹 Hook para traducción

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setTimeout(() => setSelectedCertificate(null), 300);
  };

  return (
    <section id="certificates" className="py-10 text-center relative z-20">
      <h2 className="text-3xl font-bold mb-6">{t("certificates.title")}</h2> {/* 🔹 Traducido */}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full max-w-2xl"
      >
        {certificates.map((cert) => (
          <SwiperSlide key={cert.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer p-2 border rounded-lg shadow-lg bg-transparent w-32 mx-auto"
              onClick={() => openModal(cert)}
            >
              <img
                src={cert.image}
                alt={t(cert.title)} // 🔹 Traducido
                className="w-40 h-40 object-cover mx-auto rounded-lg"
              />
              <div className="mt-4 text-white">
                <h3 className="text-lg font-semibold">{t(cert.title)}</h3> {/* 🔹 Traducido */}
                <p className="text-sm text-gray-300">{t(cert.institution)}</p> {/* 🔹 Traducido */}
                <p className="text-sm text-gray-400">{t(cert.date)}</p> {/* 🔹 Traducido */}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal con PDF */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        className="flex items-center justify-center min-h-screen w-screen h-screen z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      >
        {selectedCertificate && (
          <div className="bg-black bg-opacity-90 p-6 rounded-lg shadow-lg w-[90vw] h-[90vh] flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4 text-white">{t(selectedCertificate.title)}</h2> {/* 🔹 Traducido */}
            <object
              key={selectedCertificate.id}
              data={selectedCertificate.pdf}
              type="application/pdf"
              width="100%"
              height="100%"
              className="rounded-lg"
            >
              <p className="text-white">
                {t("certificates.pdf_error")} {/* 🔹 Traducción para error */}
                <a href={selectedCertificate.pdf} download className="text-blue-400 underline">
                  {t("certificates.download")}
                </a>
              </p>
            </object>
            <div className="mt-4 flex justify-between w-full">
              <a
                href={selectedCertificate.pdf}
                download
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                {t("certificates.download")} {/* 🔹 Traducido */}
              </a>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                {t("certificates.close")} {/* 🔹 Traducido */}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certificates;