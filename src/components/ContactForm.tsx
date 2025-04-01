import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [state, handleformSubmit,reset] = useForm("xeoalypy");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (state.succeeded) {
    return (
      <div className="glass p-8 rounded-xl text-center">
        <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => {
            reset()
            setFormState({ name: "", email: "", subject: "", message: "" });
          }}
          className="button-secondary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleformSubmit}
      // action="https://formspree.io/f/xeoalypy"
      // method="POST"
      className="glass p-8 rounded-xl"
    >
      {error && (
        <div className="bg-destructive/20 text-destructive-foreground p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-secondary border border-secondary focus:border-accent-purple focus:outline-none focus:ring-1 focus:ring-accent-purple transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-secondary border border-secondary focus:border-accent-purple focus:outline-none focus:ring-1 focus:ring-accent-purple transition-colors"
            required
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-secondary border border-secondary focus:border-accent-purple focus:outline-none focus:ring-1 focus:ring-accent-purple transition-colors"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={6}
          className="w-full p-3 rounded-lg bg-secondary border border-secondary focus:border-accent-purple focus:outline-none focus:ring-1 focus:ring-accent-purple transition-colors resize-none"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="button-primary w-full flex items-center justify-center"
      >
        {state.submitting ? (
          <div className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </div>
        ) : (
          <>
            <Send size={18} className="mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
