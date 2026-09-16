import BloomLogo from "../assets/marcadagua-bloompages.svg?react";
import BrandLogo from "../assets/tributorbd-logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-10 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-red/10 to-black" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 text-sm md:flex-row md:justify-between">
        <a href="#inicio" className="transition duration-300 hover:scale-105">
          <img
            src={BrandLogo}
            alt="Tributo ao RBD Experience"
            className="h-15 w-auto"
          />
        </a>

        <p className="text-center text-white/50">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>

        <div className="flex flex-col items-center gap-2 md:items-end">
          <p className="text-white/50">Desenvolvido por</p>

          <a
            href="https://bloompages.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:scale-105 hover:opacity-90"
          >
            <BloomLogo className="h-12 w-auto text-red/80" />
          </a>
        </div>
      </div>
    </footer>
  );
}
