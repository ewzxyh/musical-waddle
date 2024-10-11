import React from 'react';
import Image from 'next/image';

const Card: React.FC = () => {
    return (
        <div className="card text-lg pt-4 bg-white z-[-50] mt-[-90em]">
            <Image src="/products.webp" alt="Roupas para Bebê" width={300} height={300} />
            <h2 className="title text-lg pt-4 text-black">Conjunto de Roupas para Bebê</h2>
            <p className="description text-lg pt-4 text-black">Conjunto de roupas confortáveis e estilosas para bebês.</p>
            <p className="value text-lg pt-4 text-black">R$199,99</p>
            <a href="https://mpago.li/2QdHhW0" className="button text-lg pt-0 rounded-lg bg-red-500 text-white hover:bg-red-700">Comprar Agora</a>
            <Image src="/products.webp" alt="Acessórios para Bebê" width={300} height={300} />
            <h2 className="title text-lg pt-4 text-black">Acessórios para Bebê</h2>
            <p className="description text-lg pt-4 text-black">Acessórios essenciais para o dia a dia do seu bebê.</p>
            <p className="value text-lg pt-4 text-black">R$99,99</p>
            <a href="https://mpago.li/2QdHgW0" className="button text-lg pt-0 rounded-lg bg-red-500 text-white hover:bg-red-700">Comprar Agora</a>
            <Image src="/products.webp" alt="Mochila para Bebê" width={300} height={300} />
            <h2 className="title text-lg pt-4 text-black">Mochila para Bebê</h2>
            <p className="description text-lg pt-4 text-black">Mochila prática e estilosa para carregar os itens do bebê.</p>
            <p className="value text-lg pt-4 text-black">R$149,99</p>
            <a href="https://mpago.li/2QdwVW0" className="button text-lg pt-0 rounded-lg bg-red-500 text-white hover:bg-red-700">Comprar Agora</a>
            <Image src="/products.webp" alt="Cobertor para Bebê" width={300} height={300} />
            <h2 className="title text-lg pt-4 text-black">Cobertor para Bebê</h2>
            <p className="description text-lg pt-4 text-black">Cobertor macio e aconchegante para o seu bebê.</p>
            <p className="value text-lg pt-4 text-black">R$79,99</p>
            <a href="https://mpago.li/2QdHV20" className="button text-lg pt-0 rounded-lg bg-red-500 text-white hover:bg-red-700">Comprar Agora</a>
        </div>
    );
};

export default Card;