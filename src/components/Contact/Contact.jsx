import { useState } from "react";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiMapPinLine,
} from "@remixicon/react";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState("idle");
  const googleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    if (!googleScriptUrl) {
      setSubmitStatus("configuration-error");
      return;
    }

    setSubmitStatus("submitting");

    try {
      await fetch(googleScriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      formElement.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-black/10 px-6 py-20 text-white sm:px-10 md:px-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Start a conversation
        </p>
        <h2 className="mb-5 text-3xl font-bold sm:text-4xl md:text-5xl">
          Get In Touch
        </h2>
        <p className="mb-12 max-w-2xl text-lg leading-8 text-slate-300">
          Have a project in mind, an opportunity to share, or just want to say
          hello? Send me a message and I&apos;ll get back to you.
        </p>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <RiMailLine size={23} />
              </div>
              <p className="text-sm text-slate-400">Email</p>
              <a
                href="mailto:kushwahavaibhav150@gmail.com"
                className="mt-1 inline-block font-semibold transition hover:text-cyan-300"
              >
                kushwahavaibhav150@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <RiMapPinLine size={23} />
              </div>
              <p className="text-sm text-slate-400">Location</p>
              <p className="mt-1 font-semibold">India</p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/mrvaibhav06"
                aria-label="GitHub profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-300"
              >
                <RiGithubLine size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-kushwaha-a08037297/"
                aria-label="LinkedIn profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-300"
              >
                <RiLinkedinLine size={24} />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-300">
                Your name
                <input
                  name="name"
                  type="text"
                  required
                  disabled={submitStatus === "submitting"}
                  placeholder="Your Name"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10"
                />
              </label>
              <label className="block text-sm font-medium text-slate-300">
                Email address
                <input
                  name="email"
                  type="email"
                  required
                  disabled={submitStatus === "submitting"}
                  placeholder="your.email@example.com"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10"
                />
              </label>
            </div>

            <label className="mt-6 block text-sm font-medium text-slate-300">
              Message
              <textarea
                name="message"
                rows="6"
                required
                disabled={submitStatus === "submitting"}
                placeholder="Tell me about your project..."
                className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/10"
              />
            </label>

            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="mt-6 w-full rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#171d32] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {submitStatus === "submitting" ? "Sending..." : "Send Message"}
            </button>

            <div className="mt-4 min-h-6" aria-live="polite">
              {submitStatus === "success" && (
                <p className="text-sm font-medium text-emerald-300">
                  Message sent successfully. Thank you!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm font-medium text-red-300">
                  Message could not be sent. Please try again.
                </p>
              )}
              {submitStatus === "configuration-error" && (
                <p className="text-sm font-medium text-amber-300">
                  Google Sheets endpoint is not configured yet.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
