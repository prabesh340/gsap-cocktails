import React, { useEffect } from "react";
import gsap from "gsap";
import Lenis from 'lenis'
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  useEffect(() => {
    // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
  })
  return (
    <main>
      <Navbar />
      <Hero/>
      <Cocktails/>
    </main>
  );
};

export default App;
