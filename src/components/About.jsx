import { motion } from "framer-motion";
import ImgAbout from "../assets/about-rbd.png";

const highlights = [
  {
    value: "+3M",
    label: "views orgânicas nas redes",
  },
  {
    value: "8 shows",
    label: "em 7 cidades (Tour 2025)",
  },
  {
    value: "Eventos",
    label: "corporativos e sociais",
  },

  {
    value: "Mídia",
    label: "Brasil e México",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-red sm:text-xs sm:tracking-[0.25em]">
            Sobre o show
          </p>

          <h2 className="mt-3 max-w-xl font-Josefin text-3xl font-semibold leading-tight text-white sm:mt-4 sm:text-3xl md:text-3xl">
            Nossa missão é criar uma experiência memorável para os fãs do{" "}
            <span className="bg-gradient-to-r via-red font-semibold">RBD.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-white/75 sm:mt-6 sm:text-base sm:leading-7">
            O Tributo ao{" "}
            <span className="bg-gradient-to-r from-black/90 via-red/90 font-semibold">
              {" "}
              RBD{" "}
            </span>
            é um grupo musical formado por 6 jovens que buscam homenagear o
            extinto grupo mexicano RBD, proporcionando momentos de pura magia e
            nostalgia para os fãs da banda.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            Em uma apresentação ao vivo, o grupo leva ao palco o melhor
            repertório nostálgico aliado ao carisma, coreografias, performances
            vocais, trejeitos inspirados nos integrantes e figurinos da banda
            mexicana mais amada pelos brasileiros.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            Com mais de 3 milhões de visualizações orgânicas nas redes sociais,
            o projeto vem conquistando espaço na mídia nacional e internacional,
            com destaque em veículos do México e do Brasil. O grupo também já
            participou de programas de televisão em rede nacional, incluindo
            duas aparições no SBT.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 text-center sm:gap-4">
            {highlights.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur-sm sm:p-4"
              >
                <span className="block font-Josefin text-xl text-white sm:text-2xl md:text-3xl">
                  {item.value}
                </span>

                <span className="mt-1 block text-xs leading-5 text-white/65 sm:text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative order-1 lg:order-2"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-red/20 via-transparent to-red/10 blur-2xl sm:-inset-4" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
            <img
              src={ImgAbout}
              alt="Elenco Tributo ao RBD Experience"
              className="h-[280px] w-full object-cover sm:h-[380px] md:h-[460px] lg:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 sm:bottom-0 left-0 w-full p-3 sm:p-6 md:p-8">
              <div className="mx-auto w-full max-w-[240px] sm:max-w-md rounded-xl border border-white/10 bg-black/45 p-2 sm:p-4 text-center backdrop-blur-md">
                <p className="text-[7px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] text-red">
                  Tributo oficial experience
                </p>

                <p className="text-[10px] leading-4 sm:mt-3 sm:text-sm sm:leading-6 bg-gradient-to-r from-white/90 via-red/90 to-white/80 bg-clip-text text-transparent">
                  Performance visual impactante, repertório nostálgico e uma
                  atmosfera pensada para transformar o evento em experiência.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
