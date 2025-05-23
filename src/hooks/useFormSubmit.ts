import { useState } from "react";

const useFormSubmit = () => {
  const FORM_ACCESS_KEY = "141a6651-4c42-4737-8926-a10c0f59e7da";
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (name: string, email: string, message: string) => {
    setLoading(true);
    setResult("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", FORM_ACCESS_KEY);

    console.log(import.meta.env.FORM_ACCESS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    console.log("Response", data);

    if (data.success) {
      setResult("Form Submitted Successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setLoading(false);
  };

  return { result, loading, handleSubmit };
};

export default useFormSubmit;
