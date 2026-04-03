import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export let smoother: any = null;

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;

      const handleClick = (e: Event) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();

          const target = e.currentTarget as HTMLAnchorElement;
          const section = target.getAttribute("data-href");

          if (section) {
            gsap.to(window, {
              scrollTo: section,
              duration: 1,
              ease: "power2.out",
            });
          }
        }
      };

      element.addEventListener("click", handleClick);

      return () => {
        element.removeEventListener("click", handleClick);
      };
    });
  }, []);

  return (
    <>
      <div className="header">  
        </div>
       
    
    </>
  );
};

export default Navbar;