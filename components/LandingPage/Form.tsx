"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Form: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailValido, setEmailValido] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);

  useEffect(() => {
    if (isModalVisible) {
      // Trava o scroll
      document.body.style.overflow = '';
    } else {
      // Destrava o scroll
      document.body.style.overflow = '';
    }

    // Se o modal estiver fechado, inicia o timer para reabrir após 5 minutos
    let timer: NodeJS.Timeout;
    if (!isModalVisible) {
      timer = setTimeout(() => {
        setIsModalVisible(true);
      }, 1000); // 5 segundos
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
    if (emailValido) {
      window.location.href = 'http://pre-blackfriday.linhasuper2.com';
    } else {
      // Tratar o caso em que o e-mail não é válido
      alert('Por favor, insira um e-mail válido.');
    }

  };

  return (
    isModalVisible && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#300808] bg-opacity-[85%]">
        <form onSubmit={handleSubmit} className="bg-[#FF0000] p-20 rounded-3xl shadow-md relative min-h-[400px]">
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
            Inscreva-se e seja redirecionado para nosso <strong>Outlet Pré Black Friday!</strong>
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
          {/* Mensagem de erro */}
          {!emailValido && (
            <p className="text-white text-base mb-4 text-center">Entre na FILA e Visite nossa nova página</p>
          )}
          {/* Botão enviar */}
          <Button
            type="submit"
            disabled={!emailValido}
            className="
            w-full
            bg-[#000]
            hover:bg-[#3f0000]
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
            Promoção válida até 20/10 ou<br></br>enquanto durarem os estoques.
          </p>
        </form>
      </div>
    )
  );
};

export default Form;
