import { useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: "How fresh are the vegetables I receive?",
    answer:
      "We source directly from trusted farms and harvest fresh for each day’s orders. Your vegetables are packed overnight and delivered the Next Day to ensure optimal freshness and shelf life.",
  },
  {
    question: "Can I choose what vegetables go in my box?",
    answer:
      "Absolutely! You can fully customize your box—add your favorites, remove items you don’t want, and set preferences to match your taste and needs.",
  },
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Not at the moment. Orders placed today will be delivered the next day. This ensures we can source and pack the freshest produce just for you.",
  },
  {
    question: "What if an item is missing, damaged, or not up to quality?",
    answer:
      "We take quality seriously. If anything is missing or doesn’t meet your expectations, you can raise a request through the app for a refund or replacement—no hassle.",
  },
 
  {
    question: "How can I contact support if I have an issue?",
    answer:
      "Our support team is available 7 days a week through live chat or phone via the app. We’re here to help resolve any issue quickly and kindly.",
  },
  {
    question: "How are your prices compared to local markets?",
    answer:
      "We offer competitive prices that often beat traditional markets—without compromising freshness or quality. Plus, we offer bundles, loyalty rewards, and weekly offers to give you more value.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="pt-6">
                  <dt>
                    <button
                      onClick={() => handleToggle(index)}
                      className="group flex w-full items-start justify-between text-left text-gray-900"
                    >
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {isOpen ? (
                          <MinusIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <PlusIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </dt>
                  {isOpen && (
                    <dd className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
