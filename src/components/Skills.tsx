import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2"

export function Skills() {
  const educations = [
    {
      name: "Desenvolvimento de Softwares | Cubos Academy",
    },
    {
      name: "Desenvolvimento Front-end | Rocketseat",
    },
    {
        name: "Testes Unitários | DIO",
    },
    {
        name: "React com Hooks | Udemy",
    },
    {
        name: "Desenvolvimento Responsivo | Udemy",
    },
    {
        name: "Javascript Completo ES6 | Origamid",
    },
    {
        name: "Javascript Completo ES6 | Origamid",
    },
    {
        name: "Website com HTML5 e CSS3 | DIO",
    },
    {
        name: "Minicurso UX/UI Design | Cubos Academy",
    },
  ]

  const skills = [
    {
      name: "HTML5/CSS3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      level: 100,
    },
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
      level: 90,
    },
    {
      name: "React.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      level: 95,
    },
    {
        name: "React Native",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        level: 85,
      },
    {
        name: "Typescript",
        icon: "https://skillicons.dev/icons?i=ts",
        level: 85,
    },
    {
        name: "Vue Js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
        level: 70,
    },
    {
        name: "Jest",
        icon: "https://skillicons.dev/icons?i=jest",
        level: 70,
    },
    {
      name: "Node.js",
      icon: "https://skillicons.dev/icons?i=nodejs",
      level: 80,
    },
    {
        name: "Figma",
        icon: "https://skillicons.dev/icons?i=figma",
        level: 90,
    },
    {
        name: "PostgreSQL",
        icon: "https://skillicons.dev/icons?i=postgresql",
        level: 60,
    },
  ]

  return (
    <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative z-50 mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-gray-800">
              Educação &
            </span>
            <span className="font-handwriting text-4xl text-blue-800">
              Skills
            </span>
          </h2>
          <p className="relative text-sm text-gray-700">
            Front-end Developer | React.js | React Native | Node.js | TypeScript
            | JavaScript
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiAcademicCap className="h-8 w-8 text-blue-600" />
              Educação
            </h3>

            {educations.map((education, index) => (
              <div
                key={`education-${index}`}
                className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900"
              >
                {education.name}
              </div>
            ))}
          </div>
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiCodeBracketSquare className="h-8 w-8 text-blue-600" />
              Skills
            </h3>

            <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
              {skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-10 w-10 rounded"
                    />
                  </div>
                  <div className="w-full flex-grow">
                    <h4 className="font-headlin text-gray-900">{skill.name}</h4>
                    <div className="h-2.5 w-full rounded-full bg-white">
                      <div
                        className="h-2.5 rounded-full bg-blue-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}