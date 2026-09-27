import React, { useState, useEffect } from "react";

export default function ComingSoon({ 
  targetDate = "2026-10-15T00:00:00", // Cambiá esto a tu fecha objetivo
  title = "LIVE PADEL",
  subtitle = "El primer ranking en vivo del mundo. Ranking proyectado en vivo, estadísticas y mucho más." 
}) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function calculateTimeLeft(target) {
    const difference = +new Date(target) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / 1000 / 60) % 60),
        Segundos: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { Días: 0, Horas: 0, Minutos: 0, Segundos: 0 };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#0b0f17",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 1rem",
        color: "#ffffff",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Resplandor ambiental de fondo */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "500px",
          backgroundColor: "#10b981",
          opacity: 0.08,
          filter: "blur(80px)",
          borderRadius: "50%",
          pointerEvents: "none"
        }}
      />

      <div
        style={{
          maxWidth: "680px",
          width: "100%",
          textAlign: "center",
          zIndex: 1
        }}
      >

      {/* Logo de la marca */}
        <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center" }}>
          <img 
            src="../live_padel_bg.png" 
            alt="Live Padel Logo" 
            style={{
              maxHeight: "170px", 
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 12px rgba(16, 185, 129, 0.2))" // Resplandor verde sutil
            }}
          />
        </div>
        {/* Badge superior */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.25)",
            padding: "0.35rem 0.85rem",
            borderRadius: "2rem",
            color: "#10b981",
            fontSize: "0.75rem",
            fontWeight: "700",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "1.75rem"
          }}
        >
          <span style={{ fontSize: "0.6rem" }}>🟢</span> PRÓXIMAMENTE
        </div>

        {/* Título principal */}
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: "800",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1rem",
            color: "#ffffff"
          }}
        >
          {title}
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            color: "#94a3b8",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            lineHeight: 1.6,
            marginBottom: "2.5rem",
            maxWidth: "560px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {subtitle}
        </p>

        {/* Reloj de Cuenta Regresiva */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "0.75rem",
            marginBottom: "3rem"
          }}
        >
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              style={{
                backgroundColor: "#111827",
                border: "1px solid #1e293b",
                borderRadius: "0.75rem",
                padding: "1rem 0.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
                  fontWeight: "800",
                  color: "#a3e635", // Acento lima brillante para números
                  lineHeight: 1
                }}
              >
                {String(value || 0).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: "700",
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginTop: "0.5rem"
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        </div>

        {/* Footer discreto */}
        <div
          style={{
            marginTop: "3rem",
            color: "#475569",
            fontSize: "0.72rem",
            fontWeight: "600",
            letterSpacing: "0.05em"
          }}
        >
          LIVE PADEL &copy; {new Date().getFullYear()}
        </div>
      </div>
  );
}