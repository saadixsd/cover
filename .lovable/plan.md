## Fix Contact form TypeScript error cleanly

**File:** `src/pages/Contact.tsx`

Refactor the result handling in `handleSubmit` to use proper discriminated-union narrowing instead of a type assertion.

### Change
Replace the `if (result.ok) { ... } else { const errorMsg = (result as { ok: false; error: string }).error; ... }` block with:

```tsx
if (!result.ok) {
  toast({
    variant: "destructive",
    title: "Could not send",
    description: result.error,
  });
} else {
  toast({
    title: "Message sent",
    description: "Thank you for reaching out. We'll respond as soon as we can.",
  });
  setMessage("");
  setEmail("");
  setName("");
  setSafeToContact(false);
}
setSending(false);
```

### Why
`submitContactForm` returns `{ ok: true } | { ok: false; error: string }`. Checking `!result.ok` first lets TypeScript narrow `result` to the failure variant so `result.error` is typed correctly — no assertion needed.

No other files change.