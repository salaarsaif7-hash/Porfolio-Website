import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { smoother } from "../Navbar";

// registerPlugin sirf ek baar, import ke baad
gsap.registerPlugin(SplitText);

export function initialFX() {
  document.body.style.overflowY = "auto";

  if (smoother) {
    smoother.paused(false);
  }

  document.getElementsByTagName("main")[0].classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const TextProps = { type: "chars,lines", linesClass: "split-h2" };

  const landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  const landingText4 = new SplitText(".landing-h2-1", TextProps);
  const landingText5 = new SplitText(".landing-h2-2", TextProps);

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  gsap.set(Text1.chars, { opacity: 1, y: 0 });
  gsap.set(Text2.chars, { opacity: 0, y: 80 });

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

  tl.to(Text1.chars, {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.inOut",
    stagger: 0.05,
  })
    .fromTo(
      Text2.chars,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.05,
      },
      "-=0.5"
    )
    .to({}, { duration: 3 })
    .to(Text2.chars, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.05,
    })
    .fromTo(
      Text1.chars,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.05,
      },
      "-=0.5"
    )
    .to({}, { duration: 3 });
}