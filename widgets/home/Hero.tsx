"use client";

import Image from "next/image";
import Header from "../shared/header";
import {
  CheckCheck,
  Download,
  Globe,
  Lock,
  LockKeyhole,
  PlayCircle,
  Send,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { TriangleDown } from "@/components/svg";

const Hero = () => {
  return (
    <section className="flex flex-col h-screen bg-primary text-secondary p-4 snap-start relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <Header />
        <motion.div
          className="z-10	 relative"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
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
        </motion.div>

        {/* Circle border 1 */}
        <motion.div
          className="absolute w-[740px] h-[740px] right-1/2 bottom-[-370px] translate-x-1/2 border border-primaryLight/50 rounded-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
        />

        {/* Circle border 2 */}
        <motion.div
          className="absolute w-[660px] h-[660px] right-1/2 bottom-[-330px] translate-x-1/2 border-2 border-primaryLight/80 rounded-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* Circle */}
        <motion.div
          className="absolute w-[580px] h-[580px] right-1/2 bottom-[-290px] translate-x-1/2 bg-primaryLight rounded-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* Phone */}
        <motion.div
          className="absolute border-6 border-black flex flex-col justify-between bg-white rounded-t-4xl h-[400px] max-h-[30vh] md:max-h-[50vh] w-[300px] bottom-[-8px] right-1/2 translate-x-1/2"
          initial={{ y: '90%' }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-black w-20 h-4 rounded-md mx-auto my-1 shrink-0"></div>
          <Image src="/phone.png" className="w-full h-auto object-contain" width={300} height={400} alt="phone"  />
        </motion.div>

        {/* Globe square */}
        <motion.div
          className="hidden md:block absolute bottom-4 right-[30%] translate-x-[270px] w-[160px] h-[160px] bg-beige rounded-lg shadow text-black p-4 flex flex-col justify-between"
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

        {/* Security square */}
        <motion.div
          className="absolute bottom-[230px] right-1/3 translate-x-[270px] w-[280px] gap-4 bg-secondary rounded-lg font-medium leading-tight shadow text-black p-4 hidden md:flex flex-col justify-between"
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

        {/* Send button */}
        <motion.div
          className="absolute bottom-4 right-1/2 translate-x-[270px] button tertiary !hidden md:!flex"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 2 }}
          viewport={{ once: true }}
        >
          <Send className="w-4 h-4" /> Send
        </motion.div>

        {/* Video file */}
        <motion.div
          className="w-[260px] p-4 rounded-lg bg-beige hidden md:flex flex-col gap-3 text-black text-sm absolute bottom-8  right-1/2 translate-x-[-200px]"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 1.3 }}
          viewport={{ once: true }}
        >
          <PlayCircle className="w-5 h-5" />
          <strong>Video_file8459663.mp4</strong>
          <div>
            <div className="bg-lightGray rounded-md w-full h-1">
              <div className="bg-primary/70 rounded-md w-2/3 h-1"></div>
            </div>
            <div className="flex items-center justify-between text-gray mt-1">
              <small>2.1/7.32 MB</small>
              <small>0.58s</small>
            </div>
          </div>
        </motion.div>

        {/* Chat interface */}
        <motion.div
          className="w-[260px] hidden md:flex flex-col gap-2"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-secondary rounded-md py-1 px-3 relative">
            <TriangleDown
              color="#f4fde6"
              className="w-4 h-4 absolute left-[-8px] top-[-1px]"
            />
            <Image
              src="/audio.png"
              alt={"audio chat"}
              className="w-full"
              width={260}
              height={60}
            />
          </div>
          <div className="bg-primaryLight rounded-md py-1 px-1 relative w-fit">
            <TriangleDown
              color="#6d7656"
              className="w-4 h-4 absolute left-[-8px] top-[-1px]"
            />
            <Image
              src="/smiling person.jpg"
              className="w-[200px] h-[200px] rounded-md object-cover"
              width={200}
              height={200}
              alt="smiling person"
            />
          </div>
          <div className="bg-tertiaryDark rounded-md py-1 px-3 relative ml-auto text-primary font-medium flex items-center gap-2">
            <TriangleDown
              color="#fafd8f"
              className="w-4 h-4 absolute right-[-8px] top-[-1px]"
            />
            <small>Can't wait to meet you</small>
            <div className="mt-1 flex items-center gap-1">
              <small className="text-gray font-normal">10:23</small>{" "}
              <CheckCheck className="w-3 w-3" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
