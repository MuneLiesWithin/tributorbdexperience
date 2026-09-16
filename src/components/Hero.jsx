import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bgHero from "../assets/hero-rbd.png";
import bgHeroMobile from "../assets/bg-hero-mobile.png";

const phrases = ["Tributo ao RBD Experience"];

const items = [
  "🎤 Show ao vivo",
  "🌎 Brasil & Worldwide",
  "✨ Nostalgia que engaja",
];

function TypewriterText({ texts, speed = 70, pause = 1800 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayedText("");
      setCharIndex(0);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, pause);

    return () => clearTimeout(timeout);
  }, [charIndex, textIndex, texts, speed, pause]);

  return (
    <span className="inline-block break-words bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
      {displayedText}
      <span className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-red-500 align-middle" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-start justify-center overflow-hidden bg-black font-Montserrat pt-20"
    >
      <picture>
        <source media="(max-width: 640px)" srcSet={bgHeroMobile} />
        <img
          src={bgHero}
          alt="Tributo ao RBD Experience"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/95" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-72 pb-6 text-center sm:px-6 md:px-8 md:pt-72">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="font-Josefin text-xl font-semibold leading-tight sm:text-2xl md:text-4xl">
            <TypewriterText texts={phrases} speed={70} pause={1800} />
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-xl text-sm leading-6 text-gray-300 sm:text-base md:text-lg"
        >
          Show tributo para eventos, casas de show e ativações que fazem o
          público cantar do início ao fim.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/80"
        >
          {items.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10"
        >
          <a
            href="https://wa.me/5511963801179"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-red-500 md:text-base"
          >
            Contrate agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
