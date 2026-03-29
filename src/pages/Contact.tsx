import { useState } from "react";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_EMAIL, submitContactForm } from "@/lib/contact";

const Contact = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [safeToContact, setSafeToContact] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || honeypot) return;

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      toast({
        variant: "destructive",
        title: "Email required",
        description: "Please add your email so we can reply to you.",
      });
      return;
    }

    setSending(true);
    const result = await submitContactForm({
      name,
      email,
      message,
      safeToContact,
    });

    if (result.ok) {
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. We'll respond as soon as we can.",
      });
      setMessage("");
      setEmail("");
      setName("");
      setSafeToContact(false);
    } else {
      toast({
        variant: "destructive",
        title: "Could not send",
        description: result.error,
      });
    }
    setSending(false);
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto max-w-2xl px-6">
          <FadeIn>
            <h1 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Reach Out When You're Ready
            </h1>
            <p className="mt-4 text-muted-foreground">
              We&apos;ll respond as soon as we can. Please include your email so we can write back. Your name is
              optional if you prefer.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              You can also email us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-primary underline-offset-4 hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              {/* Honeypot — leave empty (bots often fill hidden fields). */}
              <input
                type="text"
                name="company"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="pointer-events-none absolute left-[-9999px] h-0 max-h-0 w-0 overflow-hidden opacity-0"
              />
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Name <span className="text-muted-foreground text-xs">(optional)</span></Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  maxLength={100}
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email <span className="text-primary text-xs">*</span>
                  <span className="text-muted-foreground text-xs font-normal"> (so we can reply)</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  maxLength={255}
                  required
                  autoComplete="email"
                  inputMode="email"
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message <span className="text-primary text-xs">*</span></Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What would you like to share?"
                  required
                  maxLength={2000}
                  className="min-h-[140px] rounded-lg"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="safe"
                  checked={safeToContact}
                  onCheckedChange={(v) => setSafeToContact(v === true)}
                />
                <Label htmlFor="safe" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  It is safe to respond to this email
                </Label>
              </div>

              <Button
                type="submit"
                disabled={!message.trim() || !email.trim() || sending}
                className="rounded-full px-8"
              >
                {sending ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 rounded-xl border border-border bg-soft-rose p-6">
              <h2 className="font-serif text-lg font-semibold text-foreground">Important Safety Notice</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                If you are in immediate danger, please call <strong className="text-foreground">911</strong> in Canada.
                This website is not a substitute for emergency services.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                For 24/7 crisis support, contact <strong className="text-foreground">Talk Suicide Canada</strong> at{" "}
                <strong className="text-foreground">1-833-456-4566</strong> or the{" "}
                <strong className="text-foreground">Assaulted Women's Helpline</strong> at{" "}
                <strong className="text-foreground">1-866-863-0511</strong>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
