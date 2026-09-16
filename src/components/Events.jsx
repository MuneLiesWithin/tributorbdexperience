import { motion } from "framer-motion";
import {
  FaBuilding,
  FaStore,
  FaGlassCheers,
  FaMusic,
  FaUsers,
  FaStar,
} from "react-icons/fa";

const events = [
  {
    icon: FaBuilding,
    title: "Casas de Show",
    text: "Atração ideal para casas que buscam público, nostalgia e noites memoráveis.",
  },
  {
    icon: FaStore,
    title: "Shoppings",
    text: "Perfeito para campanhas promocionais, datas especiais e grande circulação.",
  },
  {
    icon: FaGlassCheers,
    title: "Eventos Privados",
    text: "Aniversários, confraternizações e festas com experiência temática única.",
  },
  {
    icon: FaMusic,
    title: "Festivais",
    text: "Entrega visual impactante e repertório que conecta gerações.",
  },
  {
    icon: FaUsers,
    title: "Corporativos",
    text: "Shows para marcas, convenções e ações internas com alto engajamento.",
  },
  {
    icon: FaStar,
    title: "Ativações",
    text: "Experiência nostálgica para marcas que querem chamar atenção.",
  },
];

export default function Events() {
  return (
    <section
      id="eventos"
      className="bg-black px-4 py-16 text-white sm:px-6 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red">
            Eventos
          </p>

          <h2 className="mt-4 font-Josefin text-3xl font-semibold sm:text-4xl md:text-5xl">
            Um show versátil para diferentes formatos
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
            O Tributo ao RBD Experience se adapta a diversos tipos de eventos,
            entregando nostalgia, energia e conexão com o público.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-red/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red/10">
                  <Icon className="text-2xl text-red" />
                </div>

                <h3 className="mt-5 font-Josefin text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://wa.me/5511963801179"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-red px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-white hover:text-red"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}