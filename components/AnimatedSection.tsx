'use client';

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

type AnimatedSectionProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
};

const buildVariants = (
  direction: Direction,
  distance: number,
  duration: number,
  delay: number,
): Variants => {
  const offset = { x: 0, y: 0 };
  if (direction === 'up') offset.y = distance;
  if (direction === 'down') offset.y = -distance;
  if (direction === 'left') offset.x = distance;
  if (direction === 'right') offset.x = -distance;

  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

export default function AnimatedSection({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 32,
  once = true,
  amount = 0.2,
  ...rest
}: AnimatedSectionProps) {
  const variants = buildVariants(direction, distance, duration, delay);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: ReactNode;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
};

export function StaggerContainer({
  children,
  delay = 0,
  stagger = 0.12,
  once = true,
  amount = 0.2,
  ...rest
}: StaggerProps) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={container}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type ItemProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  duration?: number;
};

export function StaggerItem({
  children,
  direction = 'up',
  distance = 24,
  duration = 0.5,
  ...rest
}: ItemProps) {
  const offset = { x: 0, y: 0 };
  if (direction === 'up') offset.y = distance;
  if (direction === 'down') offset.y = -distance;
  if (direction === 'left') offset.x = distance;
  if (direction === 'right') offset.x = -distance;

  const item: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div variants={item} {...rest}>
      {children}
    </motion.div>
  );
}
