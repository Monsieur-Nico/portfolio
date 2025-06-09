'use client';

import { projects } from '@/lib/data';
import { theme } from '@/lib/theme';
import { Card, CardBody, CardFooter, Chip, Link } from '@nextui-org/react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      className={
        theme.components.section.default + ' bg-surface dark:bg-surface-dark'
      }
    >
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
            Featured{' '}
            <span className="text-accent dark:text-accent-dark">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={
                  theme.components.card.base +
                  ' ' +
                  theme.components.card.interactive
                }
                shadow="none"
              >
                <div
                  className={`project-placeholder ${project.placeholderClass}`}
                />

                <CardBody className="p-6">
                  <h3
                    className={
                      theme.components.heading.h3 +
                      ' mb-2 text-text dark:text-text-dark'
                    }
                  >
                    {project.title}
                  </h3>
                  <p className="text-text/80 dark:text-text-dark/80 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        size="sm"
                        variant="flat"
                        className="bg-surface dark:bg-surface-dark text-text dark:text-text-dark"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </CardBody>

                <CardFooter className="p-6 pt-0 gap-4">
                  <Link
                    href={project.liveUrl}
                    isExternal
                    className="text-accent dark:text-accent-dark hover:text-accent/80 dark:hover:text-accent-dark/80 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    isExternal
                    className="text-accent dark:text-accent-dark hover:text-accent/80 dark:hover:text-accent-dark/80 transition-colors"
                  >
                    <Github size={20} />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
