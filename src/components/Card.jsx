import React from 'react';

const Card = ({ image, title, subtitle, link }) => {
    return (
        <a 
            href={link} 
            target={link ? "_blank" : "_self"} // 🔹 Solo abre en nueva pestaña si hay link
            rel={link ? "noopener noreferrer" : ""} // 🔹 Protección contra ataques de seguridad
            className="m-4 block max-w-sm overflow-hidden rounded-lg"
        >
            <div className="relative">
                <img className="w-full" src={image} alt={title} />
                <div className='flex flex-col justify-between p-4 text-white'>
                    <h2 className="mb-2 text-2xl font-bold">{title}</h2>
                    <p className="mb-4 text-sm font-medium">{subtitle}</p>
                </div>
            </div>
        </a>
    );
}

export default Card;
