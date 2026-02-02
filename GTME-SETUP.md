# GTME School LMS Setup Guide

## Quick Start (15-20 min)

### 1. Create Supabase Project

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Create new project in your org:
   - **Name:** `gtme-school`
   - **Region:** West US (closest to Phoenix)
   - **Password:** Generate a strong one, save it!

3. Once created, go to **Settings → API** and copy:
   - `Project URL` → `PUBLIC_SUPABASE_URL`
   - `anon public` key → `PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `PRIVATE_SUPABASE_SERVICE_ROLE`

### 2. Run Database Migrations

Option A: Via Supabase CLI (recommended)
```bash
# Install Supabase CLI
brew install supabase/tap/supabase

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Run migrations
supabase db push
```

Option B: Via SQL Editor
1. Go to Supabase Dashboard → SQL Editor
2. Run each file in `supabase/migrations/` in order

### 3. Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `GirthBrooksBot/gtme-school-lms`
3. Configure:
   - **Framework:** SvelteKit
   - **Root Directory:** `apps/dashboard`
   - **Build Command:** `pnpm build`
   - **Install Command:** `pnpm install`

4. Add Environment Variables:
```
PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
PRIVATE_SUPABASE_SERVICE_ROLE=eyJhbGciOi...
PUBLIC_IS_SELFHOSTED=true
PRIVATE_APP_HOST=gtmeschool.ai
PRIVATE_APP_SUBDOMAINS=app
OPENAI_API_KEY=sk-... (optional, for AI features)
```

5. Deploy!

### 4. Configure Domain

1. In Vercel → Project Settings → Domains
2. Add: `app.gtmeschool.ai`
3. In your DNS (Cloudflare/wherever):
   - Add CNAME: `app` → `cname.vercel-dns.com`

### 5. Update Main Site

Add login button to GTMESchool.ai nav:
```tsx
<a href="https://app.gtmeschool.ai" className="...">
  Student Portal
</a>
```

---

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `PUBLIC_SUPABASE_URL` | ✅ | Your Supabase project URL |
| `PUBLIC_SUPABASE_ANON_KEY` | ✅ | Supabase anon/public key |
| `PRIVATE_SUPABASE_SERVICE_ROLE` | ✅ | Supabase service role key |
| `PUBLIC_IS_SELFHOSTED` | ✅ | Set to `true` |
| `PRIVATE_APP_HOST` | ✅ | `gtmeschool.ai` |
| `PRIVATE_APP_SUBDOMAINS` | ✅ | `app` |
| `OPENAI_API_KEY` | ❌ | For AI course generation |
| `UNSPLASH_API_KEY` | ❌ | For stock images |

---

## Post-Deploy Checklist

- [ ] Create admin account at `app.gtmeschool.ai/signup`
- [ ] Create first organization (GTME School)
- [ ] Upload logo and customize branding
- [ ] Create first course
- [ ] Test student signup flow
- [ ] Add login link to main site

---

## Branding Customization

Colors and branding can be customized in:
- `apps/dashboard/src/lib/components/` - UI components
- `apps/dashboard/static/` - Logo, favicon
- Supabase → Storage → Upload logo

The default theme works well but can be updated to match GTMESchool.ai's neon-green aesthetic.
