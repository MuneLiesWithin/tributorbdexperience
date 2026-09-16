import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import BgContact from "../assets/bg-contact.png";
import BgContactMobile from "../assets/bg-contact-mobile.png";

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 md:px-8 md:py-28"
    >
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 640px)" srcSet={BgContactMobile} />
          <img
            src={BgContact}
            alt="background"
            className="h-full w-full object-cover object-[center_70%] sm:object-center"
          />
        </picture>
      </div>

      <div className="absolute inset-0 bg-black/60 md:bg-black/50" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />

      <div className="relative mx-auto max-w-5xl text-center pt-20  md:pt-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.1,
          }}
          className="font-Josefin leading-tight sm:text-4xl md:text-3xl md:mt-40 pt-12 sm:pt-20 md:pt-10"
        >
          Viva a nostalgia com o
          <span className="block  font-semibold">
            <span className="bg-gradient-to-r from-red-700 via-red-400 to-red-700 bg-clip-text text-transparent font-semibold">
              TRIBUTO AO RBD EXPERIENCE
            </span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="mx-auto mt-10 max-w-2xl text-sm text-white/70 sm:text-base"
        >
          Fale com a equipe e solicite uma proposta personalizada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="flex mt-5 items-center justify-center gap-5"
        >
          <a
            href="https://wa.me/5511963801179"
            target="_blank"
            rel="noreferrer"
            className="
    flex items-center  justify-center
     w-8 h-8
    rounded-full
    bg-[#25D366]
    text-white
    shadow-lg shadow-[#25D366]/40
    transition hover:scale-110
  "
          >
            <FaWhatsapp size={15} />
          </a>
          <a
            href="https://www.instagram.com/otributoaorbd/"
            target="_blank"
            rel="noreferrer"
            className="
    flex items-center justify-center
    w-8 h-8
    rounded-full
    bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600
    text-white
    shadow-lg shadow-pink-500/30
    transition hover:scale-110
  "
          >
            <FaInstagram size={15} />
          </a>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-5">
            <p className="text-sm font-semibold text-white">Eventos</p>
            <p className="mt-2 text-sm text-white/60">
              Casas de show, festas, shoppings e ações de marca.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-5">
            <p className="text-sm font-semibold text-white">Atendimento</p>
            <p className="mt-2 text-sm text-white/60">
              Brasil e apresentações especiais sob consulta.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-5">
            <p className="text-sm font-semibold text-white">Orçamento</p>
            <p className="mt-2 text-sm text-white/60">
              Proposta personalizada conforme formato do evento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
