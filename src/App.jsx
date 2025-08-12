import React, { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  useEffect(() => {
const lenis = new Lenis({
 smoothWheel: true, 
  syncTouch: true 
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
  });
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      
    </main>
  );
};

export default App;
