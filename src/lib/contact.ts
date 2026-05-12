/** Primary inbox for website inquiries — keep in sync across the site. */
export const CONTACT_EMAIL = "info@coverinitiative.org" as const;

const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;

export type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
  safeToContact: boolean;
};

/**
 * Sends the contact form via FormSubmit (HTTPS JSON). Submissions are delivered to {@link CONTACT_EMAIL}.
 * The first submission may require activating FormSubmit from an email sent to that inbox.
 */
export async function submitContactForm(payload: ContactFormPayload): Promise<{ ok: true } | { ok: false; error: string }> {
  const name = payload.name.trim() || "Not provided";
  const email = payload.email.trim();
  if (!email) {
    return { ok: false, error: "Please enter your email so we can respond." };
  }

  const messageBody = [
    payload.message.trim(),
    "",
    `Safe to respond to this address: ${payload.safeToContact ? "Yes" : "No"}`,
  ].join("\n");

  const body: Record<string, string> = {
    name,
    email,
    _subject: "COVER — Contact form submission",
    message: messageBody,
  };

  let res: Response;
  try {
    res = await fetch(FORMSUBMIT_AJAX, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch {
    return { ok: false, error: "Network error. Check your connection or email us directly." };
  }

  let data: { success?: boolean | string; message?: string } = {};
  try {
    data = (await res.json()) as typeof data;
  } catch {
    /* FormSubmit may not always return JSON on hard errors */
  }

  // FormSubmit often returns string booleans in JSON (`"true"` / `"false"`); only real success counts.
  const rejected =
    data.success === false ||
    data.success === "false" ||
    String(data.success).toLowerCase() === "false";

  if (res.ok && !rejected) {
    return { ok: true };
  }

  return {
    ok: false,
    error: typeof data.message === "string" ? data.message : "Could not send your message. Try emailing us directly.",
  };
}
