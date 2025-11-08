import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utlis";

export default function Hero() {
  const isMobile = window.innerWidth < 768;

  const [videoSrc, setVideoSrc] = useState(
    isMobile ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth > 768) {
      setVideoSrc(heroVideo);
    } else {
      setVideoSrc(smallHeroVideo);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // دالة تحديث الـ State عند عبور الـ Breakpoint
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
      }
    };

    handleVideoSrcSet();

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      y: -50,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
}
