## Goal
Turn your CSV of 32 organizations into a dedicated, searchable **Resources Directory** page so survivors can quickly find the right kind of help (shelter, legal, support group, etc.) in their area.

## Recommendation
Build it as its **own page** (`/resources`) rather than only a search bar on an existing page. Reasons:
- 32 entries (and growing) is too many to embed inline on Home or About without overwhelming the page.
- A dedicated page lets us add filters (Type, Location, Tags) alongside the search — far more useful than a search bar alone.
- Keeps the existing province-level `ProvinceResources` section on Home as the high-level "national/provincial helplines" entry point, while `/resources` becomes the deep, local-org directory.

We will also add a **search bar entry point on the Home page** (under the existing Province Resources section) that links into `/resources` so users discover it.

## What gets built

### 1. Data file
`src/data/organizations.ts`
- Parse the CSV into a typed array of 32 orgs.
- Clean up trailing whitespace, normalize "N/A" → undefined, fix the typo `info@logifem[dot]org` → `info@logifem.org`.
- Split `Special tags` comma-string into a `tags: string[]` array for filtering.
- Shape:
  ```ts
  type Organization = {
    name: string;
    type: string;
    tags: string[];
    location: string;
    phone?: string;
    email?: string;
    website: string;
  }
  ```

### 2. New page: `src/pages/Resources.tsx`
Layout (matches existing minimalist warm-cream aesthetic):
- Header section: title "Find Support", short reassuring intro paragraph, 911/Quick-Exit reminder banner.
- **Search bar** (full-text across name, type, tags, location).
- **Filter chips**: Location (Montreal areas, Laval, Longueuil, Quebec…) and Type (Shelter, Legal, Support services, Helpline…). Multi-select, derived dynamically from the data.
- **Results grid** of cards. Each card shows:
  - Org name + type
  - Location with map pin icon
  - Tag badges (e.g. "24/7", "Bilingual", "LGBTQ", "Housing")
  - Phone (click-to-call) and email (mailto) when available
  - "Visit Website" button (opens in new tab, `rel="noopener noreferrer"`)
- Empty state: "No organizations match your search — try clearing filters."
- Result count: "Showing X of 32 organizations".

### 3. Route + nav
- `src/App.tsx`: register `<Route path="/resources" element={<Resources />} />`.
- `src/components/Header.tsx`: add **Resources** to `navLinks` between FAQ and Contact (desktop + mobile).
- `src/components/Footer.tsx`: add Resources link in the navigation column.

### 4. Home page entry point
In `src/components/ProvinceResources.tsx`, add a small CTA at the bottom:
> "Looking for a specific organization? **Browse our full directory →**" linking to `/resources`.

## Notes on data quality
A few rows have missing emails/phones (Chez Doris, Le Chainon, SACOMSS) — these will gracefully hide those fields rather than show blanks. The CSV's ~33 entries are all Quebec-based; the page copy will reflect that ("Quebec-based organizations") so it doesn't feel mismatched against the national Province Resources section.

## Out of scope (can add later)
- Map view
- Submitting new orgs via form
- Multilingual toggle for the directory itself
