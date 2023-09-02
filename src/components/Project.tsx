import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export function Project() {

    const projects = [
        {
          title: "Weather System",
          description: "O projeto consiste em um desenvolvimento do aplicativo Web e Mobile CLIMATEMPO, onde é possível efetuar o login e pesquisar o clima em determinada região.",
          image:
            "https://a.imagem.app/byxFmy.jpeg",
          link: "https://github.com/felipenmatos/weather_system",
          colSpan: "col-span-1",
        },
        {
          title: "Internet Plans",
          description: "Na tela Home é possível informar seu CEP para consultar localidade e planos disponíveis para contratação.",
          image:
            "https://a.imagem.app/byxTi2.jpeg",
          link: "https://github.com/felipenmatos/internet_plans",
          colSpan: "col-span-1 md:col-span-2",
        },
        {
          title: "List English App",
          description: "O projeto List English consiste em um sistema de listagem de palavras em Inglês.",
          image:
            "https://a.imagem.app/byx5rv.jpeg",
          link: "https://github.com/felipenmatos/Projects",
          colSpan: "col-span-1",
        },
        {
          title: "Click Beard",
          description: "Gerenciador de serviços para barbearias, podendo cadastrar funcionários como administrador, filtrar agendamentos e excluir. Como cliente pode agendar horário com funcionário disponível.",
          image:
            "https://a.imagem.app/byx9UT.jpeg",
          link: "https://github.com/felipenmatos/clickbeard_felipe",
          colSpan: "col-span-1",
        },
        {
          title: "Outros Projetos",
          description: "Demais projetos pessoais desenvolvidos para estudos e aprimoramento de skills.",
          image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          link: "https://github.com/felipenmatos/Projects",
          colSpan: "col-span-1",
        },
      ]

    return (
        <>
            <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador front-end.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 text-sm text-center">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
        </>
    )
}