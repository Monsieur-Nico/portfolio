'use client';

import { services } from '@/lib/data';
import { theme } from '@/lib/theme';
import { Card, CardBody } from '@nextui-org/react';
import { motion, useInView } from 'framer-motion';
import { getIconComponent } from '@/lib/iconMap';
import { useRef } from 'react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className={theme.components.section.default}>
      <div className={theme.components.section.wrapper}>
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
          <h2 className={theme.components.heading.h2 + ' mb-12 text-center'}>
            Our{' '}
            <span className="text-accent dark:text-accent-dark">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={
                  theme.components.card.base +
                  ' ' +
                  theme.components.card.interactive
                }
                shadow="none"
              >
                <CardBody className="p-6">
                  <div className="mb-4">{getIconComponent(service.icon, 40)}</div>
                  <h3
                    className={
                      theme.components.heading.h3 +
                      ' mb-3 text-text dark:text-text-dark'
                    }
                  >
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
