import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import project1 from "../assets/project.png";
import project2 from "../assets/project1.png";
import project3 from "../assets/project2.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Project",
    category: "Web App",
    tools: "Nextjs, TypeScript, NodeJS Framer-motion,",
    image: project1,
    link: "https://clearafm.com/en",
  },
  {
    title: "Project",
    category: "E-commerce",
    tools: "Nextjs, TypeScript,Framer-motion,TailwindCSS,",
    image: project2,
    link: "https://www.salaar.store/",
  },
  {
    title: "Project",
    category: "Crypto Signal Bot",
    tools: "Nextjs,TypeScript,NodeJS,Socket,Expressjs",
    image: project3,
    link: "https://trdzcom.vercel.app/",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const boxes = document.querySelectorAll(".work-box");
    const container = document.querySelector(".work-container");
    const flex = document.querySelector(".work-flex");

    if (!section || !boxes.length || !container || !flex) return;

    const calculateWidth = () => {
      const rectLeft = container.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth =
        boxes[0].parentElement?.getBoundingClientRect().width || 0;
      const padding =
        parseInt(window.getComputedStyle(boxes[0]).padding || "0") / 2;

      return rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    };

    const translateX = calculateWidth();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    timeline.to(flex, {
      x: -translateX,
      ease: "none",
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;