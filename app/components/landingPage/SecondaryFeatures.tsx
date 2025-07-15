import { useId } from 'react'

import { Container } from './Container'

import {
  Sparkles, // Use any appropriate icon components you're already using
  Utensils,
  Scissors,
  Droplet,
  ShieldCheck,
  Layers,
} from 'lucide-react' // example from lucide-react or your preferred icon set

const features = [
  {
    name: 'Ready to Cook',
    description:
      'Get pre-prepped vegetables and ingredients delivered fresh — saving you hours in the kitchen.',
    icon: Utensils,
  },
  {
    name: 'Ready to Eat',
    description:
      'Enjoy farm-fresh cut fruits and healthy snacks that are ready to eat the moment they arrive.',
    icon: Sparkles,
  },
  {
    name: 'Chopped Products',
    description:
      'Uniformly chopped vegetables that are recipe-ready — perfect for curries, stir-fries, and more.',
    icon: Scissors,
  },
  {
    name: 'Cleaned Products',
    description:
      'All our items are hygienically cleaned and sorted, so you never have to worry about prep.',
    icon: Droplet,
  },
  {
    name: 'Peeled Products',
    description:
      'We do the peeling, you do the cooking — ideal for time-saving, especially for onions and garlic.',
    icon: ShieldCheck,
  },
  {
    name: 'Grated Products',
    description:
      'Freshly grated vegetables like carrots and coconuts, delivered with texture and taste intact.',
    icon: Layers,
  },
]




export function SecondaryFeatures() {
  return (
    <section
      id="Essentials"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-[900] w-full text-center uppercase text-green-950 mb-4"  >
  Cook Fresh, Save Time          </h2>
          <p className="mt-2 text-lg text-gray-600">
               At Kaaikani, we wash, peel, chop, and pack your vegetables just the way you want them. No mess, no hassle 
               — just open the pack and start cooking. It’s that simple.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
