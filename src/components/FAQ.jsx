import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi";

const faqs = [
  {
    question: "Esse show funciona bem para eventos?",
    answer:
      "Sim. O Tributo ao RBD Experience foi pensado para gerar conexão imediata com o público, criando uma experiência divertida, nostálgica e memorável.",
  },
  {
    question: "O show é profissional e estruturado?",
    answer:
      "Sim. O projeto foi pensado para entregar performance, figurino, presença de palco e experiência visual de forma profissional.",
  },
  {
    question: "Serve para quais tipos de eventos?",
    answer:
      "Casas de show, eventos corporativos, shoppings, festas temáticas, ativações de marca, eventos públicos e festivais.",
  },
  {
    question: "Vocês atendem fora da cidade?",
    answer:
      "Sim. Atendemos diferentes regiões mediante disponibilidade de agenda, logística e orçamento.",
  },
  {
    question: "Como contratar?",
    answer:
      "Basta clicar no botão ''Solicitar Orçamento'' da página e encaminhar a sua proposta personalizada.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="bg-black px-4 py-16 text-white sm:px-6 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red">
            FAQ
          </p>

          <h2 className="mt-4 font-Josefin text-3xl font-semibold sm:text-4xl md:text-5xl">
            Dúvidas frequentes de contratantes
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
            Informações rápidas para facilitar sua decisão.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left"
                >
                  <span>{item.question}</span>

                  {isOpen ? (
                    <HiMinus className="text-red" />
                  ) : (
                    <HiPlus className="text-red" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-5 pb-5 text-sm leading-7 text-white/70">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
