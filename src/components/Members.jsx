import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiArrowLeft } from "react-icons/fi";

import { FaCrown, FaPeace, FaStar, FaGem, FaHatCowboy } from "react-icons/fa";
import { MdBolt } from "react-icons/md";

const images = import.meta.glob("../assets/members/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

const members = [
  {
    name: "Jessy",
    role: "Interpreta : Anahí",
    icon: <FaStar className="text-yellow-400" />,
    image: images["../assets/members/jessy-anahi.png"],
    bio: `Artista há mais de 16 anos, atuando como modelo, comunicadora e cantora. Foi através do RBD e da Anahí que nasceu o sonho de cantar.
    
  "A arte sempre foi meu refúgio, minha forma de sentir e me expressar no mundo. A interpretação sempre foi um sonho guardado no coração… e hoje poder viver isso no palco é muito especial."`,
  },
  {
    name: "Ronie",
    role: "Interpreta : Alfonso Herrera (Poncho)",
    icon: <FaHatCowboy className="text-blue-500" />,
    image: images["../assets/members/ronie-poncho.png"],
    bio: `Cresceu fazendo teatro e participando de grupos de dança. Formado como ator pela Escola Wolf Maya e estuda canto.

      "Acredito muito nessa junção entre arte, comunicação e gosto de transitar entre esses dois universos, sempre buscando criar, me expressar e conectar pessoas."`,
  },

  {
    name: "Dangello",
    role: "Interpreta : Christopher Uckermann",
    icon: <MdBolt size={30} className="text-yellow-200" />,
    image: images["../assets/members/dan-ucker.png"],
    bio: `Cantor e ator em formação, com experiência em espetáculos infantis e interpretação de personagens em ambientes temáticos.
      
      Desde 2018, é criador e produtor cultural do projeto Tributo ao RBD Experience.`,
  },

  {
    name: "Bell",
    role: "Interpreta : Dulce María",
    icon: <FaPeace className="text-red-500" />,
    image: images["../assets/members/bell-dulce.png"],
    bio: `Consultora de vinhos, mergulha em aromas e sabores. Já como guia de turismo, conta histórias de lugares e culturas.
      
      Como cantora no Tributo, leva a nostalgia para fãs de RBD e especialmente da Dulce por todo o país!`,
  },
  {
    name: "Caca",
    role: "Interpreta : Maite Perroni",
    icon: <FaGem className="text-pink-300" />,
    image: images["../assets/members/caca-maite.png"],
    bio: ` Trabalha com marketing há 6 anos e é sócia do Ronie na Artevo Agência. Tem passagem pelo teatro, hoje estuda canto e cria seus próprios figurinos, réplicas fiéis dos looks da Maite.

  "Fazer parte de um grupo cover sempre foi um sonho e hoje é realidade. Assim como o RBD ensinou: quando a gente luta pelos sonhos, eles de fato se tornam reais."`,
  },
];

export default function Members() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  const member = members[current];

  return (
    <section
      id="integrantes"
      className="bg-[#050505] px-4 py-16 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-semibold uppercase tracking-[0.25em] text-red">
            Integrantes
          </h2>

          <p className="mt-5 text-sm text-white/70">
            Conheça os integrantes do Tributo ao RBD Experience que transformam
            cada apresentação.
          </p>
        </div>

        <div className="relative mt-16 ">
          <button
            onClick={prev}
            className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 backdrop-blur hover:bg-white/40 cursor-pointer"
          >
            <FiChevronLeft size={28} />
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 backdrop-blur hover:bg-white/40 cursor-pointer"
          >
            <FiChevronRight size={28} />
          </button>

          <div className="flex md:hidden items-center justify-center gap-2 text-white/50 text-sm mb-4 animate-pulse">
            deslize para o lado
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={member.name}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -60) next();
                if (info.offset.x > 60) prev();
              }}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4 }}
              className="grid w-full max-w-4xl mx-auto items-center gap-8 md:grid-cols-2"
            >
              <div className="overflow-hidden rounded-2xl bg-black/40 w-full md:w-auto flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-[260px] h-[420px] md:w-[500px] md:h-[600px] object-cover transition-all duration-500 ${
                    member.imageScale || "scale-110"
                  }`}
                  style={{
                    objectPosition: member.imagePosition || "top",
                  }}
                />

                
              </div>
              <div className="text-center md:text-left px-2 md:px-0">
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <h3 className="font-Josefin text-2xl md:text-3xl font-semibold">
                    {member.name}
                  </h3>
                  <span className="text-2xl">{member.icon}</span>
                </div>

                <p className="mt-2 text-xs md:text-sm uppercase tracking-widest text-white/60">
                  {member.role}
                </p>

                <p className="mt-5 md:mt-6 text-sm md:text-base text-white/70 leading-7 md:max-w-md whitespace-pre-line">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
