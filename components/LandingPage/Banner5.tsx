/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useEffect } from 'react';

interface BannerProps {
  desktopImageUrl: string;
  mobileImageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ desktopImageUrl, mobileImageUrl }) => {
  // Hook para travar o scroll quando o banner móvel estiver visível
  useEffect(() => {
    // Função para travar/destravar o scroll
    const handleScrollLock = () => {
      if (window.innerWidth < 768) {
        // Trava o scroll
        document.body.style.overflow = '';
      } else {
        // Destrava o scroll
        document.body.style.overflow = '';
      }
    };

    // Adiciona o listener para redimensionamento da janela
    window.addEventListener('resize', handleScrollLock);

    // Chama a função inicialmente
    handleScrollLock();

    // Limpa o listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleScrollLock);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="w-full">
      {/* Banner para Desktop e Notebook */}
      <div className="hidden md:block">
        <img
          src={desktopImageUrl}
          alt="Banner Desktop"
          className="w-full h-auto   mb-[-8px] filter blur-[5px]" // Adicionado blur aqui
        />
      </div>
      {/* Banner para Smartphones */}
      <div className="block md:hidden inset-0 z-40">
        <img
          src={mobileImageUrl}
          alt="Banner Mobile"
          className="w-full h-full   filter blur-[5px]" // Adicionado blur aqui
        />
      </div>
    </div>
  );
};

export default Banner;
