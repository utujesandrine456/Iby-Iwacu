"use client";

import React from "react";

const PRIMARY = "#AD5618";
const DARK = "#1C1206";

export default function ContactPage() {
  return (
    <div >
      <section className="relative">
        <img src="/download (71).jpg" alt="Contact" className="h-[70vh] w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight drop-shadow text-center">Contact <span className="text-[#AD5618]">Us</span></h1>
            <p className="text-white text-normal p-3 mx-[100px] text-center">Iby’ iwacu is a platform that links local industries to global markets, helping them showcase and sell their products with passion and reliability. If you have questions, ideas, or would like to work with us, we’d be happy to hear from you!</p>
          </div>
        </div>
      </section>

      <div className="container mt-8 grid gap-4">
        {/* Two-column contact card */}
        <div className="rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left info panel */}
            <div className="bg-neutral-50 p-8 md:p-10">
              <h2 className="text-3xl font-semibold tracking-tight mb-2 text-neutral-900">Get in touch</h2>
              <p className="text-neutral-700 mb-8">Have questions or need more information? We're here to help—reach out anytime!</p>

              <div className="space-y-6">
                <InfoRow
                  icon={(cls) => (
                    <svg viewBox="0 0 24 24" className={cls}><path fill="currentColor" d="M12 2C8.7 2 6 4.7 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.3-2.7-6-6-6Zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>
                  )}
                  title="Head Office"
                  subtitle="sector Remera, KN3 Kigali, Rwanda"
                />
                <InfoRow
                  icon={(cls) => (
                    <svg viewBox="0 0 24 24" className={cls}><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5-8-5V6l8 5 8-5v2.2Z"/></svg>
                  )}
                  title="Email Us"
                  subtitle="support@ibyiwacu.com"
                />
                <InfoRow
                  icon={(cls) => (
                    <svg viewBox="0 0 24 24" className={cls}><path fill="currentColor" d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.2-.2.5-.3.8-.2 1 .3 2 .5 3 .5.4 0 .8.3.8.8V20c0 .4-.3.8-.8.8A16.8 16.8 0 0 1 3.2 7.2c0-.4.3-.8.8-.8h3.8c.4 0 .8.3.8.8 0 1 .2 2 .5 3 .1.3 0 .6-.2.8l-2.3 2z"/></svg>
                  )}
                  title="Call Us"
                  subtitle="+250 785 805 869"
                />
              </div>

              <hr className="my-8 border-black/10" />
              <div>
                <div className="font-medium mb-3 text-neutral-900">Follow our social media</div>
                <div className="flex items-center gap-4">
                  {['facebook','instagram','twitter','youtube'].map((n,i)=> (
                    <a key={i} href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white" style={{ background: PRIMARY }} aria-label={n}>
                      <span className="text-sm">{n[0].toUpperCase()}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right form panel */}
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-semibold tracking-tight mb-6 text-neutral-900">Send us a message</h2>
              <MessageForm />
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-10 rounded-2xl overflow-hidden border border-black/10 shadow-sm mx-20">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Kigali,Rwanda&output=embed"
          className="h-[450px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

function MessageForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-neutral-900">Name:</label>
        <input className="w-full rounded-xl bg-neutral-100 px-4 py-3 text-neutral-900 outline-none focus:ring-2" placeholder="Your name" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-neutral-900">Email:</label>
        <input className="w-full rounded-xl bg-neutral-100 px-4 py-3 text-neutral-900 outline-none focus:ring-2" placeholder="iby'iwacu@email.com" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-neutral-900">Message:</label>
        <textarea className="w-full min-h-40 rounded-xl bg-neutral-100 px-4 py-3 text-neutral-900 outline-none focus:ring-2" placeholder="Write your message" />
      </div>
      <button className="w-full rounded-full px-6 py-3 text-white font-semibold shadow-md" style={{ background: PRIMARY }} disabled={status!=="idle"}>
        {status === "idle" && "Send"}
        {status === "sending" && "Sending..."}
        {status === "sent" && "Sent"}
      </button>
    </form>
  );
}

function InfoRow({ icon, title, subtitle }: { icon: (cls: string) => React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-14 w-14 rounded-full text-white flex items-center justify-center" style={{ background: PRIMARY }}>
        {icon("h-7 w-7")}
      </div>
      <div>
        <div className="font-medium text-neutral-900">{title}</div>
        <div className="text-neutral-700 text-sm">{subtitle}</div>
      </div>
    </div>
  );
}


