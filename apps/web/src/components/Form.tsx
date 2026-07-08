import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { logger } from "@utils/logger";

type FormState = "idle" | "sending" | "sent" | "error";

const Form = () => {
  const { PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, PUBLIC_KEY } = import.meta.env;
  const [state, setState] = useState<FormState>("idle");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");

    emailjs
      .sendForm(PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setState("sent");
        form.reset();
      })
      .catch((error) => {
        logger.error("ERROR!", error?.text);
        setState("error");
      });
  };

  return (
    <form className="flex flex-col flex-1" method="POST" onSubmit={sendEmail}>
      <label htmlFor="username" className="h5">
        Name *
      </label>
      <input type="text" id="username" name="name" required className="input" />
      <label htmlFor="email" className="h5">
        Email *
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="input"
      />
      <label htmlFor="message" className="h5">
        Message
      </label>
      <textarea id="message" name="message" className="input"></textarea>
      <button
        className="button form-submit w-fit"
        disabled={state === "sending"}
      >
        {state === "sending" ? "Sending…" : "Send message"}
      </button>
      <p
        className="form-status"
        data-state={state}
        role="status"
        aria-live="polite"
      >
        {state === "sent" && "Thanks — I'll get back to you soon."}
        {state === "error" &&
          "Something went wrong. Email me instead at hello@ollymarsters.com."}
      </p>
    </form>
  );
};

export default Form;
