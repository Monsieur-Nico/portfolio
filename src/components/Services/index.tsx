'use client';

import { Card, CardBody } from '@nextui-org/react';
import { motion, useInView } from 'framer-motion';
import { Code2, Gauge, Palette } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: <Code2 size={40} className="text-accent dark:text-accent-dark" />,
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks and best practices for optimal performance and scalability.',
  },
  {
    icon: <Palette size={40} className="text-accent dark:text-accent-dark" />,
    title: 'UI/UX Design',
    description:
      'Intuitive and engaging user interfaces that provide seamless experiences across all devices and platforms.',
  },
  {
    icon: <Gauge size={40} className="text-accent dark:text-accent-dark" />,
    title: 'Performance Optimization',
    description:
      'Speed optimization, caching strategies, and performance tuning to ensure your website loads quickly and efficiently.',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20">
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
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Our{' '}
            <span className="text-accent dark:text-accent-dark">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-surface dark:bg-surface-dark border-border dark:border-border-dark hover:border-accent dark:hover:border-accent-dark transition-colors"
                shadow="none"
              >
                <CardBody className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="font-heading text-xl font-bold mb-3 text-text dark:text-text-dark">
                    {service.title}
                  </h3>
                  <p className="text-text/80 dark:text-text-dark/80">
                    {service.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
