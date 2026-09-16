import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "../assets/tributorbd-logo.png";

const links = [
  { label: "Sobre", href: "#sobre" },
  {label: "Ingressos", href: "#ingressos"},
  { label: "Integrantes", href: "#integrantes" },
  { label: "Eventos", href: "#eventos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-black font-Montserrat backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-red/40 to-black" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="shrink-0 transition duration-300 hover:scale-[1.02]"
          aria-label="Voltar ao início"
        >
          <img
            src={BrandLogo}
            alt="Tributo ao RBD Experience"
            className="h-15 w-auto object-contain sm:h-14 md:h-25"
          />
        </a>

        <nav className="hidden md:flex md:items-center md:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-base font-medium text-white/80 transition duration-300 hover:-translate-y-[1px] hover:bg-black/70 hover:text-red"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="rounded-2xl border border-white/10 bg-black/60 p-2.5 text-white shadow-sm transition hover:bg-black md:hidden"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="absolute left-0 top-full w-full border-t border-white/10 bg-black/95 shadow-lg backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
