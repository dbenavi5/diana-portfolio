"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Button from "@/components/button";

type Props = {
  formspreeEndpoint: string;
  redirectTo?: string; // default "/"
  subject?: string; // optional email subject
  triggerLabel: string; // what the button shows (your email)
  triggerVariant?: "secondary" | "primary" | "text"; // match your Button variants
  triggerClassName?: string;
  triggerIconAfter?: React.ReactNode;
};

export default function ContactDrawer({
  formspreeEndpoint,
  redirectTo = "/",
  subject = "New Portfolio Inquiry",
  triggerLabel,
  triggerVariant = "secondary",
  triggerClassName,
  triggerIconAfter,
}: Props) {
  const [open, setOpen] = useState(false);
  const dialogId = useId();

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      {/* Trigger (your existing button, now opens drawer) */}
      <Button
        variant={triggerVariant}
        className={triggerClassName}
        onClick={() => setOpen(true)}
        iconAfter={triggerIconAfter}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={dialogId}
      >
        {triggerLabel}
      </Button>

      <AnimatePresence>
        {open ? (
          <>
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close contact form"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.div
              id={dialogId}
              role="dialog"
              aria-modal="true"
              className="fixed inset-x-0 bottom-0 z-50 h-[92dvh] w-full bg-white text-black shadow-2xl rounded-t-3xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <div className="flex h-full flex-col">
                {/* Grab handle */}
                <div className="flex justify-center pt-3">
                  <div className="h-1.5 w-12 rounded-full bg-black/15" />
                </div>

                {/* Header */}
                <div className="flex items-center justify-between border-b px-5 py-4">
                  <div>
                    <h2 className="text-lg font-semibold">Send an inquiry</h2>
                    <p className="text-sm text-black/60">
                      I’ll reply as soon as I can.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-full p-2 hover:bg-black/5 transition"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto px-5 py-5">
                  {/* Basic Formspree integration */}
                  <form
                    action={formspreeEndpoint}
                    method="POST"
                    className="space-y-4"
                  >
                    {/* Redirect back home after submission */}
                    <input type="hidden" name="_redirect" value={redirectTo} />
                    <input type="hidden" name="_subject" value={subject} />

                    {/* Honeypot field (spam bots fill it) */}
                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                    />

                    <div className="space-y-1">
                      <label className="text-sm font-medium" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
                        placeholder="What would you like to build?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-black px-4 py-2 text-white font-medium hover:opacity-90 transition"
                    >
                      Send
                    </button>

                    <p className="text-xs text-black/50">
                      Submissions are handled by Formspree and you’ll be
                      returned to the homepage after sending.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
