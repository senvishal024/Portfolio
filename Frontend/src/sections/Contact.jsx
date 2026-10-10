import socialLinks from "../data/social";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
});

const [status, setStatus] = useState("");
const [isSending, setIsSending] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("");
  setIsSending(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    setStatus("Message sent successfully!");
    setFormData({
      from_name: "",
      from_email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    setStatus("Message could not be sent. Please try again.");
  } finally {
    setIsSending(false);
  }
};

  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="flex flex-col mb-14 text-center items-center">
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Get In Touch
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-h)] sm:text-4xl">
            Let's build something together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text)] sm:text-base">
            I'm currently open to internship and MERN Stack development
            opportunities. If you have a project, opportunity or simply
            want to connect, feel free to reach out.
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[var(--accent)]" />
        </div>

        {/* Contact Layout */}
        <div className="grid gap-8 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="lg:col-span-2">

            <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--code-bg)] p-7 text-left">

              <h3 className="mb-3 text-xl font-semibold text-[var(--text-h)]">
                Let's connect
              </h3>

              <p className="mb-8 text-sm leading-7 text-[var(--text)]">
                Whether you're looking for a developer, have an interesting
                project or want to discuss an opportunity, I'd be happy to
                hear from you.
              </p>

              {/* Email */}
              {socialLinks.map((item)=>(
              <a
                href={item.url}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"

                className="group mb-5 flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 transition-all duration-200 hover:border-[var(--accent-border)]"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--accent-border)] bg-[var(--accent-bg)] text-[var(--accent)]">
                  {item.shortName}
                </div>

                <div>
                  <p className="mb-1 text-xs text-[var(--text)]">
                    {item.name}
                  </p>

                  <p className="text-sm font-medium text-[var(--text-h)] transition-colors group-hover:text-[var(--accent)]">
                    {item.account}
                  </p>
                </div>

              </a>
              ))}
             

            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--code-bg)] p-7 text-left sm:p-8">

              <div className="mb-7">
                <h3 className="text-xl font-semibold text-[var(--text-h)]">
                  Send me a message
                </h3>

                <p className="mt-2 text-sm text-[var(--text)]">
                  Have an opportunity or project in mind? Drop me a message.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[var(--text-h)]"
                    >
                      Name
                    </label>

                    <input
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text-h)] outline-none transition-all placeholder:text-zinc-600 focus:border-[var(--accent-border)] focus:ring-1 focus:ring-[var(--accent-border)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[var(--text-h)]"
                    >
                      Email
                    </label>

                    <input
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text-h)] outline-none transition-all placeholder:text-zinc-600 focus:border-[var(--accent-border)] focus:ring-1 focus:ring-[var(--accent-border)]"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-[var(--text-h)]"
                  >
                    Subject
                  </label>

                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    id="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text-h)] outline-none transition-all placeholder:text-zinc-600 focus:border-[var(--accent-border)] focus:ring-1 focus:ring-[var(--accent-border)]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[var(--text-h)]"
                  >
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    id="message"
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text-h)] outline-none transition-all placeholder:text-zinc-600 focus:border-[var(--accent-border)] focus:ring-1 focus:ring-[var(--accent-border)]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
                {status && (
  <p role="status" aria-live="polite" className="mt-4 text-sm text-[var(--text)]">
    {status}
  </p>
)}
              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;