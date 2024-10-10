// app/pre-blackfriday/page.tsx

"use client";
import { useEffect, useState } from 'react';

// Extend the Window interface
declare global {
  interface Window {
    dataLayer?: any[];
    ga?: any;
  }
}

export default function PreBlackFridayPage() {
  const [countdown, setCountdown] = useState(10);
  const [eventCountdown, setEventCountdown] = useState('');
  const [queueNumber, setQueueNumber] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); // 1 second

    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://outletls2.com';
    }, 10000); // 10 seconds

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, []);

  useEffect(() => {
    const eventDate = new Date('2024-10-20T00:00:00');
    const updateEventCountdown = () => {
      const now = new Date();
      const timeDifference = eventDate.getTime() - now.getTime();

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setEventCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const eventTimer = setInterval(updateEventCountdown, 1000);

    return () => clearInterval(eventTimer);
  }, []);

  useEffect(() => {
    const randomQueueNumber = Math.floor(Math.random() * 100) + 1;
    setQueueNumber(randomQueueNumber);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#1b1b1b]">
      <div className="bg-[#fd1a1a] p-8 text-center rounded-3xl">
        <h1 className="text-[2em]">Outlet - Pré Black Friday</h1>
        <div className="text-lg pt-4">
          Você está na <strong>FILA</strong> para participar, você será
          redirecionado em grupo em: <strong>{countdown}</strong> segundos...
        </div>
        <div className="pt-4 text-lg">
          <strong>Somente até 20/10/2024:</strong> {eventCountdown}
          <br />
          ou enquanto o estoque durar.
        </div>
        <div className="pt-4 text-lg">
          Número de pessoas na fila: <strong>{queueNumber}</strong>
        </div>
      </div>
    </div>
  );
}
