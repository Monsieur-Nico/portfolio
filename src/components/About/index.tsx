'use client';

import { Button } from '@nextui-org/react';
import { motion, useInView } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.17, 0.55, 0.55, 1],
            delay: 0.5,
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-text dark:text-text-dark">
              About{' '}
              <span className="text-accent dark:text-accent-dark">
                NicoScript
              </span>
            </h2>
            <div className="space-y-4 text-text/80 dark:text-text-dark/80">
              <p>
                We are a passionate team of developers and designers dedicated
                to creating exceptional web experiences. Our approach combines
                cutting-edge technology with thoughtful design to deliver
                solutions that make an impact.
              </p>
              <p>
                With expertise in modern frameworks and a deep understanding of
                user experience, we help businesses transform their digital
                presence and achieve their goals.
              </p>
            </div>
            <Button
              className="mt-8 border-border dark:border-border-dark text-text dark:text-text-dark hover:bg-surface dark:hover:bg-surface-dark"
              variant="bordered"
              endContent={<FileText size={20} />}
            >
              Download Resume
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-surface dark:bg-surface-dark rounded-lg border border-border dark:border-border-dark">
              <div className="font-heading text-4xl font-bold text-accent dark:text-accent-dark mb-2">
                5+
              </div>
              <div className="text-text/80 dark:text-text-dark/80">
                Years of Experience
              </div>
            </div>
            <div className="p-6 bg-surface dark:bg-surface-dark rounded-lg border border-border dark:border-border-dark">
              <div className="font-heading text-4xl font-bold text-accent dark:text-accent-dark mb-2">
                50+
              </div>
              <div className="text-text/80 dark:text-text-dark/80">
                Projects Completed
              </div>
            </div>
            <div className="p-6 bg-surface dark:bg-surface-dark rounded-lg border border-border dark:border-border-dark">
              <div className="font-heading text-4xl font-bold text-accent dark:text-accent-dark mb-2">
                30+
              </div>
              <div className="text-text/80 dark:text-text-dark/80">
                Happy Clients
              </div>
            </div>
            <div className="p-6 bg-surface dark:bg-surface-dark rounded-lg border border-border dark:border-border-dark">
              <div className="font-heading text-4xl font-bold text-accent dark:text-accent-dark mb-2">
                100%
              </div>
              <div className="text-text/80 dark:text-text-dark/80">
                Client Satisfaction
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
