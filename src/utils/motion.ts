export const slideInFromLeft = (delay?: number) => {
  return {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
      },
    },
  };
};

export const slideInFromRight = (delay?: number) => {
  return {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
      },
    },
  };
};

export const rotateAndScaleUp = (delay: number) => {
  return {
    hidden: { scale: 0.2, opacity: 0, rotate: 25 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};

