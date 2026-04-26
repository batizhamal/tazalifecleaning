'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type HeroImageProps = {
  src: string;
  alt: string;
};

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative flex h-full items-end justify-center md:justify-end"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
        className="will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          width={520}
          height={520}
          priority
          className="h-auto w-[260px] object-contain sm:w-[320px] md:w-[400px] lg:w-[460px]"
        />
      </motion.div>
    </motion.div>
  );
}
