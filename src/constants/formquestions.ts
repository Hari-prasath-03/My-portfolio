type Questions = {
  question: (name?: string) => string;
  label: string;
};

const questions: Questions[] = [
  {
    question() {
      return `Hello there! What's your name?`;
    },
    label: "Enter Name :",
  },
  {
    question(name?: string) {
      return `Awesome! ${name}, what's your email?`;
    },
    label: "Enter Email :",
  },
  {
    question(name?: string) {
      return `Perfect! ${name} and how can I help you?`;
    },
    label: "Enter Message :",
  },
  {
    question(name?: string) {
      return `Beautiful! ${name}, Here's what we've got:`;
    },
    label: "Looks good!",
  },
];

export default questions;
