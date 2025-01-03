import { motion } from "framer-motion";

export const BinaryTreeSvg = () => {
  return (
    <svg className="w-full h-full absolute inset-0" viewBox="0 0 1400 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="neon-glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="1"/>
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
        </linearGradient>

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
        </filter>
      </defs>

      {/* Binary Tree Visualization */}
      <g transform="translate(700,300)">
        {/* Tree Edges */}
        {[
          "M0,-100 L-200,0",
          "M0,-100 L200,0",
          "M-200,0 L-300,100",
          "M-200,0 L-100,100",
          "M200,0 L100,100",
          "M200,0 L300,100"
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="url(#neon-glow)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          />
        ))}

        {/* Tree Nodes */}
        {[
          [0, -100],
          [-200, 0], [200, 0],
          [-300, 100], [-100, 100], [100, 100], [300, 100]
        ].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="15"
            fill="rgba(96, 165, 250, 0.1)"
            stroke="#60a5fa"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          />
        ))}

        {/* Floating Algorithm Complexity */}
        {[
          { text: "O(1)", x: -250, y: -150 },
          { text: "O(n)", x: 250, y: -150 },
          { text: "O(log n)", x: -350, y: 50 },
          { text: "O(n log n)", x: 350, y: 50 }
        ].map((item, i) => (
          <motion.text
            key={i}
            x={item.x}
            y={item.y}
            fill="#60a5fa"
            fontSize="16"
            fontFamily="monospace"
            textAnchor="middle"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: i * 0.3 }}
          >
            {item.text}
          </motion.text>
        ))}
      </g>
    </svg>
  );
};

