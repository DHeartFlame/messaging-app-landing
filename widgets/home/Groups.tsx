"use client";
import { MoveDownLeft, Video } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const Groups = () => {
  return (
    <section className="h-screen snap-start p-8 lg:p-28 relative overflow-hidden block md:flex gap-32">
      <div className="relative flex flex-col justify-center">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 600 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-h-[40vh]"
        >
          <motion.img
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl h-full w-full object-cover object-center"
            src="/group-pic.jpg"
            alt="group photo"
            width={500}
            height={600}
          />
        </motion.div>
        <motion.div
          className="flex gap-4 mt-6 mx-0 md:mx-6 items-center justify-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="flex shrink-0">
            <Image
              src="/profile-1.jpg"
              width={80}
              height={80}
              className="rounded-full border-2 border-white object-cover w-12 h-12 z-[4]"
              alt="profile pic"
            />
            <Image
              src="/profile-2.webp"
              width={80}
              height={80}
              className="rounded-full border-2 border-white object-cover w-12 h-12 -ml-3 z-[3]"
              alt="profile pic"
            />
            <Image
              src="/profile-1.jpg"
              width={80}
              height={80}
              className="rounded-full border-2 border-white object-cover w-12 h-12 -ml-3 z-[2]"
              alt="profile pic"
            />
            <Image
              src="/profile-2.webp"
              width={80}
              height={80}
              className="rounded-full border-2 border-white object-cover w-12 h-12 -ml-3 z-1"
              alt="profile pic"
            />
          </div>
          <p className="max-w-50 text-sm md:text-base">
            Used by over <strong>2 billion</strong> people across the globe
          </p>
        </motion.div>
        <motion.div
          className="absolute top-6 -right-6 md:-right-1/6 bg-white rounded-lg p-3 flex items-center gap-3 shadow-md"
          initial={{ scale: 1.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <Image
            src="/profile-1.jpg"
            width={40}
            height={40}
            className="rounded-full border-2 border-white object-cover w-10 h-10 z-[4]"
            alt="profile pic"
          />
          <div className="text-sm">
            <strong>Arlene Larson & 3 others</strong>
            <div className="flex items-center gap-1 text-xs text-gray">
              <MoveDownLeft className="w-3 h-3 text-black" />
              Today, 16:23
            </div>
          </div>
          <Video fill="black" className="w-5 h-5" />
        </motion.div>
      </div>
      <div className="flex-1 py-10 md:py-20">
        <div
          className="bg-beige z-10 relative h-[24px]"
          style={{ clipPath: "padding-box" }}
        >
          <motion.p
            className="font-medium"
            initial={{ y: -24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Build Community
          </motion.p>
        </div>
        <div
          className="bg-beige z-10 relative h-[90px] md:h-[160px]"
          style={{ clipPath: "padding-box" }}
        >
          <motion.h2
            className="font-libre-baskerville text-3xl md:text-5xl md:leading-16 mt-4 absolute top-0 left-0"
            initial={{ y: '-100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            Your groups on <br className="hidden md:block" /> Whatsapp
          </motion.h2>
        </div>

        <motion.p
          className="mt-4 max-w-[480px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
        >
          Gather the people who mean the most to you, be it your family in
          Brazil or your local soccer buddies, by establishing a group chat that
          encompasses them all.
        </motion.p>
        <div
          className="flex gap-4 mt-8 bg-beige z-10 relative h-[40px]"
          style={{ clipPath: "padding-box" }}
        >
          <motion.button
            initial={{ y: -40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="button big tertiary"
          >
            Download App
          </motion.button>
          <motion.button
            initial={{ y: -40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="button big light"
          >
            Whatsapp Web
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Groups;
