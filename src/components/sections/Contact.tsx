import React, { useState } from "react";
import PageTitle from "../ui/PageTitle";
import { AnimatePresence } from "framer-motion";

import ContactForm from "../sub/ContactForm";
import Card, { CardHeader } from "../ui/Card";
import CMDForm from "../sub/CMDForm";

import contactInfo from "../../constants/contactInfo";
import { cmdIcon, thisPcIcon } from "../../assets";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(true);

  return (
    <div className="hero-grad">
      <section
        id="Contact"
        className="responsive-container overflow-x-hidden h-full flex flex-col justify-center py-10 pb-16"
      >
        <PageTitle>
          Let's Talk | Open to ideas, collaboration, and new opportunities.
        </PageTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full">
          {/* Left - contact detials */}
          <Card
            animateDirFrom="left"
            animateOnce
            className="p-5 sm:pt-6 sm:px-6 pb-3 space-y-2"
          >
            <CardHeader
              title="Contact info"
              discription="Feel free to reach me, to build something assume."
              fontSize="lg"
            />
            <hr className="text-stone-500" />
            <div className="mt-6 mb-4 space-y-5 px-2.5">
              {contactInfo.map((info, i) => (
                <ContactInfoTag
                  key={i}
                  icon={info.icon}
                  value={info.value}
                  valKey={info.key}
                  onClick={info.fn}
                />
              ))}
            </div>
          </Card>

          {/* Right - contact form */}
          <ContactForm
            animateDirFrom="right"
            animateOnce
            className="sm:pt-3.5 pb-0 flex  min-h-96"
          >
            <div className="flex flex-col gap-1 w-fit font-primary px-3.5 pt-3.5 sm:pt-0">
              {/* this pc */}
              <div className="flex flex-col items-center">
                <img src={thisPcIcon} className="size-10" alt="thispc" />
                <span className="text-[8px] font-bold">This PC</span>
              </div>
              {/* cmd */}
              <div
                onClick={() => setIsFormOpen(true)}
                className="flex flex-col items-center"
              >
                <img src={cmdIcon} className="size-10" alt="thispc" />
                <span className="text-[8px] font-bold text-center tracking-wider leading-[7px]">
                  Contact <br /> panner
                </span>
              </div>
            </div>
            <AnimatePresence>
              {isFormOpen && <CMDForm closeForm={() => setIsFormOpen(false)} />}
            </AnimatePresence>
          </ContactForm>
        </div>
      </section>
    </div>
  );
};

export default Contact;

const ContactInfoTag = ({
  icon: Icon,
  valKey,
  value,
  onClick,
}: {
  icon: React.ElementType;
  valKey: string;
  value: string;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="flex items-center gap-3 sm:gap-5 font-primary"
  >
    <div className="bg-primary/80 p-2 sm:p-2.5 rounded-md shadow-md">
      <Icon size={24} className="text-gray-700" />
    </div>
    <div>
      <span className="block text-base sm:text-lg font-semibold leading-4 sm:leading-6">
        {valKey}:
      </span>
      <span className="text-xs sm:text-sm font-medium text-stone-400 tracking-tight">
        {value}
      </span>
    </div>
  </div>
);
