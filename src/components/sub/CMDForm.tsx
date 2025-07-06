import { memo, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TerminalInput from "../ui/TerminalInput";
import questions from "../../constants/formquestions";

import useFormSubmit from "../../hooks/useFormSubmit";

import { LiaLinkSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";

type formEvent = React.ChangeEvent<HTMLInputElement>;
type keyboardEvent = React.KeyboardEvent<HTMLInputElement>;

type formData = {
  name: string;
  email: string;
  message: string;
};

const CMDForm = ({ closeForm }: { closeForm: () => void }) => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    message: "",
  });
  const [step, setStep] = useState(0);
  const { result, loading, handleSubmit: handleFormSubmit } = useFormSubmit();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleInputChange = (e: formEvent, field: keyof typeof formData) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleKeyDown = (e: keyboardEvent, field: keyof typeof formData) => {
    if (e.key === "Enter" && formData[field].trim() !== "") {
      if (step < 4) setStep((prev) => prev + 1);
    }
    if (e.key === "Backspace" && formData[field] === "") {
      if (step > 0) setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    await handleFormSubmit(formData.name, formData.email, formData.message);
    alert(result);
    setFormData({ name: "", email: "", message: "" });
    setStep(0);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setStep(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      ref={ref}
      className="absolute inset-2.5 *:font-primary bg-black/50 backdrop-blur-lg rounded-md overflow-hidden origin-top-left pt-8 overflow-y-auto"
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-black/70 h-8 flex items-center justify-between px-2.5">
        {/* cmd lights */}
        <div className="flex items-center gap-1.5">
          <h1 className="ml-5 text-sm">Contact@form{">"}</h1>
        </div>
        {/* x icon */}
        <div onClick={closeForm}>
          <IoCloseOutline className="text-neutral-50 size-5" />
        </div>
      </div>

      {/* Body */}
      <div className="px-2">
        <h2 className="border-b border-dashed pl-1 py-1 text-sm">
          Hey there! We're excited to link <LiaLinkSolid className="inline" />
        </h2>

        <div className="flex flex-col gap-2 mt-2">
          <RenderQuestion
            qFn={() => questions[0].question()}
            label={questions[0].label}
          >
            <TerminalInput
              value={formData.name}
              setValue={(e: formEvent) => handleInputChange(e, "name")}
              onKeyDown={(e: keyboardEvent) => handleKeyDown(e, "name")}
              focused={step === 0 && inView}
            />
          </RenderQuestion>
          {step >= 1 && (
            <RenderQuestion
              qFn={() => questions[1].question(formData.name)}
              label={questions[1].label}
            >
              <TerminalInput
                value={formData.email}
                setValue={(e: formEvent) => handleInputChange(e, "email")}
                onKeyDown={(e: keyboardEvent) => handleKeyDown(e, "email")}
                focused={step === 1 && inView}
              />
            </RenderQuestion>
          )}
          {step >= 2 && (
            <RenderQuestion
              qFn={() => questions[2].question(formData.name)}
              label={questions[2].label}
            >
              <TerminalInput
                value={formData.message}
                setValue={(e: formEvent) => handleInputChange(e, "message")}
                onKeyDown={(e: keyboardEvent) => handleKeyDown(e, "message")}
                focused={step === 2 && inView}
              />
            </RenderQuestion>
          )}
          {step >= 3 && (
            <RenderQuestion
              qFn={() => questions[3].question(formData.name)}
              label={questions[3].label}
              data={formData}
            >
              <div className="flex items-center gap-3 ml-3 text-blue-400 *:hover:underline">
                <button tabIndex={1} onClick={handleSubmit} disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
                <button tabIndex={1} onClick={handleReset}>
                  Reset
                </button>
              </div>
            </RenderQuestion>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CMDForm;

const RenderQuestion = memo(
  ({
    qFn,
    children,
    label,
    data,
  }: {
    qFn: () => string;
    children: React.ReactNode;
    label: string;
    data?: formData;
  }) => (
    <div className="flex flex-col sm:gap-1">
      <p className="text-neutral-200/85 text-sm sm:text-base">{qFn()}</p>
      {data && (
        <TableData name={data.name} email={data.email} message={data.message} />
      )}
      <div className="flex items-center gap-1">
        <span className="text-neutral-200"> ~ {label}</span>
        {children}
      </div>
    </div>
  )
);

const TableData: React.FC<formData> = memo(({ name, email, message }) => (
  <table className="text-sm text-primary/85 font-secondary font-thin tracking-wider w-1/2 ml-2">
    <tbody>
      <tr>
        <td className="text-neutral-300">Name:</td>
        <td>{name}</td>
      </tr>
      <tr>
        <td className="text-neutral-300">Email:</td>
        <td>{email}</td>
      </tr>
      <tr>
        <td className="text-neutral-300">Message:</td>
        <td>{message}</td>
      </tr>
    </tbody>
  </table>
));
