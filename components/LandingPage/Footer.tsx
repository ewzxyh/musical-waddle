/* eslint-disable @next/next/no-before-interactive-script-outside-document */
"use client"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Checkbox } from "../ui/checkbox" // Import the Checkbox component from shadcn
import { useForm } from 'react-hook-form';
import Script from 'next/script';

export default function Footer() {
    {/* Load analytics.js */ }
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
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data: any) => {
        if (data.agree) {
            window.location.href = "https://pre-blackfriday.outletbabys.com";
        } else {
            alert("Por favor, concorde com os termos e condições");
        }
    };

    return (
        <footer className="border-t dark:bg-[#2785ff]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2">
                    <div
                        className="border-b py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
                    >
                        <div className="mt-8 space-y-4 lg:mt-0">
                            <div>
                                <h2 className="text-2xl font-medium">
                                    Inscreva-se para ser redirecionado na nossa promoção de Pré Black Friday
                                </h2>
                                <p className="mt-4 max-w-lg">
                                    Receba novidades e promoções por e-mail e seja avisado em primeira mão!
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col border rounded-xl p-4 gap-3 mt-6 w-full">
                                <Input
                                    {...register('email', { required: true })}
                                    placeholder="Digite seu E-mail"
                                    type="email"
                                />
                                <div className="flex items-center">
                                    <Checkbox {...register('agree', { required: true })} />
                                    <label className="ml-2">Concordo com os termos e condições</label>
                                </div>
                                <Button type="submit">
                                    Enviar e participar
                                </Button>
                            </form>
                        </div>
                    </div>

                    <div className="py-8 lg:py-16 lg:pe-16">
                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                            <div>
                                <p className="font-medium">Redes sociais</p>
                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="https://facebook.com" target="_blank" className="transition hover:opacity-75"> Facebook </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com" target="_blank" className="transition hover:opacity-75"> Instagram</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium">Categorias</p>
                                <ul className="mt-6 space-y-2 text-sm">
                                    <li>
                                        <a target="_blank" href="/1" rel="noopener noreferrer" className="transition hover:opacity-75"> On Road </a>
                                    </li>
                                    <li>
                                        <a href="/2" className="transition hover:opacity-75"> Bebê Menina </a>
                                    </li>
                                    <li>
                                        <a href="/3" className="transition hover:opacity-75"> Bebê Menino </a>
                                    </li>
                                    <li>
                                        <a href="/4" className="transition hover:opacity-75"> Bebê Unissex </a>
                                    </li>
                                    <li>
                                        <a href="/5" className="transition hover:opacity-75"> Meninas </a>
                                    </li>
                                    <li>
                                        <a href="/5" className="transition hover:opacity-75"> Meninas </a>
                                    </li>
                                    <li>
                                        <a href="/5" className="transition hover:opacity-75"> Meninos </a>
                                    </li>
                                    <li>
                                        <a href="/5" className="transition hover:opacity-75"> Acessórios </a>
                                    </li>
                                    <li>
                                        <a href="/5" className="transition hover:opacity-75"> Outlet </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="mt-6 space-y-2 text-sm">
                                    <li>
                                        <a target="_blank" href="/login" rel="noopener noreferrer" className="transition hover:opacity-75"> Login </a>
                                    </li>
                                    <li>
                                        <a href="/register" className="transition hover:opacity-75"> Registrar-se </a>
                                    </li>
                                    <li>
                                        <a href="/ajuda" className="transition hover:opacity-75"> Ajuda </a>
                                    </li>
                                    <li>
                                        <a href="/whatsapp" className="transition hover:opacity-75"> Whatsapp </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 border-t pt-8">
                            <ul className="flex flex-wrap gap-4 text-xs">
                                <li>
                                    <a href="/termos-condicoes" target="_blank" className="transition hover:opacity-75">Termos e condições </a>
                                </li>
                                <li>
                                    <a href="/politica-de-privacidade" target="_blank" className="transition hover:opacity-75">Política de privacidade </a>
                                </li>
                            </ul>
                            <p className="mt-8 text-xs">&copy; 2024. Todos os Direitos Reservados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
