import { motion } from "framer-motion";
import { RefObject } from "react";

type circleProps = {
  pageRef: RefObject<HTMLDivElement>;
};

const Circle = (props: circleProps) => {
  return (
    <motion.a
      drag={true}
      dragConstraints={props.pageRef}
      dragElastic={false}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      className="h-2/3 w-2/3 bg-white rounded-xl cursor-pointer text-zinc-900 flex justify-center items-center text-2xl font-bold"
      href="https://github.com/joshborseth"
    >
      GitHub
    </motion.a>
  );
};

export default Circle;
