import { FaQuoteLeft } from "react-icons/fa"

export function Testimonials() {
  return (
    <section className="container mx-auto max-w-4xl p-4 py-8">
      <div className="relative mb-4 p-4 text-center">
        <h2 className="relative z-50 mb-2 font-bold">
          <span className="mr-2 font-headline text-3xl text-gray-800">
            Depoimentos de
          </span>
          <span className="font-handwriting text-4xl text-blue-800">
            Trabalho
          </span>
        </h2>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
      </div>
      <figure>
        <FaQuoteLeft className="h-8 w-8 text-gray-600" />
        <blockquote className="mb-6">
          <p className="text-2xl text-gray-900">
          O Felipe é super proficiente em seu cargo de Frontend e um super amigo, um cara criativo e uma pessoa super engajada junto ao time, é sempre muito bom ter um rapaz como o Felipe na equipe.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src="https://a.imagem.app/byTepe.jpeg"
            alt="Fernando Alencar"
          />
          <div className="flex items-center divide-x-2 divide-gray-200">
            <div className="pr-3 font-medium text-gray-900">Fernando Alencar</div>
            <div className="pl-3 text-sm font-light text-gray-500">
              Ayt1.Dev
            </div>
          </div>
        </figcaption>
      </figure>
      <figure>
        <FaQuoteLeft className="h-8 w-8 text-gray-600" />
        <blockquote className="mb-6">
          <p className="text-2xl text-gray-900">
          Felipe é um profissional dedicado, desenvolvedor competente e com bons conhecimentos técnicos na área do Front-End. Criativo em suas soluções, ele manda muito bem ao desenvolver interfaces web, deixando-as bem organizadas, estruturadas e sempre prezando por sua qualidade.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src="https://a.imagem.app/byTlRG.jpeg"
            alt="Luís Carlos"
          />
          <div className="flex items-center divide-x-2 divide-gray-200">
            <div className="pr-3 font-medium text-gray-900">Luís Carlos</div>
            <div className="pl-3 text-sm font-light text-gray-500">
              Ayt1.Dev
            </div>
          </div>
        </figcaption>
      </figure>
      <figure>
        <FaQuoteLeft className="h-8 w-8 text-gray-600" />
        <blockquote className="mb-6">
          <p className="text-2xl text-gray-900">
          Proatividade e muita energia são características que o Felipe tem ao lidar com os desafios cotidianos no desenvolvimento de software. Sempre pronto a fazer entregas de qualidade e bastante comunicativo com a equipe tornando assim o ambiente de trabalho muito mais produtivo.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src="https://a.imagem.app/byTrLb.jpeg"
            alt="Júlio Miguel"
          />
          <div className="flex items-center divide-x-2 divide-gray-200">
            <div className="pr-3 font-medium text-gray-900">Júlio Miguel</div>
            <div className="pl-3 text-sm font-light text-gray-500">
              Ayt1.Dev
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}