"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Planet from "./planet";

export default function SpaceVisual() {
  const planets = ["Earth", "Mars", "Jupiter", "Saturn", "Neptune"];

  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_35%)]" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-70">
        <div className="stars" />
        <div className="stars2" />
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col px-6 py-6 md:px-12">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-[0.25em] text-white/95 md:text-3xl">
            SpaceVisual
          </h1>
        </header>

        {/* Main Viewer Area */}
        <section className="relative flex flex-1 items-center justify-center">
          {/* Planet Viewer Placeholder */}
          <div className="relative h-[380px] w-[380px] md:h-[520px] md:w-[520px]">
  <Canvas camera={{ position: [0, 0, 5] }}>
    <ambientLight intensity={1.2} />

    <directionalLight
      position={[5, 3, 5]}
      intensity={2}
    />

    <Planet />

    <OrbitControls
      enableZoom={false}
      autoRotate={false}
    />
  </Canvas>
</div>

          {/* Left Info Panel */}
          <div className="absolute left-0 top-1/2 hidden w-[260px] -translate-y-1/2 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:block">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
              Planet Data
            </p>

            <div className="space-y-5">
              <InfoItem label="Gravity" value="--" />
              <InfoItem label="Diameter" value="--" />
              <InfoItem label="Temperature" value="--" />
              <InfoItem label="Moons" value="--" />
            </div>
          </div>

          {/* Right Info Panel */}
          <div className="absolute right-0 top-1/2 hidden w-[260px] -translate-y-1/2 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:block">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
              API Information
            </p>

            <div className="space-y-4 text-sm text-white/70">
              <p>
                Dynamic information from the selected planet will appear here.
              </p>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/50">
                Waiting for API response...
              </div>
            </div>
          </div>
        </section>

        {/* Planet Selector */}
        <footer className="flex flex-col items-center gap-5 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {planets.map((planet) => (
              <button
                key={planet}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
              >
                {planet}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search planet or space object..."
              className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white outline-none backdrop-blur-xl placeholder:text-white/35 focus:border-blue-400/40"
            />
          </div>
        </footer>
      </div>

      {/* Styles */}
      <style jsx>{`
        .stars,
        .stars2 {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 40px 70px, white, transparent),
            radial-gradient(1px 1px at 90px 40px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, white, transparent),
            radial-gradient(2px 2px at 160px 30px, white, transparent);
          background-repeat: repeat;
          background-size: 220px 220px;
          animation: moveStars 80s linear infinite;
        }

        .stars2 {
          opacity: 0.4;
          animation-duration: 140s;
        }

        .planet-shadow {
          animation: floatPlanet 8s ease-in-out infinite;
        }

        @keyframes moveStars {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-220px);
          }
        }

        @keyframes floatPlanet {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </main>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-3">
      <span className="text-sm text-white/45">{label}</span>
      <span className="text-sm text-white">{value}</span>
    </div>
  );
}
