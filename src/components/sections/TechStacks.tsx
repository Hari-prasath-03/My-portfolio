import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import PageTitle from "../ui/PageTitle";
import { content, iconMap, tabs } from "../../constants/techStacksTabs";

const TechStacks = () => {
  const [activeTab, setActiveTab] = useState(tabs[1]);

  return (
    <div className="flex flex-col items-center gap-4 my-10 min-h-96">
      <PageTitle>
        What I Work With | A Growing Stack of Frameworks and Languages Driving
        My Journey.
      </PageTitle>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 rounded-md bg-primary/10 p-1.5 font-primary mx-5"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "relative rounded px-4 py-1.5 text-sm font-medium transition",
              activeTab === tab ? "bg-slate-600" : "hover:bg-slate-700"
            )}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute inset-0 rounded bg-slate-600 -z-10"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </motion.div>

      <motion.div
        layout
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
        className="flex flex-wrap max-w-3xl gap-3 rounded-md bg-primary/10 p-3 mx-5 font-primary"
      >
        <AnimatePresence>
          {content[activeTab].map((item) => (
            <motion.div
              layout
              key={item}
              initial={{ scale: 0.3 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.3 }}
              className="rounded bg-bg/95 hover:bg-primary/15 p-2 text-sm flex items-center gap-1.5 transition-colors duration-400"
            >
              <img src={iconMap[item]} className="size-5" />
              <span>{item}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TechStacks;
