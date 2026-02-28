import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import redAmongUs from "../../pictures/red.png";
import greenAmongUs from "../../pictures/green.png";
import blueAmongUs from "../../pictures/blue.png";
import blueDeadAmongUs from "../../pictures/blue-dead.png"
import orangeAmongUs from "../../pictures/orange.png";
import orangeDeadAmongUs from "../../pictures/orange-dead.png";
import cyanAmongUs from "../../pictures/cyan.png";

export default function FloatingAmongUs() {
  const [amogusPos, setAmogusPos] = useState({ x: [0], y: [0], rotate: [0] });
  const [amogusPos2, setAmogusPos2] = useState({ x: [0], y: [0], rotate: [0] });
  const [amogusPos3, setAmogusPos3] = useState({ x: [0], y: [0], rotate: [0] });
  const [amogusPos4, setAmogusPos4] = useState({ x: [0], y: [0], rotate: [0] });
  const [amogusPos5, setAmogusPos5] = useState({ x: [0], y: [0], rotate: [0] });
  const [orangeDead, setOrangeDead] = useState(false);
  const [blueDead, setBlueDead] = useState(false);

  useEffect(() => {
    const generatePath = () => {
      const points = 12;
      const w = window.innerWidth - 50;
      const h = window.innerHeight - 50;
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
    setAmogusPos4(generatePath());
    setAmogusPos5(generatePath());
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
        className="absolute"
        style={{ top: 0, left: 0, zIndex: 2, pointerEvents: "auto", cursor: "pointer" }}
        onClick={() => setBlueDead(true)}
        >
        <img src={blueDead ? blueDeadAmongUs : blueAmongUs} alt="" style={{ width: blueDead ? "60px" : "70px", height: "auto", opacity: 0.85 }} />
      </motion.div>

      {/* Orange - clickable */}
      <motion.div
        animate={{ x: amogusPos4.x, y: amogusPos4.y, rotate: amogusPos4.rotate }}
        transition={{ duration: 220, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{ top: 0, left: 0, zIndex: 2, pointerEvents: "auto", cursor: "pointer" }}
        onClick={() => setOrangeDead(true)}
      >
        <img src={orangeDead ? orangeDeadAmongUs : orangeAmongUs} alt="" style={{ width: orangeDead ? "60px" : "80px", height: "auto", opacity: 0.85 }} />
      </motion.div>

      <motion.div
        animate={{ x: amogusPos5.x, y: amogusPos5.y, rotate: amogusPos5.rotate }}
        transition={{ duration: 190, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none"
        style={{ top: 0, left: 0, zIndex: 1 }}
      >
        <img src={cyanAmongUs} alt="" style={{ width: "85px", height: "auto", opacity: 0.85 }} />
      </motion.div>
    </div>
  );
}