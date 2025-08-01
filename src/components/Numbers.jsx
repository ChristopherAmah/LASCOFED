import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const features = [
  {
    icon: 24,
    description: "Unions across sectors & LGAs within Lagos.",
    suffix: "",
  },
  {
    icon: 1000,
    description: "Registered cooperative societies & multipurpose groups.",
    suffix: "+",
  },
  {
    icon: 2000000,
    description: "Cooperative Members, various occupations statewide.",
    suffix: "",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Helper to format numbers with commas
const formatNumber = (value) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const CountUp = ({ to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        value: to,
        transition: { duration },
      });
    }
  }, [controls, to, duration, inView]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      initial={{ value: 0 }}
      onUpdate={(latest) => {
        setCount(Math.floor(latest.value));
      }}
      className="text-white text-4xl md:text-5xl font-extrabold mb-2"
    >
      {formatNumber(count)}
      {suffix}
    </motion.span>
  );
};

const Numbers = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-[#101010] py-12 px-6 rounded-xl w-full md:w-10/12 lg:w-11/12 mx-auto">
        {/* heading */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide uppercase"
          >
            Our Numbers
          </motion.p>
        </div>

        {/* feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <CountUp to={feature.icon} suffix={feature.suffix} />
              <p className="text-white text-sm sm:text-base md:text-lg max-w-xs ">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
  