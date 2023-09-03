import { HiArrowDownTray } from "react-icons/hi2"

export function Hero() {
    return (
        <section className="bg-gradient-to-tr from-black to-gray-900 text-white d:rounded-br-[180px]">
            <div className="container mx-auto max-w-4x1 p-2 py-12 flex flex-col md:flex-row">
            <div className="basis-1/2">
                        <h1 className="mb-6 text-center md:text-left ">
                            <span className="font-handwriting block text-3xl text-center md:text-left">Olá, me chamo</span>
                            <span className="font-headline text-5xl font-semibold text-center md:text-left">Felipe</span>
                            <span className="font-headline text-5xl font-light text-blue-400 text-center md:text-left">
                                Nonato
                            </span>
                        </h1>
                        <h2 className="font-semibold flex items-center justify-content gap-2 text-center md:text-left">
                            <div className="h-1 w-12 rounded-full bg-blue-800"></div>
                                Desenvolvedor Front-end
                        </h2>
                        <p className="text-gray-600 my-6 text-center md:text-left">
                                Desenvolvedor Front-end apaixonado por transformar a realidade por meio de interfaces de usuário envolventes e funcionais. 
                        </p>
                        <div className="flex items-center gap-1 justify-center md:justify-start gap 2">
                            <a href="#contact" className="underline font-bold text-white">Fale Comigo</a>
                            <span className="italic text-gray-500">ou</span>
                            <a href="https://drive.google.com/file/d/1xlZCboxc-NzJHoUrkZf7Sf9-vuvKnC1n/view?usp=sharing" 
                            className="button text-gray-600 hover:text-gray-900 flex items-center gap-1" 
                            target="_blank"
                            >
                                <HiArrowDownTray />
                                Baixe meu CV
                            </a>
                        </div>
                    </div>
                <div className="basis-1/2"></div>
            </div>
        </section>
    )
}