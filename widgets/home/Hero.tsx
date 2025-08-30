"use client";

import Image from "next/image";
import Header from "../shared/header";
import { Download, Globe, Lock, LockKeyhole, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="flex flex-col h-screen bg-primary text-secondary p-4 snap-start relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <Header />

        <h1 className="font-libre-baskerville text-6xl mt-16 max-w-[650px] mx-auto text-center leading-16">
          Inmerse yourself in the moment.
        </h1>
        <p className="font-light text-center max-w-[500px] mx-auto mt-6">
          Stay connected to those who matter most with consistent messaging &
          calling options available on iOS and Android devices
        </p>
        <Link href="#" className="button tertiary mx-auto mt-8">
          Download App <Download className="w-4 h-4" />
        </Link>

        <motion.div
          className="absolute w-[660px] h-[660px] right-1/2 bottom-[-330px] translate-x-1/2 border border-primaryLight/50 rounded-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        />
        <motion.div
          className="absolute w-[580px] h-[580px] right-1/2 bottom-[-290px] translate-x-1/2 border border-primaryLight/80 rounded-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] right-1/2 bottom-[-250px] translate-x-1/2 bg-primaryLight rounded-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute border-6 border-black bg-secondary rounded-t-4xl h-[400px] w-[300px] bottom-[-8px] right-1/2 translate-x-1/2"
          initial={{ y: 380 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 0.3 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="absolute bottom-4 right-[30%] translate-x-[270px] w-[160px] h-[160px] bg-beige rounded-lg shadow text-black p-4 flex flex-col justify-between"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.7 }}
        >
          <Globe className="w-10 h-10" />
          <p className="text-3xl font-semibold font-libre-baskerville mt-3">
            2B+
          </p>
          <small>Users across the globe</small>
        </motion.div>

        <motion.div
          className="absolute bottom-[230px] right-1/3 translate-x-[270px] w-[280px] gap-4 bg-secondary rounded-lg shadow text-black p-4 flex flex-col justify-between"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 1.1 }}
        >
          <LockKeyhole className="w-8 h-8 border-b-5 border-successLight" />
          <p>
            With <span className="bg-beige">end to end encryption</span>, your
            personal messages and calls are secured.
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-1/2 translate-x-[270px] button tertiary"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 2 }}
          viewport={{ once: true }}
        >
          <Send className="w-4 h-4" /> Send
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
