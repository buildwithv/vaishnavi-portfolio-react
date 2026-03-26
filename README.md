# vaishnavi.dev — React Portfolio

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Build for production
npm run build
```

---

## 📧 EmailJS Visitor Notification Setup (FREE, 5 min)

Get notified by email every time someone visits your portfolio!

### Step 1 — Create EmailJS account
Go to → https://www.emailjs.com and sign up free

### Step 2 — Add Email Service
- Dashboard → Email Services → Add New Service
- Choose Gmail → connect your Gmail account
- Copy the **Service ID** (e.g. `service_abc123`)

### Step 3 — Create Email Template
- Dashboard → Email Templates → Create New Template
- Subject: `👀 New visitor on vaishnavi.dev!`
- Body:
```
Someone just visited your portfolio! 🎉

Time:    {{visitor_time}}
Page:    {{visitor_page}}
Browser: {{visitor_browser}}
OS:      {{visitor_os}}
```
- Copy the **Template ID** (e.g. `template_xyz789`)

### Step 4 — Get your Public Key
- Dashboard → Account → General → Public Key
- Copy the **Public Key** (e.g. `abcDEFghiJKL`)

### Step 5 — Add to App.jsx
Open `src/App.jsx` and replace these 3 lines at the top:

```js
const EMAILJS_SERVICE_ID  = "service_abc123";   // ← your Service ID
const EMAILJS_TEMPLATE_ID = "template_xyz789";  // ← your Template ID
const EMAILJS_PUBLIC_KEY  = "abcDEFghiJKL";     // ← your Public Key
```

That's it! Every visitor will trigger an email to you. ✅

---

## 🌍 Deploy to Netlify (Free)

```bash
npm run build
# Drag the /build folder to → https://app.netlify.com/drop
```

Or connect your GitHub repo for auto-deploy on every push.

---

## 🛠 Tech Stack
- React 18
- CSS Custom Properties (theming)
- EmailJS (visitor notifications)
- Canvas API (particle background)
- IntersectionObserver (scroll animations)
