'use client';

import { Fragment, useEffect, useId, useRef, useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import {
  type MotionProps,
  type Variant,
  type Variants,
  AnimatePresence,
  motion,
} from 'framer-motion';
import { useDebouncedCallback } from 'use-debounce';

import { AppScreen } from './AppScreen';
import { CircleBackground } from './CircleBackground';
import { Container } from './Container';
import { PhoneFrame } from './PhoneFrame';
import {
  DiageoLogo,
  LaravelLogo,
  MirageLogo,
  ReversableLogo,
  StatamicLogo,
  StaticKitLogo,
  TransistorLogo,
  TupleLogo,
} from './StockLogos';

import {
  ClockIcon,
  GiftIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/solid';
import { ChevronLeft, Search, ShoppingCart } from 'lucide-react';
import BadgeButton from './BadgeButton';

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

interface CustomAnimationProps {
  isForwards: boolean;
  changeCount: number;
}

const headerAnimation: Variants = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const maxZIndex = 2147483647;

const bodyVariantBackwards: Variant = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
};

const bodyVariantForwards: Variant = (custom: CustomAnimationProps) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
});

const bodyAnimation: MotionProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom: CustomAnimationProps) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
};

type ScreenProps =
  | {
      animated: true;
      custom: CustomAnimationProps;
    }
  | { animated?: false };

const features = [
  {
    name: 'Save Time with Prepped Produce',
    description:
      'We do the prep so you don’t have to. Get fruits and vegetables peeled, chopped, cleaned, or ready-to-cook—just the way you need them.',
    icon: ClockIcon,
    screen: PreppedScreen,
  },
  {
    name: 'Exclusive Coupons & Free Delivery',
    description:
      'Enjoy regular coupons, zero delivery charges, and even selected products absolutely free—just for being our customer.',
    icon: GiftIcon,
    screen: StocksScreen,
  },
  {
    name: 'Customer Happiness Guaranteed',
    description:
      'Your satisfaction is our priority. Every order is carefully handled to ensure top quality and a hassle-free experience.',
    icon: HandThumbUpIcon,
    screen: InvestScreen,
  },
];

function PreppedScreen(props: ScreenProps) {
  const items = [
    {
      name: 'Beetroot(Sliced)',
      image:
        'https://png.pngtree.com/png-vector/20231220/ourmid/pngtree-fresh-beetroots-sliced-png-image_11374015.png',
    },
    {
      name: 'Small Onion(Peeled)',
      image:
        'https://www.bbassets.com/media/uploads/p/l/40005819_6-fresho-sambar-onion-peeled-small-onion.jpg',
    },
    {
      name: 'Ginger Garlic Paste',
      image:
        'https://thumbs.dreamstime.com/b/ginger-garlic-paste-bowl-36610749.jpg',
    },
    {
      name: 'Butter Beans(Peeled)',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUHwxuVXYg5wTKE0kjYjE192yjSfMIRWVpg&s',
    },
    {
      name: 'Carrot (Grated)',
      image:
        'https://media.istockphoto.com/id/1164195896/photo/grated-carrots-isolated-on-white.jpg?s=612x612&w=0&k=20&c=qCD6lWabIC5ze8SK6flcrqSqM6Qi8z0NJa-J9EszghY=',
    },

    {
      name: 'Sweet Corn(Peeled)',
      image:
        'https://img.freepik.com/premium-photo/corn-seeds-wood-bowl-isolated_253984-235.jpg',
    },
  ];

  return (
    //  <AppScreen className="w-full bg-white min-h-screen">
    //     {/* Top Logo */}
    //     <div className="flex justify-center py-4 bg-white">
    //       <img
    //         src="/placeholder.svg?height=30&width=100" // Placeholder for Kaaikani logo
    //         alt="Kaaikani Logo"
    //         width={100}
    //         height={30}
    //         className="object-contain"
    //       />
    //     </div>

    //     {/* Sticky Header */}
    //     <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
    //       <header className="sticky top-0 z-10 flex items-center justify-between bg-[#34A853] px-6 py-4 shadow-md text-white rounded-b-3xl">
    //         <button className="text-xl font-bold">
    //           <ChevronLeft className="h-6 w-6" />
    //         </button>
    //         <h1 className="text-xl font-semibold">Cut Vegetables</h1>
    //         <div className="flex gap-4 items-center">
    //           <button className="text-lg">
    //             <Search className="h-5 w-5" />
    //           </button>
    //           <div className="relative">
    //             <button className="text-lg">
    //               <ShoppingCart className="h-5 w-5" />
    //             </button>
    //             <span className="absolute -top-1 -right-1 h-5 w-5 text-xs bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
    //               0
    //             </span>
    //           </div>
    //         </div>
    //       </header>
    //     </MotionAppScreenHeader>

    //     {/* Grid of Items */}
    //     <MotionAppScreenBody {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}>
    //       <div className="px-6 py-6">
    //         <div className="grid grid-cols-2 gap-6">
    //           {items.map((item, index) => (
    //             <div
    //               key={index}
    //               className="bg-[#F0FDF4] rounded-xl shadow-sm flex flex-col items-center p-4 hover:scale-105 transition-transform duration-200 ease-in-out"
    //             >
    //               <img
    //                 src={item.image || "/placeholder.svg"}
    //                 alt={item.name}
    //                 width={96} // Corresponds to h-24 w-24
    //                 height={96} // Corresponds to h-24 w-24
    //                 className="object-contain mb-2"
    //               />
    //               <p className="text-center text-sm font-medium text-gray-800">{item.name}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </MotionAppScreenBody>
    //   </AppScreen>
    <div className="w-full flex z-20 justify-center">
      <img
        src="/Hero-Cut.png" // <-- Replace with actual path or imported image
        alt="Prepped Screen Preview"
        className="w-[300px] md:w-[300px] shadow-xl rounded-2xl"
      />
    </div>
  );
}

function StocksScreen(props: ScreenProps) {
  return (
    // <AppScreen className="w-full">
    //   <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
    //     <AppScreen.Title>Stocks</AppScreen.Title>
    //     <AppScreen.Subtitle>March 9, 2022</AppScreen.Subtitle>
    //   </MotionAppScreenHeader>
    //   <MotionAppScreenBody
    //     {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
    //   >
    //     <div className="divide-y divide-gray-100">
    //       {[
    //         {
    //           name: 'Laravel',
    //           price: '4,098.01',
    //           change: '+4.98%',
    //           color: '#F9322C',
    //           logo: LaravelLogo,
    //         },
    //         {
    //           name: 'Tuple',
    //           price: '5,451.10',
    //           change: '-3.38%',
    //           color: '#5A67D8',
    //           logo: TupleLogo,
    //         },
    //         {
    //           name: 'Transistor',
    //           price: '4,098.41',
    //           change: '+6.25%',
    //           color: '#2A5B94',
    //           logo: TransistorLogo,
    //         },
    //         {
    //           name: 'Diageo',
    //           price: '250.65',
    //           change: '+1.25%',
    //           color: '#3320A7',
    //           logo: DiageoLogo,
    //         },
    //         {
    //           name: 'StaticKit',
    //           price: '250.65',
    //           change: '-3.38%',
    //           color: '#2A3034',
    //           logo: StaticKitLogo,
    //         },
    //         {
    //           name: 'Statamic',
    //           price: '5,040.85',
    //           change: '-3.11%',
    //           color: '#0EA5E9',
    //           logo: StatamicLogo,
    //         },
    //         {
    //           name: 'Mirage',
    //           price: '140.44',
    //           change: '+9.09%',
    //           color: '#16A34A',
    //           logo: MirageLogo,
    //         },
    //         {
    //           name: 'Reversable',
    //           price: '550.60',
    //           change: '-1.25%',
    //           color: '#8D8D8D',
    //           logo: ReversableLogo,
    //         },
    //       ].map((stock) => (
    //         <div key={stock.name} className="flex items-center gap-4 px-4 py-3">
    //           <div
    //             className="flex-none rounded-full"
    //             style={{ backgroundColor: stock.color }}
    //           >
    //             <stock.logo className="h-10 w-10" />
    //           </div>
    //           <div className="flex-auto text-sm text-gray-900">
    //             {stock.name}
    //           </div>
    //           <div className="flex-none text-right">
    //             <div className="text-sm font-medium text-gray-900">
    //               {stock.price}
    //             </div>
    //             <div
    //               className={clsx(
    //                 'text-xs leading-5',
    //                 stock.change.startsWith('+')
    //                   ? 'text-cyan-500'
    //                   : 'text-gray-500',
    //               )}
    //             >
    //               {stock.change}
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </MotionAppScreenBody>
    // </AppScreen>
    <div className="w-full flex z-20 justify-center">
      <img
        src="/Hero-Offer.png" // <-- Replace with actual path or imported image
        alt="Prepped Screen Preview"
        className="w-[300px] md:w-[300px] shadow-xl rounded-2xl"
      />
    </div>
  );
}

function InvestScreen(props: ScreenProps) {
  return (
    // <AppScreen className="w-full">
    //   <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
    //     <AppScreen.Title>Buy $LA</AppScreen.Title>
    //     <AppScreen.Subtitle>
    //       <span className="text-white">$34.28</span> per share
    //     </AppScreen.Subtitle>
    //   </MotionAppScreenHeader>
    //   <MotionAppScreenBody
    //     {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
    //   >
    //     <div className="px-4 py-6">
    //       <div className="space-y-4">
    //         {[
    //           { label: 'Number of shares', value: '100' },
    //           {
    //             label: 'Current market price',
    //             value: (
    //               <div className="flex">
    //                 $34.28
    //                 <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
    //                   <path
    //                     d="M17 15V7H9M17 7 7 17"
    //                     stroke="#06B6D4"
    //                     strokeWidth="2"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                   />
    //                 </svg>
    //               </div>
    //             ),
    //           },
    //           { label: 'Estimated cost', value: '$3,428.00' },
    //         ].map((item) => (
    //           <div
    //             key={item.label}
    //             className="flex justify-between border-b border-gray-100 pb-4"
    //           >
    //             <div className="text-sm text-gray-500">{item.label}</div>
    //             <div className="text-sm font-semibold text-gray-900">
    //               {item.value}
    //             </div>
    //           </div>
    //         ))}
    //         <div className="rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white">
    //           Buy shares
    //         </div>
    //       </div>
    //     </div>
    //   </MotionAppScreenBody>
    // </AppScreen>
    <div className="w-full flex z-20 justify-center">
      <img
        src="/Hero-Happy.png" // <-- Replace with actual path or imported image
        alt="Prepped Screen Preview"
        className="w-[300px] md:w-[300px] shadow-xl rounded-2xl"
      />
    </div>
  );
}

function usePrevious<T>(value: T) {
  let ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0);
  let [selectedIndex, setSelectedIndex] = useState(0);
  let prevIndex = usePrevious(selectedIndex);
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex);
      setChangeCount((changeCount) => changeCount + 1);
    },
    100,
    { leading: true },
  );

  return (
    <div className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24">
      <Tab.Group selectedIndex={selectedIndex} onChange={onChange} vertical>
        <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
          {features.map((feature, featureIndex) => (
            <div
              key={feature.name}
              className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
            >
              {featureIndex === selectedIndex && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-gray-800"
                  initial={{ borderRadius: 16 }}
                />
              )}
              <div className="relative z-10 p-8">
                <feature.icon className="h-8 w-8 text-white" />
                <h3 className="mt-6 text-lg font-semibold text-white">
                  <Tab className="text-left ui-not-focus-visible:outline-none">
                    <span className="absolute inset-0 rounded-2xl" />
                    {feature.name}
                  </Tab>
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </Tab.List>
        <div className="relative col-span-6">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <CircleBackground color="#22c55e" className="animate-spin-slower" />
          </div>

          {/* ⚠️ Fix container height to prevent layout shift */}
          <div className="relative h-[600px]">
            {' '}
            {/* Set appropriate height */}
            <Tab.Panels as={Fragment}>
              <AnimatePresence
                initial={false}
                custom={{ isForwards, changeCount }}
              >
                {features.map((feature, featureIndex) =>
                  selectedIndex === featureIndex ? (
                    <Tab.Panel
                      static
                      key={feature.name + changeCount}
                      className="absolute inset-0 flex focus:outline-offset-[32px] ui-not-focus-visible:outline-none"
                    >
                      <feature.screen
                        animated
                        custom={{ isForwards, changeCount }}
                      />
                    </Tab.Panel>
                  ) : null,
                )}
              </AnimatePresence>
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0);
  let slideContainerRef = useRef<React.ElementRef<'div'>>(null);
  let slideRefs = useRef<Array<React.ElementRef<'div'>>>([]);

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target));
            break;
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    );

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [slideContainerRef, slideRefs]);

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => ref && (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#22c55e"
                  className={clsx(
                    'animate-spin-slower', // <-- Add this
                    featureIndex % 2 === 1 ? 'rotate-180' : '',
                  )}
                />
              </div>
              <div className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gray-200/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8 text-white" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500',
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              });
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  );
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="scroll-mt-16 bg-black py-5 sm:py-12"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <BadgeButton />
          <h2 className="text-3xl font-medium tracking-tight text-white">
            From our farms to your kitchen — only at{' '}
            <span className="text-red-700">Kaaikani.</span>
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Kaaikani is built for families and food lovers who value freshness,
            convenience, and quality. From farm-picked fruits to ready-to-cook
            vegetables, we make grocery shopping effortless. If others won't
            deliver freshness the way you deserve — Kaaikani will.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  );
}
