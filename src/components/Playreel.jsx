import { motion } from "framer-motion";
import { marker } from "framer-motion/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

function Playreel() {
  const parent = useRef(null);
  const videodiv = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.to(videodiv.current, {
      scrollTrigger: {
        trigger: parent.current,
        start: "0 0",
        end: "+=100%",
        pin: true,
        scrub: 1,
      },
      width: "100%",
      height: "100%",
      ease: "power4.out",
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div
      ref={parent}
      className="w-full h-[100vh]  overflow-hidden relative bg-black "
    >
      <div
        ref={videodiv}
        className="w-40 sm:w-96  overflow-hidden absolute aspect-video   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <video
          muted
          loop
          autoPlay
          className="w-full h-full scale-[2.5] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04"
        ></video>
      </div>
      <div className="overlay absolute w-full h-full  text-white flex flex-col justify-between py-20">
        <div className="w-full flex items-center justify-center gap-3 ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3>Work in motion</h3>
        </div>
        <h1 className="w-full justify-center flex sm:gap-160 gap-32 items-center ">
          <div className="text-5xl sm:text-[10vw]  sm:gap-80font-semibold">
            Play
          </div>
          <div className="text-5xl sm:text-[10vw] font-semibold">Reel</div>
        </h1>
        <p className="text-center px-10 text-sm">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones
        </p>
      </div>
    </div>
  );
}

export default Playreel;
