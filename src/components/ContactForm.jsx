import { useState } from "react";

const ContactForm = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  return formIsSubmitted ? (
    <p className="text-center text-pink text-lg font-semibold">
      Success! Your message has been sent.
    </p>
  ) : (
    <form
      action="https://formspree.io/f/xanrgbkq" // your endpoint here
      method="POST"
      className="max-w-md mx-auto flex flex-col gap-4 bg-background text-text p-6 rounded-md"
    >
      <label className="flex flex-col text-md font-semibold">
        Name
        <input
          type="text"
          name="name"
          required
          className="p-2 rounded bg-background border-2 border-pink/40"
        />
      </label>

      <label className="flex flex-col text-md font-semibold">
        Email
        <input
          type="email"
          name="email"
          required
          className="p-2 rounded bg-background border-2 border-pink/40"
        />
      </label>

      <label className="flex flex-col text-md font-semibold">
        Message
        <textarea
          name="message"
          required
          rows="5"
          className="p-2 rounded bg-background border-2 border-pink/40"
        ></textarea>
      </label>

      <button
        type="submit"
        onSubmit={(prev) => setFormIsSubmitted(!prev)}
        className="bg-pink text-background font-semibold py-2 px-4 rounded hover:bg-pink/80 transition-al cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
