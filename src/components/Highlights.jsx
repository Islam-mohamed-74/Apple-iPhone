import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utlis";
import VideoCarousel from "./VideoCarousel";

export default function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      delay: 1.5,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      duration: 1.5,
      stagger: 0.5,
      y: 0,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
}
