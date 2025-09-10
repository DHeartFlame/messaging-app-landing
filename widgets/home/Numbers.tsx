"use client";
import { motion } from "motion/react";

const Numbers = () => {
  return (
    <section className="grid grid-rows-2 h-screen bg-tertiary pt-8 md:pt-24 snap-start relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-32 p-4 md:p-0">
          <motion.div
            initial={{ opacity: 0, y: "90%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="font-libre-baskerville text-4xl md:text-6xl max-w-[520px] md:leading-18">
              Most-used social messaging app
            </h2>
            <p className="max-w-[500px] mt-6 text-lg">
              Whatsapp is the most popular messaging apps on the planet. It's
              used by over 450 million people every day.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "90%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-lg font-medium ">Active daily users</p>
            <p className="font-libre-baskerville text-[80px] md:text-[160px]">450M+</p>
          </motion.div>
        </div>
      </div>

      <div className="w-full grid grid-cols-4 h-full">
        <motion.div
          className="w-full border border-black/20 grid"
          style={{
            gridTemplateRows: "1fr 35%",
          }}
          initial={{ y: "90%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <p className="m-4">2020</p>
          <div className="border-t-3 p-4 bg-black/5">
            <strong>110.5M</strong>
          </div>
        </motion.div>
        <motion.div
          className="w-full border-t border-r border-black/20 grid"
          style={{
            gridTemplateRows: "1fr 45%",
          }}
          initial={{ y: "90%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <p className="m-4">2021</p>
          <div className="border-t-3 p-4 bg-black/10">
            <strong>220M</strong>
          </div>
        </motion.div>
        <motion.div
          className="w-full border-t border-r border-black/20 grid"
          style={{
            gridTemplateRows: "1fr 60%",
          }}
          initial={{ y: "90%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          <p className="m-4">2022</p>
          <div className="border-t-3 p-4 bg-black/18">
            <strong>335.3M</strong>
          </div>
        </motion.div>
        <motion.div
          className="w-full border-t border-r border-black/20 grid"
          style={{
            gridTemplateRows: "1fr 75%",
          }}
          initial={{ y: "90%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <p className="m-4">2023</p>
          <div className="border-t-3 p-4 bg-black/25">
            <strong>450.6M</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Numbers;
