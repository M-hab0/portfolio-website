# 🚀 Complete Deployment Guide — Mahdi Habibi Portfolio

This guide walks you through **everything** you need to deploy your portfolio
to Netlify with a custom domain. Follow the steps in order.

---

## 📋 Table of Contents

1. [Pre-Deployment Checklist](#1-pre-deployment-checklist)
2. [Set Up Formspree (Contact Form)](#2-set-up-formspree-contact-form)
3. [Create GitHub Repository](#3-create-github-repository-recommended)
4. [Deploy to Netlify](#4-deploy-to-netlify)
5. [Buy a Domain](#5-buy-a-domain)
6. [Connect Domain to Netlify](#6-connect-domain-to-netlify)
7. [Post-Deployment Tasks](#7-post-deployment-tasks)
8. [SEO & Analytics](#8-seo--analytics-setup)
9. [Marketing Your Portfolio](#9-marketing-your-portfolio)

---

## 1. Pre-Deployment Checklist

Before you deploy, make sure you've done these:

- [ ] Replaced `YOUR_FORMSPREE_ID` in `index.html` with your real Formspree ID (see step 2)
- [ ] Updated `https://mahdi-habibi.dev/` in `index.html`, `sitemap.xml`, `robots.txt` with **your actual domain** (do this AFTER buying the domain)
- [ ] Tested the site locally — open `index.html` in your browser
- [ ] Replaced the CV PDF if you want to edit it (file is in `assets/Mahdi-Habibi-CV.pdf`)
- [ ] Checked all 4 project links work
- [ ] Checked WhatsApp, Instagram, LinkedIn links are correct

---

## 2. Set Up Formspree (Contact Form)

Formspree lets your contact form send **real emails** to your inbox — for free.

### Steps:

1. Go to **[formspree.io](https://formspree.io)** and click **"Get Started"**
2. Sign up with your email (or Google)
3. Click **"+ New Form"**
4. Give it a name like `Portfolio Contact`
5. Enter the email address where you want to receive messages
6. Click **"Create Form"**
7. You'll see an endpoint like: `https://formspree.io/f/xyzabcde`
8. Copy the **ID** (the part after `/f/` — e.g., `xyzabcde`)
9. Open `index.html` and find:
   ```html
   action="https://formspree.io/f/YOUR_FORMSPREE_ID"
   ```
10. Replace `YOUR_FORMSPREE_ID` with your ID:
    ```html
    action="https://formspree.io/f/xyzabcde"
    ```
11. Save the file

**Free plan limits:** 50 submissions/month (plenty for a portfolio).

---

## 3. Create GitHub Repository (Recommended)

Using GitHub + Netlify gives you **auto-deploy on every commit**. If you just
want to drag & drop, skip to step 4.

### Steps:

1. Create a GitHub account at **[github.com](https://github.com)** if you don't have one
2. Click **"+ New repository"**
3. Name it: `portfolio` or `mahdi-habibi-portfolio`
4. Set to **Public**
5. Don't initialize with README (you already have one)
6. Click **"Create repository"**

### Push your code:

Open terminal in your portfolio folder:

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

---

## 4. Deploy to Netlify

### Option A: Drag & Drop (Fastest, 2 minutes)

1. Go to **[app.netlify.com](https://app.netlify.com)** and sign up (free)
2. On the dashboard, look for the **drag & drop area** that says "Drag and drop your site folder here"
3. Drag your entire `portfolio` folder into that area
4. Wait 10-30 seconds — done!
5. You'll get a free URL like: `https://random-name-12345.netlify.app`

### Option B: Connect GitHub (Auto-deploy on push)

1. Sign in to Netlify with GitHub
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize
4. Select your `portfolio` repository
5. Build settings — leave as default:
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (just a dot)
6. Click **"Deploy site"**
7. From now on, every `git push` auto-deploys your site 🎉

### Change the Netlify subdomain (optional):

1. In your site's dashboard → **"Site settings"** → **"Change site name"**
2. Choose something like: `mahdi-habibi`
3. Your site is now at `https://mahdi-habibi.netlify.app`

---

## 5. Buy a Domain

You can skip this step and use the `.netlify.app` subdomain, but a custom
domain looks **way more professional** to clients.

### Best Domain Registrars:

| Registrar | Pros | Avg. Cost |
|-----------|------|-----------|
| **[Namecheap](https://namecheap.com)** | Reliable, free WHOIS privacy, great UI | ~$10-13/yr for .com |
| **[Porkbun](https://porkbun.com)** | Cheapest, clean UI, good support | ~$9-11/yr for .com |
| **[Cloudflare](https://cloudflare.com)** | At-cost pricing, DNS built-in | ~$9/yr for .com |

### Good Domain Ideas (check availability):

- `mahdihabibi.com` — Most professional
- `mahdi-habibi.com` — With hyphen
- `mahdihabibi.dev` — Great for developers (~$15/yr)
- `habibi.dev` — Short & memorable
- `mahdi.codes` — Creative, ~$40/yr
- `mehab0.com` — Your Instagram handle style

### Tips:

- **`.com`** is the gold standard — go for it first
- **`.dev`** is perfect for developers but costs a bit more
- Avoid weird TLDs like `.xyz` or `.online` — they look spammy
- Buy for **1-2 years** — don't spend on 10 years upfront
- **Say NO** to expensive add-ons (SSL, privacy — Netlify gives SSL free; Namecheap gives privacy free)

---

## 6. Connect Domain to Netlify

Once you buy your domain, connect it to Netlify:

### Steps:

1. In Netlify → Your site → **"Domain management"**
2. Click **"Add a domain"**
3. Enter your domain (e.g., `mahdihabibi.com`)
4. Netlify will show you DNS records to add

### At your domain registrar (Namecheap/Porkbun/etc.):

**Option 1 — Use Netlify DNS (easiest):**

1. In Netlify: click **"Set up Netlify DNS"**
2. Netlify shows 4 nameservers, like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
3. In your registrar's dashboard, find **"Nameservers"** setting
4. Change from "Default" to "Custom DNS" and paste the 4 nameservers
5. Save

**Option 2 — Keep your registrar's DNS, just point to Netlify:**

Add these records at your registrar's DNS panel:

| Type  | Host | Value                   |
|-------|------|-------------------------|
| A     | @    | `75.2.60.5`             |
| CNAME | www  | `your-site.netlify.app` |

### Wait for propagation:

DNS changes take **5 minutes to 48 hours** (usually under 1 hour).

Check status at: **[dnschecker.org](https://dnschecker.org)**

### Enable HTTPS:

Netlify automatically gives you **free SSL** via Let's Encrypt. Once DNS
propagates, in Netlify go to **"Domain management"** → **"HTTPS"** → click
**"Verify DNS configuration"** → **"Provision certificate"**.

---

## 7. Post-Deployment Tasks

After your site is live, update these with your real domain:

### Update URLs in your code:

1. **`index.html`** — replace `https://mahdi-habibi.dev/` with your actual domain in:
   - `<meta property="og:url">`
   - `<link rel="canonical">`
   - All `<meta property="og:image">` and `<meta name="twitter:image">` tags
   - JSON-LD `"url"` field

2. **`sitemap.xml`** — replace all `https://mahdi-habibi.dev/` with your domain

3. **`robots.txt`** — update the sitemap URL

4. Commit & push (or re-upload):
   ```bash
   git add .
   git commit -m "Update URLs to real domain"
   git push
   ```

### Test your OG image preview:

Paste your URL into:

- **[opengraph.xyz](https://www.opengraph.xyz)** — see Facebook/LinkedIn preview
- **[cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)** — see Twitter preview
- Send your URL to yourself on WhatsApp → see the preview card

---

## 8. SEO & Analytics Setup

### Google Search Console (free, essential)

1. Go to **[search.google.com/search-console](https://search.google.com/search-console)**
2. Click **"Add property"** → enter your domain
3. Verify via DNS TXT record (Netlify DNS supports this)
4. Once verified, submit your sitemap: `https://yourdomain.com/sitemap.xml`
5. Google will index your site in **3-7 days**

### Bing Webmaster Tools (free)

Same as Google, at **[bing.com/webmasters](https://www.bing.com/webmasters)**

### Analytics (pick ONE):

**Option A — Google Analytics 4 (free, feature-rich):**

1. Go to **[analytics.google.com](https://analytics.google.com)** → create account
2. Get your `G-XXXXXXXXXX` measurement ID
3. Add this to `index.html` right before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

**Option B — Umami (privacy-friendly, free tier):**

1. Sign up at **[umami.is](https://umami.is)** (cloud version, free tier)
2. Add your site → copy the tracking script
3. Paste before `</head>` in `index.html`

**Option C — Netlify Analytics ($9/mo, no JS needed):**

- Built into Netlify, no code changes, but paid

---

## 9. Marketing Your Portfolio

Now that it's live, get people to see it:

### Immediate actions (first 24 hours):

- [ ] Add your portfolio URL to **LinkedIn** (profile URL + "Featured" section)
- [ ] Add to **Instagram bio**: `@mehab0__786`
- [ ] Add to your **GitHub profile README**
- [ ] Send the link to 10 friends/family — ask for feedback
- [ ] Update WhatsApp "About": `Frontend Dev | yourdomain.com`

### First week:

- [ ] Post on LinkedIn: "🚀 Just launched my portfolio! [link]" with a screenshot
- [ ] Post on Instagram with a carousel showing the site
- [ ] Share in dev communities:
  - [r/webdev](https://reddit.com/r/webdev) → Showcase Saturday
  - [r/Frontend](https://reddit.com/r/Frontend)
  - **Dev.to** — write a blog post about building it
  - **Hashnode** — similar to Dev.to
  - Discord servers (frontendmentor, reactiflux, etc.)

### Landing freelance clients:

Add your portfolio URL to:

- **[Upwork](https://upwork.com)** — global freelance platform
- **[Fiverr](https://fiverr.com)** — gig-based
- **[Bionluk](https://bionluk.com)** — Turkey-specific
- **[Armut](https://armut.com)** — Turkey-specific
- **[Kwork](https://kwork.com)** — fixed-price gigs
- **[Toptal](https://toptal.com)** — higher-end (needs vetting)
- **[PeoplePerHour](https://peopleperhour.com)**
- **[Freelancer.com](https://freelancer.com)**

### Pro tip for LinkedIn:

Change your LinkedIn headline from "Frontend Developer" to something like:

> **"Frontend Developer | I build modern, pixel-perfect websites in HTML, CSS, JS → portfolio: yourdomain.com"**

This instantly tells people what you do AND where to see your work.

---

## 🎯 Quick Reference Commands

```bash
# Local testing (Python)
cd portfolio
python3 -m http.server 8000
# Open http://localhost:8000

# Local testing (Node)
npx serve .

# Git commit & push
git add .
git commit -m "Update X"
git push

# Regenerate CV PDF (if you edit cv.html)
# Use browser print → Save as PDF
```

---

## ❓ Troubleshooting

### "My domain doesn't work after 24 hours"
- Check DNS at [dnschecker.org](https://dnschecker.org)
- Ensure nameservers are correct at your registrar
- Try clearing your browser DNS cache

### "HTTPS doesn't work"
- Wait 15-30 min after DNS propagates
- In Netlify: Domain management → HTTPS → "Renew certificate"

### "Favicon doesn't show"
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito mode
- Check favicon path: `/assets/favicon.svg` should be accessible

### "Contact form doesn't send emails"
- Did you replace `YOUR_FORMSPREE_ID` with real ID?
- Check Formspree dashboard → "Submissions"
- Verify your email in Formspree (they send a confirmation email first time)

### "Site is slow"
- Check [PageSpeed Insights](https://pagespeed.web.dev) — aim for 90+
- All your images are already WebP-optimized ✓
- Netlify CDN handles global delivery ✓

---

## 💰 Estimated Costs

| Item | Cost |
|------|------|
| Netlify hosting | **Free** (100GB bandwidth/mo) |
| Custom domain (.com) | **~$10-13/year** |
| SSL certificate | **Free** (Let's Encrypt via Netlify) |
| Formspree (50 forms/mo) | **Free** |
| Google Analytics | **Free** |
| **Total yearly cost** | **~$10-13** |

That's less than $1.10/month for a professional online presence. 🚀

---

## 🎉 You're Done!

Your portfolio is now:
- ✅ Live on the internet
- ✅ HTTPS-enabled
- ✅ SEO-ready with sitemap & structured data
- ✅ Connected to real email via Formspree
- ✅ Tracked with analytics
- ✅ Indexed by Google

Now go land some clients! Good luck, **حبیبی**! 💚
