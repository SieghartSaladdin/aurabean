import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

// Configure GSAP defaults if needed (optional)
gsap.defaults({
  ease: "power2.out",
  duration: 1,
});

export { gsap, useGSAP, ScrollTrigger, ScrollToPlugin };
