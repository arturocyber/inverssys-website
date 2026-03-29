# INVERSSYS Website

**MSSP — Managed Security Service Provider**
Corporate website for INVERSSYS SRL, Santo Domingo, Dominican Republic.
Serving DR · USA · Panama · Colombia · Canada

---

## File Structure

```
inverssys-site/
├── index.html       ← Main page (clean HTML, no inline styles/scripts)
├── style.css        ← All styles
├── script.js        ← Language toggle EN/ES/FR, page switching, form handler
├── netlify.toml     ← Netlify routing config
├── .gitignore
└── README.md
```

---

## ⚙️ Before Deploying — Set Up Contact Form

In `index.html`, find this line and replace `YOUR_FORM_ID`:

```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

1. Go to [formspree.io](https://formspree.io) → Sign up free
2. Create a new form → copy your ID (e.g. `xyzabc12`)
3. Replace `YOUR_FORM_ID` with your actual ID

Free plan: 50 submissions/month. Paid: $8/mo unlimited.

---

## 🚀 Deploy to GitHub + Netlify

### Step 1 — Push to GitHub

```bash
cd inverssys-site
git init
git add .
git commit -m "Initial INVERSSYS website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/inverssys-site.git
git push -u origin main
```

### Step 2 — Deploy on Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → select `inverssys-site`
4. Leave build settings empty (static site)
5. Click **Deploy site**

Done — live in ~30 seconds at a Netlify URL.

### Step 3 — Connect your domain (inverssys.com)

1. In Netlify → Site settings → Domain management
2. Add custom domain: `inverssys.com`
3. Follow DNS instructions (point your domain's nameservers to Netlify)

---

## 🌐 Languages

Toggle cycles: 🇺🇸 EN → 🇪🇸 ES → 🇫🇷 FR → 🇺🇸 EN

---

## 📞 Contact Info in Site

- WhatsApp: +1 809-729-7971
- Email: info@inverssys.com
- Address: Av. Máximo Gómez 29, Santo Domingo 10412, DR
