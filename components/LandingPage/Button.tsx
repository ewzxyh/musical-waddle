import React from 'react';
import Image from 'next/image';

const Card: React.FC = () => {
    return (
        <div className="card text-lg pt-4 bg-white z-[-50] mt-[-20em]">
            <Image src="/product.webp" alt="Capacete de Motocicleta" width={300} height={300} />
            <h2 className="title text-lg pt-4 text-black">Capacete de Moto Alta Resistencia</h2>
            <p className="description text-lg pt-4 text-black">Capacete de motocicleta de alta qualidade para máxima segurança e conforto.</p>
            <p className="value text-lg pt-4 text-black">R$1399,99</p>
            <a href="https://mpago.li/2QdHhW0" className="button text-lg pt-0 rounded-lg bg-red-500 text-white hover:bg-red-700">Comprar Agora</a>
            <Image src="/product.webp" alt="Capacete de Motocicleta" width={300} height={300} />
            <h2 className="title text-lg pt-4 text-black">Capacete de Motocicleta para Aventuras</h2>
            <p className="description text-lg pt-4 text-black">Capacete de motocicleta para aventuras em trilhas.</p>
            <p className="value text-lg pt-4 text-black">R$899,99</p>
            <a href="https://mpago.li/2QdHgW0" className="button text-lg pt-0 rounded-lg bg-red-500 text-white hover:bg-red-700">Comprar Agora</a>
            <Image src="/product.webp" alt="Capacete de Motocicleta" width={300} height={300} />
            <h2 className="title text-lg pt-4 text-black">Luva para moto</h2>
            <p className="description text-lg pt-4 text-black">Luva de alta qualidade para máxima segurança e conforto.</p>
            <p className="value text-lg pt-4 text-black">R$599,99</p>
            <a href="https://mpago.li/2QdwVW0" className="button text-lg pt-0 rounded-lg bg-red-500 text-white hover:bg-red-700">Comprar Agora</a>
            <Image src="/product.webp" alt="Capacete de Motocicleta" width={300} height={300} />
            <h2 className="title text-lg pt-4 text-black">Jaqueta para Moto</h2>
            <p className="description text-lg pt-4 text-black">Jaqueta de alta qualidade para máxima segurança e conforto.</p>
            <p className="value text-lg pt-4 text-black">R$799,99</p>
            <a href="https://mpago.li/2QdHV20" className="button text-lg pt-0 rounded-lg bg-red-500 text-white hover:bg-red-700">Comprar Agora</a>
        </div>
    );
};

export default Card;