# Valentin De Frutos — Personal Portfolio

A clean, minimalist, bilingual (EN/ES) portfolio website built for professional recruiters and internship coordinators.

## ✦ Features
- **Bilingual** — English/Spanish toggle with localStorage persistence
- **Minimalist aesthetic** — Charcoal & warm gold, Cormorant Garamond + DM Sans
- **Sections** — Hero, About, Skills, Projects, Resume, Contact
- **Responsive** — Mobile-first, hamburger nav on small screens
- **Scroll reveal animations** — Staggered entry on scroll
- **Resume download** — Just drop your PDF in `/assets/resume.pdf`

---

## 🚀 Deploy to GitHub + Render (Step by Step)

### Step 1 — Push to GitHub

```bash
# 1. Initialize git in the project folder
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial portfolio commit"

# 4. Create a new repo on GitHub (github.com → New repository)
#    Name it: portfolio  (or anything you like)
#    Keep it Public

# 5. Connect and push
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Render (Free)

1. Go to [render.com](https://render.com) and sign up (use GitHub login)
2. Click **New +** → **Static Site**
3. Connect your GitHub repo (`portfolio`)
4. Settings:
   - **Name:** `valentin-de-frutos` (or anything)
   - **Branch:** `main`
   - **Root Directory:** *(leave blank)*
   - **Build Command:** *(leave blank — it's plain HTML)*
   - **Publish Directory:** `.`
5. Click **Create Static Site**
6. ✅ Your site will be live at `https://valentin-de-frutos.onrender.com` (or similar)

---

## 📁 Folder Structure

```
portfolio/
├── index.html          ← Main HTML (bilingual)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Language toggle, animations, nav
├── assets/
│   └── resume.pdf      ← 👈 ADD YOUR RESUME HERE
└── README.md
```

---

## ✏️ How to Customize

### Update your info
Open `index.html` and search for these placeholders:

| Placeholder | Replace with |
|---|---|
| `your@email.com` | Your real email |
| `linkedin.com/in/yourprofile` | Your LinkedIn URL |
| `github.com/yourusername` | Your GitHub URL |
| `[Project Title]` | Your project name |
| `[Add your tools here]` | Excel, Notion, Python, etc. |
| `[Your level]` | Advanced, Fluent, etc. |
| `[Tag 1]` | Excel / Strategy / Finance |

### Add your resume
Place your resume PDF at: `assets/resume.pdf`

The download button and "View Online" button will work automatically.

### Add a new project
Copy one of the `<article class="project-card">` blocks in `index.html` and fill in your info. Use `data-en="..."` and `data-es="..."` on any text element you want bilingual.

---

## 🌐 Custom Domain (Optional)
In Render → your site → **Settings** → **Custom Domains** → add your domain.

---

Built with purpose. ✦
