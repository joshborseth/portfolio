import { motion } from "framer-motion";
import { RefObject } from "react";

type circleProps = {
  pageRef: RefObject<HTMLDivElement>;
};

const Circle = (props: circleProps) => {
  return (
    <motion.div
      drag={true}
      dragConstraints={props.pageRef}
      whileHover={{ scale: "1.5" }}
      dragElastic={false}
      className="h-20 w-20 bg-white rounded-full cursor-pointer"
    />
  );
};

export default Circle;
