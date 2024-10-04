"use client"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useForm } from 'react-hook-form';

export default function Footer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const onSubmit = async (data: any) => {
        console.log(data);


    };
    return (
        <footer className="border-t dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2">
                    <div
                        className="border-b   py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
                    >
                        <div className="mt-8 space-y-4 lg:mt-0">

                            <div>
                                <h2 className="text-2xl font-medium">
                                    Inscreva-se na nossa promoção de Pré Black Friday
                                </h2>
                                <p className="mt-4 max-w-lg  ">
                                    Receba novidades e promoções por e-mail e seja avisado em primeira mão!
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col border rounded-xl p-4 gap-3 mt-6 w-full">
                                <Input
                                    {...register('email', { required: true })}
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <Button type="submit">
                                    Enviar
                                </Button>
                            </form>
                        </div>
                    </div>

                    <div className="py-8 lg:py-16 lg:pe-16">


                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">

                            <div>
                                <p className="font-medium ">Redes sociais</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="/" target="_blank" className="transition hover:opacity-75"> Facebook </a>
                                    </li>
                                    <li>
                                        <a href="/" target="_blank" className="  transition hover:opacity-75"> Instagram</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium ">Categorias</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a target="_blank" href="/" rel="noopener noreferrer" className="  transition hover:opacity-75"> On Road </a>
                                    </li>
                                    <li>
                                        <a href="/" className="  transition hover:opacity-75"> Off Road </a>
                                    </li>
                                    <li>
                                        <a href="/" className="  transition hover:opacity-75"> Vestuário </a>
                                    </li>
                                    <li>
                                        <a href="/" className="  transition hover:opacity-75"> Acessórios </a>
                                    </li>
                                    <li>
                                        <a href="/" className="  transition hover:opacity-75"> Outlet </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 border-t   pt-8">
                            <ul className="flex flex-wrap gap-4 text-xs">
                                <li>
                                    <a href="/" target="_blank" className="transition hover:opacity-75">Termos e condições </a>
                                </li>

                                <li>
                                    <a href="/" target="_blank" className="transition hover:opacity-75">Política de privacidade </a>
                                </li>
                            </ul>

                            <p className="mt-8 text-xs  ">&copy; 2024. Todos os Direitos Reservados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
