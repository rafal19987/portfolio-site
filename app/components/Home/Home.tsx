'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Permanent_Marker } from 'next/font/google';
import avatarSmall from 'assets/avatarSmall.png';
import githubSmall from 'assets/githubSmall.svg';
import linkedInSmall from 'assets/linkedinSmall.svg';
import scrollDownIcon from 'assets/scrollDown.svg';
const permamentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
});

const Home = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="snap-center relative min-h-[calc(100vh-3.5rem)] w-screen mt-14 scroll-my-0"
    >
      <motion.div
        className="flex items-center justify-center w-full mt-14"
        initial={{ y: '30px', opacity: '0' }}
        animate={{ y: '0', opacity: '1' }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-center w-36 h-36 bg-gradient-to-b from-[#FFB800]/50 to-transparent rounded-full">
          <Image src={avatarSmall} alt="avatar" />
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center mt-7"
        initial={{ y: '30px', opacity: '0' }}
        animate={{ y: '0', opacity: '1' }}
        transition={{ delay: 0.2 }}
      >
        <h1 className={`${permamentMarker.className} text-4xl text-[#CCD6F6]`}>
          Rafael Izdebski
        </h1>
        <h2 className="mt-5 text-xl">I am a Frontend Developer</h2>
      </motion.div>
      <motion.div
        className="flex items-center justify-center mt-12"
        initial={{ y: '30px', opacity: '0' }}
        animate={{ y: '0', opacity: '1' }}
        transition={{ delay: 0.3 }}
      >
        <ul className="flex items-center justify-between w-2/5">
          <li>
            <Image src={githubSmall} alt="github icon" />
          </li>
          <li>
            <Image src={linkedInSmall} alt="linkedin icon" />
          </li>
        </ul>
      </motion.div>
      <div className="absolute bottom-8 flex items-center justify-center w-full h-20 mt-28 z-0">
        <button className="flex items-center justify-center w-[75px] h-[75px] rounded-full border-2 border-[#FFBE1A]">
          <Link href="#about" onClick={handleScroll}>
            <Image
              className="mt-2 animate-bounce"
              src={scrollDownIcon}
              alt="scroll down icon"
            />
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
