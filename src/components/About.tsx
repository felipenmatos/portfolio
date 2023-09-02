//import ImageProfile from "../assets/imagemProfile.jpg"

export function About() {
    return (
        <section className="container mx-auto my-4 max-w-10xl p-4">
            <div className="relative p-4 text-center">
                <h2 className="relative text-blue-900 z-10">
                    <span className="mr-2 font-headline text-3xl font-bold">
                        Sobre
                    </span>
                    <span className="font-handwriting text-4xl">
                        Mim
                    </span>
                </h2>
                <p className="relative text-sm text-gray-600">
                Olá! Sou Felipe Nonato, um entusiasta da web e desenvolvedor Front-end apaixonado por criar experiências digitais impressionantes. Com uma paixão pela combinação de design e código, minha jornada como desenvolvedor tem sido uma busca constante para unir a estética visual à funcionalidade perfeita.
                </p>
                <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40">

                </div>
            </div>
            <div className=" relative mx-auto mt-20 max-w-lg ">
                <div className="relative bg-blue-100 w-full rounded-lg p-4 ps-20 md:h-64 md:ps-48">
                    <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
                        <p className="font-handwriting text-lg font-bold">Olá,</p>
                        <p>
                            <span className="mr-1">Pode me chamar de</span>
                            <span className="font-headline font-bold uppercase text-blue-900">Felps</span>
                        </p>
                        <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Idade:
                  </td>
                  <td className="text-xs">29</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Celular:
                  </td>
                  <td>
                    <a
                      href="tel:+551299999999"
                      className="underline hover:text-blue-800 text-xs"
                    >
                      +55 75 9.98241-0325
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <a
                      href="#"
                      className="underline hover:text-blue-800 text-xs"
                    >
                      contato.felipenonato@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>
                    <a
                      href="https://goo.gl/maps/4yacADQtLB8jz8zn9?coh=178573&entry=tt"
                      target="_blank"
                      className="underline hover:text-blue-800 text-xs"
                    >
                      Santo Antônio de Jesus - Ba
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
                    </div>
                    <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 
                        bg-[url('https://a.imagem.app/by72b3.jpeg')] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56
                        ">
                    </div>
                </div>
            </div>
        </section>
    )
}