<div align="center">

# 🌸 Miyako Enterprises

### Enterprise Software Development & Digital Solutions

**🌐 Live Site → [miyako-enterprises.com](https://miyako-enterprises.com)**

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.com)
[![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white)](https://resend.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

> 💼 **PREMIUM DIGITAL SOLUTIONS** — A high-performance corporate showcase with seamless contact integration, edge-deployed architecture, and enterprise-grade features for modern businesses.

</div>

---

## 📸 What Is Miyako Enterprises?

A **high-performance corporate landing page** built on Cloudflare Workers edge computing platform. Showcasing software development services with integrated contact functionality, modern design, and enterprise-level performance optimizations.

**Live Site → [miyako-enterprises.com](https://miyako-enterprises.com)**

---

## ✨ Feature Highlights

### 💼 Core Business Features
| Feature | Details |
|---|---|
| **Edge-Rendered** | Deployed on Cloudflare Workers for global low-latency access |
| **Contact Form** | Integrated email system via Resend API with form validation |
| **Modern Design** | Dark theme with purple-teal gradient, fully responsive layout |
| **SEO Optimized** | Full meta tags, Open Graph, Twitter Cards, JSON-LD structured data |
| **Mobile-First** | Fully responsive design optimized for all devices |
| **Fast Performance** | Single-file deployment with inline CSS, minimal dependencies |

### 🎯 Page Sections
| Section | Purpose |
|---|---|
| **Hero** | Main value proposition with trust badges (DTI/BIR registered, Philippines-based) |
| **Services** | Software Sales, Rental, and Custom Development offerings |
| **How It Works** | 4-step consultation process for clients |
| **Tech Stack** | Modern technologies (React, Next.js, TypeScript, Python, PostgreSQL, etc.) |
| **Pricing** | Custom pricing model for all solutions |
| **Testimonials** | Client success stories and case studies |
| **Contact Form** | Direct inquiry submission with email integration |
| **Footer** | Business registration info and detailed contact details |

### 🔐 Technical Excellence
| Feature | Details |
|---|---|
| **HTTPS Enforced** | Cloudflare security with verified domain |
| **Form Validation** | Client and server-side sanitization |
| **Email Integration** | Resend API for transactional emails |
| **JSON-LD Schema** | Organization, WebSite, and LocalBusiness structured data |
| **Performance** | Edge caching, inline CSS, optimized SVG assets |
| **SEO Ready** | Comprehensive meta tags and Open Graph support |

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| **Platform** | Cloudflare Workers (Edge Computing) |
| **Language** | JavaScript (Vanilla, no frameworks) |
| **Styling** | CSS3 (Gradients, Animations) |
| **Email** | Resend API (Transactional emails) |
| **Fonts** | Google Fonts (Inter typeface) |
| **Icons** | SVG Feather-style icons |
| **Deployment** | Wrangler CLI + Cloudflare Workers |
| **Configuration** | wrangler.toml |

---

## 🏗️ Architecture Highlights

- **Edge-first deployment** — Single-file Worker with inline assets for maximum performance
- **Zero-framework architecture** — Vanilla JavaScript for minimal dependencies and fast load times
- **Serverless design** — No server maintenance, automatic scaling, global CDN distribution
- **Resend API integration** — Reliable transactional email with branded templates
- **Lazy-loaded assets** — SVG icons and fonts optimized for performance
- **SEO-first HTML** — Structured data and meta tags baked into the HTML
- **Form security** — Validation and sanitization on both client and server
- **1158 lines of code** — Compact, maintainable, production-ready

---

## 📦 Project Scale

| Metric | Count |
|---|---|
| Single Worker File | **1,158 lines** |
| Page Sections | **8+** |
| Email Templates | **1 (HTML branded)** |
| API Routes | **2** |
| SVG Icons | **15+** |
| Deployment Size | **54.53 KiB** (12.96 KiB gzipped) |

---

## 💼 Project Structure

```
Miyako-Enterprises/
├── src/
│   └── index.js           # Main Worker file (1158 lines)
│                          # - HTML template
│                          # - Contact form handler
│                          # - Request router
│                          # - Favicon SVG
├── wrangler.toml          # Worker configuration
├── package.json           # npm scripts and dependencies
├── documents/
│   ├── certificate-of-employment.html
│   └── COMMISSION-AGREEMENT.md
├── README.md              # Development documentation
└── github.md              # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Cloudflare account

### Setup

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Preview deployment
npm run preview

# Deploy to production
npm run deploy
```

---

## 📋 Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Main landing page HTML |
| `/contact` | POST | Contact form submission handler |
| `/favicon.svg` | GET | SVG favicon (gradient M logo) |
| `/favicon.ico` | GET | Redirects to SVG favicon |

---

## 📧 Contact Form Integration

### Email Flow
1. User submits form on website
2. Worker validates and processes form data
3. Resend API sends formatted email
4. Email arrives at `danielchiu26@gmail.com`
5. Success/error response returned to user

### Configuration
- **From:** noreply@client.miyako-enterprises.com
- **To:** danielchiu26@gmail.com
- **Domain:** client.miyako-enterprises.com (verified)
- **Subject:** "New Contact Form Submission - [Name]"

---

## 🔒 Security & Privacy

- ✅ HTTPS enforced via Cloudflare
- ✅ Verified email domain (client.miyako-enterprises.com)
- ✅ No sensitive data stored in Worker
- ✅ API keys stored as encrypted Cloudflare secrets
- ✅ Form validation and sanitization
- ✅ CORS headers configured

---

## 📊 Performance Metrics

### Latest Deployment
- **Date:** March 11, 2026
- **Version ID:** ac5d4930-e764-4d1d-858d-86378ebba054
- **File Size:** 54.53 KiB total (12.96 KiB gzipped)
- **Deploy Time:** 5.46 seconds
- **Changes:** Converted all emojis to SVG icons

---

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

<div align="center">

**Live Site → [miyako-enterprises.com](https://miyako-enterprises.com)**

💼 **Enterprise Digital Solutions** — Built for performance and scale.

</div>

---

## Developer

**GitHub:** [@ldsalud](https://github.com/ldsalud)  
**Repo:** [Miyako Enterprises](https://github.com/ldsalud/miyako-enterprises)   
**Live Site:** https://miyako-enterprises.com  
**Repository:** Private

---

*A serverless corporate website built with Cloudflare Workers*
