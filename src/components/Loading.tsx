import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

// ─────────────────────────────────────────────
// Loading Component — Bug-free version
// Fixes:
//  1. Removed duplicate useEffect (was running twice)
//  2. Removed unused `isLoaded` state
//  3. Added `setLoaded(true)` when percent >= 100
//  4. Fixed timing: initialFX at 800ms, setIsLoading at 1600ms
//  5. No more Welcome hang
// ─────────────────────────────────────────────

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();

  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Step 1: jab percent 100 ho jaye, loaded = true karo
  useEffect(() => {
    if (percent >= 100) {
      setLoaded(true);
    }
  }, [percent]);

  // Step 2: jab loaded ho jaye, animation chalaao aur loading band karo
  useEffect(() => {
    if (!loaded) return;

    let timeout1: ReturnType<typeof setTimeout> | null = null;
    let timeout2: ReturnType<typeof setTimeout> | null = null;

    import("./utils/initialFX").then((module) => {
      setClicked(true);

      // 800ms baad initialFX chalao
      timeout1 = setTimeout(() => {
        module.initialFX?.();
      }, 800);

      // 1600ms baad loading band karo — Welcome hang nahi hoga
      timeout2 = setTimeout(() => {
        setIsLoading(false);
      }, 1600);
    });

    return () => {
      if (timeout1) clearTimeout(timeout1);
      if (timeout2) clearTimeout(timeout2);
    };
  }, [loaded, setIsLoading]);

  // Mouse glow effect
  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>

      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee speed={60} gradient={false}>
            <span>Full Stack Developer</span>
            <span>DevOps Engineer</span>
            <span>React Developer</span>
            <span>Frontend Specialist</span>
          </Marquee>
        </div>

        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
        >
          <div className="loading-hover"></div>

          <div
            className={`loading-button ${loaded ? "loading-complete" : ""}`}
          >
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>

              <div className="loading-box"></div>
            </div>

            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;


// ─────────────────────────────────────────────
// Progress Handler — same as before, working fine
// ─────────────────────────────────────────────

export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;

  // Phase 1: 0 → ~50, fast random jumps
  let interval = setInterval(() => {
    if (percent <= 50) {
      percent += Math.round(Math.random() * 5);
      setLoading(percent);
    } else {
      clearInterval(interval);

      // Phase 2: 50 → 91, slow trickle
      interval = setInterval(() => {
        percent += Math.round(Math.random());
        setLoading(percent);

        if (percent > 91) {
          clearInterval(interval);
        }
      }, 200);
    }
  }, 100);

  // Force clear karo (emergency use)
  const clear = () => {
    clearInterval(interval);
    setLoading(100);
  };

  // Smoothly 100% tak le jao aur resolve karo
  const loaded = () =>
    new Promise<number>((resolve) => {
      clearInterval(interval);

      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          clearInterval(interval);
          resolve(percent);
        }
      }, 5);
    });

  return { loaded, percent, clear };
};