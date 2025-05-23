import clsx from "clsx";
import React from "react";

interface ToolsItemsProps {
  items: {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }[];
  animateDir: "right" | "left";
  animateSpeed?: number;
  className?: string;
}

const ToolsItems: React.FC<ToolsItemsProps> = ({
  items,
  className,
  animateDir,
  animateSpeed,
}) => {
  return (
    <div className={clsx("flex w-fit", className)}>
      <div
        className="flex flex-none gap-3.5 animate-scroll"
        style={{
          animationDirection: animateDir === "right" ? "normal" : "reverse",
          animationDuration: `${animateSpeed || 1}s`,
        }}
      >
        {[...new Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map(({ name, icon: Icon }) => (
              <div key={name} className="flex w-fit">
                <div className="flex items-center rounded-2xl justify-center gap-2 px-3 py-1.5 border border-gray-400 hover:border-primary hover:shadow-[0px_0px_12px] hover:shadow-primary/30">
                  <Icon className="text-primary size-6 sm:size-8" />
                  <p className="text-xs sm:text-sm text-neutral-50 font-primary font-light">
                    {name}
                  </p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolsItems;
