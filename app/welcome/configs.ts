export const mobileConfig = {
  0: {
    // right 2 panel
    x: ["200%", "0%"],
    y: ["50%", "0%"],
    scale: [1.1, 1],
    rotate: ["20deg", "0deg"],
  },
  1: {
    // left 2 lastplay
    x: ["-90%", "0%"],
    y: ["60%", "0%"],
    scale: [1.1, 1],
    rotate: ["-20deg", "0deg"],
  },
  2: {
    // left 3 potentiia
    x: ["-220%", "0%"],
    y: ["100%", "0%"],
    scale: [1, 1],
    rotate: ["-45deg", "0deg"],
  },
  3: {
    // front
    x: ["120%", "0%"],
    y: ["-140%", "0%"],
    scale: [1.6, 1],
    rotate: ["0deg", "0deg"],
  },
  4: {
    // left 1 pros
    x: ["-170%", "0%"],
    y: ["-110%", "0%"],
    scale: [1.4, 1],
    rotate: ["-10deg", "0deg"],
  },
  5: {
    // right 1
    x: ["150%", "0%"],
    y: ["-230%", "0%"],
    scale: [0.8, 1],
    rotate: ["10deg", "0deg"],
  },
  6: {
    // right 2 denik
    x: ["90%", "0%"],
    y: ["-150%", "0%"],
    scale: [1, 1],
    rotate: ["25deg", "0deg"],
  },
  7: {
    //right 3 token
    x: ["-80%", "0%"],
    y: ["-235px", "0%"],
    scale: [1.4, 1],
    rotate: ["10deg", "0deg"],
  },
};

export type AnimationConfig = Record<number, ConfigObject>;
type ConfigObject = {
  x: string[];
  y: string[];
  scale: number[];
  rotate: string[];
};

export const desktopConfig = {
  0: {
    // right 2
    x: ["180%", "0%"],
    y: ["40%", "0%"],
    scale: [1.1, 1],
    rotate: ["20deg", "0deg"],
  },
  1: {
    // left 2
    x: ["-90%", "0%"],
    y: ["40%", "0%"],
    scale: [1.1, 1],
    rotate: ["-20deg", "0deg"],
  },
  2: {
    // left 3
    x: ["-220%", "0%"],
    y: ["75%", "0%"],
    scale: [1, 1],
    rotate: ["-25deg", "0deg"],
  },
  3: {
    // front
    x: ["100%", "0%"],
    y: ["-100%", "0%"],
    scale: [1.3, 1],
    rotate: ["0deg", "0deg"],
  },
  4: {
    // left 1
    x: ["-170%", "0%"],
    y: ["-90%", "0%"],
    scale: [1.2, 1],
    rotate: ["-10deg", "0deg"],
  },
  5: {
    // right 1
    x: ["150%", "0%"],
    y: ["-200%", "0%"],
    scale: [0.8, 1],
    rotate: ["10deg", "0deg"],
  },
  6: {
    // right 3
    x: ["90%", "0%"],
    y: ["-150%", "0%"],
    scale: [1, 1],
    rotate: ["25deg", "0deg"],
  },
  7: {
    //right 1
    x: ["-70%", "0%"],
    y: ["-200%", "0%"],
    scale: [1.2, 1],
    rotate: ["10deg", "0deg"],
  },
};
