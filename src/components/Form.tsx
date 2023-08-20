import emailjs from "@emailjs/browser";
import { logger } from "@utils/logger";

const Form = () => {
  const { PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, PUBLIC_KEY } = import.meta.env;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        (result) => {
          logger.log("SUCCESS!", result.text);
        },
        (error) => {
          logger.error("FAILED...", error.text);
        }
      );
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
      <input type="text" id="email" name="email" required className="input" />
      <label htmlFor="message" className="h5">
        Message
      </label>
      <textarea id="message" name="message" className="input"></textarea>
      <button className="button primary w-fit">Send message</button>
    </form>
  );
};

export default Form;
