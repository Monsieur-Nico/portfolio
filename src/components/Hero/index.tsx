'use client';

import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-16 md:py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Crafting Digital
          <span className="text-accent dark:text-accent-dark">
            {' '}
            Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text/80 dark:text-text-dark/80 max-w-2xl mx-auto mb-12"
        >
          Modern web solutions that combine stunning design with powerful
          performance. Let&apos;s build something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-accent dark:bg-accent-dark text-background dark:text-background-dark hover:bg-accent/90 dark:hover:bg-accent-dark/90"
          >
            Start a Project
          </Button>
          <Button
            size="lg"
            variant="bordered"
            className="border-border dark:border-border-dark hover:bg-surface dark:hover:bg-surface-dark"
          >
            View Our Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
