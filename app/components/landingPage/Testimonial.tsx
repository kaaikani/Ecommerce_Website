"use client";
import { cn } from "~/lib/utils";

const testimonials = [
  {
    name: "Shalini",
    role: "IT Employee",
    bgImage:
      "https://img.youtube.com/vi/-GlMt-T_0IM/hqdefault.jpg",
    youtube: "https://youtube.com/shorts/-GlMt-T_0IM?si=Y49KvFxRtWPbzQOb",
  },
  {
    name: "Preethi",
    role: "Proprietor, Preethi FASHIONMART",
    bgImage:
      "https://img.youtube.com/vi/1RUs9t8ie68/hqdefault.jpg",
    youtube: "https://youtube.com/shorts/1RUs9t8ie68?si=0u_PHy79cAM70L9C",
  },
  {
    name: "Buhari Raja",
    role: "Owner, Buhari's Uppukandam",
    bgImage:
      "https://img.youtube.com/vi/PAbmMoDZ__w/hqdefault.jpg",
    youtube: "https://youtube.com/shorts/PAbmMoDZ__w?si=MUAihdOtKrBI9sk-",
  },
];

export function Testimonial() {
  return (
    <div className="w-full border-t border-gray-200 bg-gray-100 py-10 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-4xl sm:text-5xl lg:text-5xl font-[900] w-full text-center uppercase text-green-950 mb-4" >
        What Our Customers Say....
      </h2>

       <p className="mt-2 text-lg text-gray-600  sm:text-center">
               At Kaaikani, Real voices, real stories — because trust is earned, not claimed.
          </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <a
            key={idx}
            href={testimonial.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative overflow-hidden rounded-xl shadow-xl h-96 p-4 flex flex-col justify-between",
              "bg-cover bg-center transition-transform hover:scale-[1.02]"
            )}
            style={{ backgroundImage: `url(${testimonial.bgImage})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

            {/* Header */}
            <div className="relative z-10 flex items-center space-x-4">
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-300 text-sm">{testimonial.role}</p>
              </div>
            </div>

            {/* Footer Content */}
            <div className="relative z-10">
              <h3 className="text-white text-xl font-bold mb-2">
                Watch Testimonial
              </h3>
              <p className="text-gray-200 text-sm">
                Click to hear from our happy customer.
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
    </div>
    
  );
}
