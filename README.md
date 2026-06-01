# 🖥️ Computer Zone — Premier Computer Institute Website

A production-ready website for **Computer Zone** built with **Next.js 15**, **Tailwind CSS v4**, **Framer Motion**, and **MongoDB Atlas**.

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Edit `.env.local` and replace the MongoDB Atlas connection string:

```env
MONGODB_URI=mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@cluster0.mongodb.net/computerzone?retryWrites=true&w=majority
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **How to get your MongoDB URI:**
> 1. Go to [https://cloud.mongodb.com](https://cloud.mongodb.com)
> 2. Create a free cluster (M0)
> 3. Click "Connect" → "Connect your application"
> 4. Copy the connection string and replace `<username>` and `<password>`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Project Structure

```
institute/
├── app/
│   ├── layout.js              # Root layout (SEO, fonts, JSON-LD)
│   ├── page.js                # Homepage
│   ├── globals.css            # Global styles + Tailwind
│   └── api/
│       └── admission/
│           └── route.js       # POST /api/admission
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx         # Sticky responsive navbar
│   │   └── Footer.jsx         # Footer with links & social
│   ├── sections/
│   │   ├── HeroSection.jsx    # Particle canvas hero
│   │   ├── AboutSection.jsx   # Mission & vision
│   │   ├── WhyChooseUs.jsx    # Feature cards
│   │   ├── CoursesSection.jsx # All 5 courses
│   │   ├── ProjectsShowcase.jsx # Student projects
│   │   ├── LearningRoadmap.jsx  # 4-phase roadmap
│   │   ├── Testimonials.jsx   # Auto-rotating reviews
│   │   ├── FAQ.jsx            # Accordion FAQ
│   │   ├── ContactSection.jsx # Contact + Map
│   │   └── AdmissionForm.jsx  # Full form with validation
│   └── ui/
│       ├── AnimatedCounter.jsx
│       ├── CourseCard.jsx
│       ├── TestimonialCard.jsx
│       ├── SectionHeading.jsx
│       └── ScrollReveal.jsx
├── data/
│   ├── courses.js
│   ├── testimonials.js
│   ├── faqs.js
│   └── projects.js
├── lib/
│   ├── mongodb.js             # Connection singleton
│   └── models/
│       └── Admission.js       # Mongoose schema
└── .env.local
```

---

## 🌐 Deployment on Vercel

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Computer Zone website"
git remote add origin https://github.com/your-username/computer-zone.git
git push -u origin main
```

### Step 2 — Deploy to Vercel
1. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"** → Import your repository
3. In **Environment Variables**, add:
   - `MONGODB_URI` → your Atlas connection string
   - `NEXT_PUBLIC_SITE_URL` → your Vercel URL (e.g., `https://computerzone.vercel.app`)
4. Click **Deploy**

### Step 3 — Custom Domain (Optional)
In Vercel dashboard → Settings → Domains → Add `computerzone.in`
Then update your DNS records as instructed.

---

## 🔧 Customization Guide

### Update Contact Information
Edit `components/layout/Footer.jsx` and `components/sections/ContactSection.jsx`:
- Phone number: Replace `+91 98765 43210`
- Email: Replace `info@computerzone.in`
- Address: Replace with your actual address

### Update WhatsApp Number
Search for `wa.me/919876543210` across all files and replace with your number.

### Update Google Maps
In `ContactSection.jsx`, replace the `src` URL of the iframe with your institute's Google Maps embed URL.

### Update SEO Metadata
Edit `app/layout.js`:
- Site URL
- Google verification code
- Address in JSON-LD structured data

---

## 📊 API Reference

### POST `/api/admission`

Submit an admission enquiry.

**Request Body:**
```json
{
  "fullName": "Rahul Sharma",
  "mobile": "9876543210",
  "email": "rahul@example.com",
  "qualification": "12th",
  "course": "Full Stack Web Development",
  "message": "Optional message"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Your admission enquiry has been submitted successfully!",
  "data": {
    "id": "...",
    "name": "Rahul Sharma",
    "course": "Full Stack Web Development",
    "submittedAt": "2024-..."
  }
}
```

**Error Response (422):**
```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": {
    "mobile": "Please enter a valid 10-digit Indian mobile number"
  }
}
```

---

## ⚡ Performance Notes

- Server Components used for static sections (Courses, About, Footer)
- Client Components used only where interactivity is needed
- Particle canvas is canvas-based (GPU-accelerated, no DOM manipulation)
- Scroll reveal uses IntersectionObserver via Framer Motion's `useInView`
- MongoDB connection uses a global singleton to prevent connection pool exhaustion

---

## 🛡️ Security

- Server-side validation on all API inputs
- Duplicate submission check (same email + course within 24h)
- No client-side secrets exposed
- Rate limiting ready (IP logged in admission document)

---

## 📞 Support

For any issues, contact your developer or open an issue on GitHub.

---

**Made with ❤️ for Computer Zone students**
