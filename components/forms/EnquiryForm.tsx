"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const destinations = [
  { value: "", label: "Select a destination" },
  { value: "zingela", label: "Zingela" },
  { value: "drakensberg", label: "Drakensberg" },
  { value: "karkloof", label: "Karkloof" },
  { value: "undecided", label: "Not sure yet" },
];

const inputClass =
  "w-full rounded-sm border border-border bg-off-white px-4 py-3 text-charcoal focus:border-sunset focus:outline-none focus:ring-1 focus:ring-sunset";

export function EnquiryForm({
  defaultDestination,
  compact = false,
}: {
  defaultDestination?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          typeof body.error === "string" ? body.error : "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Request failed.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-border bg-sand/50 p-8 text-center">
        <p className="font-display text-2xl font-bold uppercase text-charcoal">
          Thank you
        </p>
        <p className="mt-3 text-muted">
          We&apos;ve received your enquiry and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", compact && "space-y-4")}>
      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor="name" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-earth-dark">
            Name *
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-earth-dark">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor="phone" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-earth-dark">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="riderType" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-earth-dark">
            I am a *
          </label>
          <select id="riderType" name="riderType" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option value="local">Local South African rider</option>
            <option value="international">International guest</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="destination" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-earth-dark">
          Destination
        </label>
        <select
          id="destination"
          name="destination"
          className={inputClass}
          defaultValue={defaultDestination ?? ""}
        >
          {destinations.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-earth-dark">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 4 : 6}
          className={inputClass}
          placeholder="Dates, group size, experience level, bike hire needs…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <Button type="submit" variant="primary" className={status === "loading" ? "opacity-70" : ""}>
        {status === "loading" ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  );
}
