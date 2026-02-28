import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import redAmongUs from "../../pictures/red.png";
import greenAmongUs from "../../pictures/green.png";
import blueAmongUs from "../../pictures/blue.png";

export default function FloatingAmongUs() {
  const [amogusPos, setAmogusPos] = useState({ x: [0], y: [0], rotate: [0] });
  const [amogusPos2, setAmogusPos2] = useState({ x: [0], y: [0], rotate: [0] });
  const [amogusPos3, setAmogusPos3] = useState({ x: [0], y: [0], rotate: [0] });

  useEffect(() => {
    const generatePath = () => {
      const points = 12;
      const w = window.innerWidth - 70;
      const h = window.innerHeight - 70;
      const x = Array.from({ length: points }, () => Math.random() * w);
      const y = Array.from({ length: points }, () => Math.random() * h);
      const rotate = Array.from({ length: points }, () => Math.random() * 360 - 180);
      x.push(x[0]);
      y.push(y[0]);
      rotate.push(rotate[0]);
      return { x, y, rotate };
    };

    setAmogusPos(generatePath());
    setAmogusPos2(generatePath());
    setAmogusPos3(generatePath());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: amogusPos.x, y: amogusPos.y, rotate: amogusPos.rotate }}
        transition={{ duration: 200, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none"
        style={{ top: 0, left: 0, zIndex: 1 }}
      >
        <img src={redAmongUs} alt="" style={{ width: "70px", height: "auto", opacity: 0.85 }} />
      </motion.div>

      <motion.div
        animate={{ x: amogusPos2.x, y: amogusPos2.y, rotate: amogusPos2.rotate }}
        transition={{ duration: 160, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none"
        style={{ top: 0, left: 0, zIndex: 1 }}
      >
        <img src={greenAmongUs} alt="" style={{ width: "85px", height: "auto", opacity: 0.85 }} />
      </motion.div>

      <motion.div
        animate={{ x: amogusPos3.x, y: amogusPos3.y, rotate: amogusPos3.rotate }}
        transition={{ duration: 180, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none"
        style={{ top: 0, left: 0, zIndex: 1 }}
      >
        <img src={blueAmongUs} alt="" style={{ width: "70px", height: "auto", opacity: 0.85 }} />
      </motion.div>
    </div>
  );
}