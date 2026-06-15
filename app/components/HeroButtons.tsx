"use client";

export default function HeroButtons() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={() => scrollTo("#contact")}
        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200 text-sm cursor-pointer"
      >
        Get in Touch
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
      <button
        onClick={() => scrollTo("#about")}
        className="inline-flex items-center justify-center gap-2 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200 text-sm cursor-pointer"
      >
        Learn More
      </button>
    </div>
  );
}
