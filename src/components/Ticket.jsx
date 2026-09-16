import { useState } from "react";

const shows = [
  {
    date: "09",
    month: "OUT",
    city: "Nilópolis",
    state: "RJ",
    url: "https://www.sympla.com.br/evento/tributo-ao-rbd-experience-live-in-nilopolis-rj/3453259",
    platform: "Sympla",
  },
  {
    date: "10",
    month: "OUT",
    city: "Lapa",
    state: "RJ",
    url: "https://www.sympla.com.br/evento/tributo-ao-rbd-experience-live-in-lapa-rj/3453349",
    platform: "Sympla",
  },
  {
    date: "11",
    month: "OUT",
    city: "São Gonçalo",
    state: "RJ",
    url: "https://articket.com.br/e/6346/tributo-rbd-em-sao-goncalo",
    platform: "Articket",
  },
  {
    date: "21",
    month: "NOV",
    city: "Recife",
    state: "PE",
    url: "https://outgo.com.br/tributo-ao-rbd-experience-em-recife",
    platform: "Outgo",
  },
  {
    date: "22",
    month: "NOV",
    city: "Fortaleza",
    state: "CE",
    url: "https://outgo.com.br/tributo-ao-rbd-experience-em-fortaleza",
    platform: "Outgo",
  },
  {
    date: "11",
    month: "DEZ",
    city: "São Paulo",
    state: "SP",
    url: "https://olhaoingresso.showare.com.br/Default.aspx?display=list&filter=none&eventid=2137&websaleschannelkey=internetmh",
    platform: "Olha o Ingresso",
  },
];

export default function TicketsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="ingressos"
      style={{
        background: "#0a0a0a",
        padding: "100px 24px 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Large background text */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-Montserrat)",
          fontSize: "clamp(120px, 20vw, 280px)",
          fontWeight: "900",
          color: "transparent",
          WebkitTextStroke: "1px rgba(248,248,248,0.04)",
          letterSpacing: "-10px",
          userSelect: "none",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          lineHeight: 1,
        }}
      >
        TOUR
      </div>

      {/* Red glow left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(214,31,58,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Red glow right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "20%",
          right: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(214,31,58,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>

        {/* Section header */}
        <div style={{ marginBottom: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ height: "1px", flex: 1, background: "rgba(248,248,248,0.1)" }} />
            <span
              style={{
                fontFamily: "var(--font-Josefin)",
                fontSize: "11px",
                letterSpacing: "8px",
                color: "#d61f3a",
                textTransform: "uppercase",
              }}
            >
              Experience Live
            </span>
            <div style={{ height: "1px", flex: 1, background: "rgba(248,248,248,0.1)" }} />
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <h2
              style={{
                fontFamily: "var(--font-Montserrat)",
                fontSize: "clamp(38px, 8vw, 70px)",
                fontWeight: "900",
                color: "#f8f8f8",
                lineHeight: 0.9,
                letterSpacing: "-3px",
                margin: 0,
              }}
            >
              SHOWS &<br />
              <span style={{ color: "#d61f3a", WebkitTextStroke: "0px" }}>INGRESSOS</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-Josefin)",
                fontSize: "13px",
                color: "#9ca3af",
                letterSpacing: "2px",
                lineHeight: 1.8,
                maxWidth: "220px",
                textTransform: "uppercase",
                textAlign: "right",
              }}
            >
              Tributo ao RBD<br />Brasil 2026
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {shows.map((show, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <a
                key={i}
                href={show.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "block",
                  textDecoration: "none",
                  position: "relative",
                  background: isHovered ? "#d61f3a" : "#111111",
                  padding: "36px 32px",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                {/* Noise texture overlay */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: isHovered ? 0.06 : 0.03,
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                    backgroundSize: "150px 150px",
                    pointerEvents: "none",
                    transition: "opacity 0.3s ease",
                  }}
                />

                {/* Number index */}
                <div
                  style={{
                    position: "absolute",
                    top: "24px",
                    right: "28px",
                    fontFamily: "var(--font-Montserrat)",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    color: isHovered ? "rgba(248,248,248,0.4)" : "rgba(248,248,248,0.15)",
                    transition: "color 0.3s ease",
                  }}
                >
                  0{i + 1}
                </div>

                {/* Date block */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "28px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-Montserrat)",
                      fontSize: "64px",
                      fontWeight: "900",
                      lineHeight: 1,
                      color: isHovered ? "#f8f8f8" : "#f8f8f8",
                      letterSpacing: "-3px",
                    }}
                  >
                    {show.date}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-Josefin)",
                      fontSize: "14px",
                      fontWeight: "700",
                      letterSpacing: "4px",
                      color: isHovered ? "rgba(248,248,248,0.7)" : "#d61f3a",
                      textTransform: "uppercase",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {show.month}
                  </span>
                </div>

                {/* City + State */}
                <div style={{ marginBottom: "32px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-Montserrat)",
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "#f8f8f8",
                      margin: "0 0 4px",
                      lineHeight: 1.1,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {show.city}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-Josefin)",
                      fontSize: "11px",
                      letterSpacing: "5px",
                      color: isHovered ? "rgba(248,248,248,0.6)" : "#9ca3af",
                      textTransform: "uppercase",
                      margin: 0,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {show.state} — Brasil
                  </p>
                </div>

                {/* Bottom row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "20px",
                    borderTop: `1px solid ${isHovered ? "rgba(248,248,248,0.2)" : "rgba(248,248,248,0.07)"}`,
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-Josefin)",
                      fontSize: "10px",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: isHovered ? "rgba(248,248,248,0.5)" : "rgba(156,163,175,0.6)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {show.platform}
                  </span>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontFamily: "var(--font-Josefin)",
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: isHovered ? "#f8f8f8" : "#d61f3a",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Ingressos
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        border: `1px solid ${isHovered ? "rgba(248,248,248,0.5)" : "#d61f3a"}`,
                        fontSize: "13px",
                        transition: "all 0.3s ease",
                        transform: isHovered ? "translate(3px, 0)" : "none",
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom line */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div style={{ height: "1px", flex: 1, background: "rgba(248,248,248,0.08)" }} />
          <span
            style={{
              fontFamily: "var(--font-Josefin)",
              fontSize: "10px",
              letterSpacing: "4px",
              color: "rgba(255, 255, 255, 0.958)",
              textTransform: "uppercase",
            }}
          >
            Selecione um show para comprar
          </span>
          <div style={{ height: "1px", flex: 1, background: "rgba(248,248,248,0.08)" }} />
        </div>
      </div>
    </section>
  );
}