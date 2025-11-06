"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-[0.25]">
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-wave w-[300%] h-[55vh] fill-blue-700/60"
      >
        <path d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,128C840,96,960,64,1080,48C1200,32,1320,32,1380,32L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>

      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-wave-delayed w-[300%] h-[65vh] fill-blue-500/50"
      >
        <path d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,160C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
  );
}
