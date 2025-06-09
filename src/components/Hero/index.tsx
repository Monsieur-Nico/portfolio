'use client';

import { companyInfo } from '@/lib/data';
import { theme } from '@/lib/theme';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div
        className={
          theme.components.section.wrapper + ' py-16 md:py-32 text-center'
        }
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={theme.components.heading.h1 + ' mb-6'}
        >
          {companyInfo.heroHeading}
          <span className="text-accent dark:text-accent-dark">
            {' '}
            {companyInfo.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text/80 dark:text-text-dark/80 max-w-2xl mx-auto mb-12"
        >
          {companyInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className={theme.components.button.primary}
            as="a"
            href="#contact"
          >
            Start a Project
          </Button>
          <Button
            size="lg"
            variant="bordered"
            className={theme.components.button.secondary}
            as="a"
            href="#projects"
          >
            View Our Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
