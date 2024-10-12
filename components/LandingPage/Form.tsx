/* eslint-disable @next/next/no-before-interactive-script-outside-document */
// components/LandingPage/Form.tsx

"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Script from 'next/script';

// Extend the Window interface
declare global {
  interface Window {
    ga?: any;
  }
}

const Form: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailValido, setEmailValido] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false); // Estado para o checkbox
  useEffect(() => {
    if (isModalVisible) {
      // Trava o scroll
      document.body.style.overflow = '';
    } else {
      // Destrava o scroll
      document.body.style.overflow = '';
    }

    // Se o modal estiver fechado, inicia o timer para reabrir após 3 segundos
    let timer: NodeJS.Timeout;
    if (!isModalVisible) {
      timer = setTimeout(() => {
      setIsModalVisible(true);
      }, 1500); // 1,5 segundos em milissegundos
    }

    // Limpa o timer ao desmontar o componente ou quando a visibilidade mudar
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isModalVisible]);

  const validarEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novoEmail = e.target.value;
    setEmail(novoEmail);
    setEmailValido(validarEmail(novoEmail));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValido && isChecked) {
      const checkTrackerAndRedirect = () => {
        if (typeof window !== 'undefined' && window.ga) {
          const trackers = window.ga.getAll();
          if (trackers && trackers.length > 0) {
            const linkerParam = trackers[0].get('linkerParam');
            console.log('Linker Param:', linkerParam);
            const redirectUrl = 'https://pre-blackfriday.outletbabys.com' + (linkerParam ? '?' + linkerParam : '');
            window.location.href = redirectUrl;
          } else {
            console.log('No trackers available yet. Retrying...');
            setTimeout(checkTrackerAndRedirect, 100); // Retry after 100ms
          }
        } else {
          console.log('window.ga is not defined. Retrying...');
          setTimeout(checkTrackerAndRedirect, 100); // Retry after 100ms
        }
      };
  
      checkTrackerAndRedirect();
    } else {
      alert('Por favor, insira um e-mail válido e confirme os termos.');
    }
  };

  return (
    <>    {/* Load analytics.js */ }
    <Script
        async
        src="https://www.google-analytics.com/analytics.js"
        strategy="beforeInteractive"
    />
    {/* Initialize analytics.js and enable the linker plugin */ }
    <Script id="analytics-init" strategy="afterInteractive">
        {`
            ga('create', 'AW-16736130586', 'auto');
            ga('require', 'linker');
            ga('linker:autoLink', ['outletbabys.com', 'pre-blackfriday.outletbabys.com']);
          `}
    </Script>
    {/* Load gtag.js */ }
    <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16736130586"
        strategy="afterInteractive"
    />
    {/* Configure gtag.js */ }
    <Script id="gtag-config" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16736130586', {
              'linker': {
                'domains': ['outletbabys.com', 'pre-blackfriday.outletbabys.com']
              }
            });
          `}
    </Script>
    isModalVisible && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2079ff] bg-opacity-[35%]">
        <form onSubmit={handleSubmit} className="bg-[#2785ff] p-20 rounded-3xl shadow-md relative min-h-[400px]">
          {/* Botão de fechar */}
          <button
            type="button"
            onClick={() => setIsModalVisible(false)}
            className="absolute top-[-10px] right-0 text-white text-4xl p-4"
          >
            &times;
          </button>
          {/* Título */}
          <h2 className="text-white text-center font-semibold text-2xl mb-4">
            Até 70% OFF e Frete Grátis
          </h2>
          {/* Subtítulo */}
          <p className="text-white text-center text-lg mb-4">
            Inscreva-se e seja REDIRECIONADO para nosso <strong>Outlet Pré Black Friday!</strong>
          </p>
          {/* Linha divisória */}
          <hr className="border-a border-white mb-4" />
          {/* Campo de e-mail */}
          <Input
            type="email"
            placeholder="Digite seu e-mail (obrigatório)"
            value={email}
            onChange={handleChange}
            required
            className="
                mb-4 w-full
                bg-white
                hover:bg-gray-100
                placeholder-gray-500
                focus:outline-none focus:ring-0
                text-black
                border border-gray-300
                rounded
                py-2 px-3
              "
          />
          {/* Checkbox de confirmação */}
          <div className="flex items-center mb-4">
            <Checkbox id="confirm" checked={isChecked} onCheckedChange={(checked) => setIsChecked(checked === true)} />
            <label htmlFor="confirm" className="ml-2 text-white">
              Eu confirmo que li e aceito os termos e em ser redirecionado para a loja.
            </label>
          </div>
          {/* Mensagem de orientação */}
          {!emailValido && (
            <p className="text-white text-base mb-4 text-center">
              Entre na FILA para ser redirecionado e visitar nossa nova página.
            </p>
          )}
          {/* Botão enviar */}
          <Button
            type="submit"
            disabled={!emailValido || !isChecked} // Botão desabilitado se o email for inválido ou o checkbox não estiver marcado
            className="
                w-full
                bg-[#000]
                hover:bg-[#293ca7]
                disabled:bg-gray-400
                text-base
                text-white
                font-semibold
                py-2 px-4
                rounded
                focus:outline-none focus:ring-0"
          >
            Participar da Pré Black Friday
          </Button>
          {/* Aviso */}
          <p className="text-white text-center text-sm mt-4">
            Promoção válida até 20/10 ou<br/>enquanto durarem os estoques.
          </p>
        </form>
      </div>   
    )
    </>
  );
};

export default Form;