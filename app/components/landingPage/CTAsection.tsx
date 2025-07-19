'use client';

import { motion } from 'framer-motion';
import { ContainerTextFlip } from './container-text-flip';
import { Button } from '../ui/button';
import { useCallback, useState } from 'react';

export default function CTAsection() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '1800 309 4983';

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide "Copied!" after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }, [phoneNumber]);
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20 md:py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="container px-4 md:px-6 relative flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6 text-center w-full"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to Transform Your Online Business?
          </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
            Everything you need to build, launch, and grow your brand online.
          </p>
          <ContainerTextFlip
            words={['E-commerce Website', 'E-commerce App', 'Billing-Software']}
          />
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
              onClick={handleCopy}
            >
              {copied ? 'Copied!' : `Contact Us : ${phoneNumber}`}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
