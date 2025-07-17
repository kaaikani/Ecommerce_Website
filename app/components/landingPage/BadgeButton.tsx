import { Star } from "lucide-react";
import { Button } from "../ui/moving-border";

export default function ReviewCard() {
  return (
    <div className="px-4 py-8 bg-black flex justify-center">
     <Button
  as="div"
  borderRadius="1.5rem"
  duration={8000}
  containerClassName="w-full max-w-sm sm:max-w-2xl"
  borderClassName="bg-[radial-gradient(#fde047_40%,transparent_60%)]"
  className="p-3 sm:p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4 text-center sm:text-left"
>
  <p className="text-sm font-medium text-white">
    Empowering over 25,000+ Happy Customers throughout Tamilnadu
  </p>

  <div className="flex items-center gap-1 bg-black/60 rounded-full px-3 py-1">
    <div className="flex items-center gap-0.5 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
    <span className="text-xs font-semibold text-white">4.9</span>
  </div>
</Button>

    </div>
  );
}
