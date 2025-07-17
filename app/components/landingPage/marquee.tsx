interface MarqueeProps {
  text: string;
}

export function Marquee({ text }: MarqueeProps) {
  return (
    <div className="relative w-full overflow-hidden bg-[#BFFF00]">
      {/* Borders are on outer container for full visibility */}
      <div className="border-y-8 border-black">
        {/* Marquee content wrapper */}
        <div className="flex items-center animate-marquee-x whitespace-nowrap text-black text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter leading-none py-4">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
