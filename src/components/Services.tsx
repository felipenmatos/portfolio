import {
    HiEyeDropper,
    HiComputerDesktop,
    HiDevicePhoneMobile,
  } from "react-icons/hi2"

export function Service() {
    const services = [
        {
          title: "Web",
          description:
            "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next.js, Typescript.",
          icon: <HiComputerDesktop className="h-12 w-12" />,
        },
        {
            title: "Mobile",
            description: "Desenvolvimento de aplicativos Android e iOS.",
            icon: <HiDevicePhoneMobile className="h-12 w-12" />,
        },
        {
          title: "Ui Design",
          description: "Desenvolvimento de interfaces funcionais e modernos.",
          icon: <HiEyeDropper className="h-12 w-12" />,
        },
        
      ]

    return (
        <section className="container mx-auto my-12 max-w-4x1 p-4">
            <div className="p-4 text-center">
                <p className="text-sm font-semibold uppercase text-blue-600">
                    O que eu faço de melhor
                </p>
                <h2 className="mb-2 font-bold text-blue-900">
                    <span className="mr-2 font-headline text-3xl">
                        Meus
                    </span>
                    <span className="font-handwriting text-4xl">
                        Serviços
                    </span>
                </h2>
                <p className="text-sm text-gray-600">
                    Trabalho com foco em desenvolvimento Front-end Web e Mobile, desde a experiência e usabilidade ao desenvolvimento da aplicação.
                </p>
            </div>
            <div className="mt-6 flex flex-col gap-2 md:flex-row">
                {
                    services.map((service, index) => (
                        <div className="basis-1/3 rounded-lg bg-blue-700 p-4 text-white" key={`service-${index}`}>
                            <div className="mb-2">
                                {service.icon}
                            </div>
                            <div className="text-xl font-bold">
                                {service.title}
                            </div>
                            <div className="text-sm">
                                {service.description}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}