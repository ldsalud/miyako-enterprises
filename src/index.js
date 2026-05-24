const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- ── Primary SEO ── -->
  <title>Miyako Enterprises | Software Sales, Rental &amp; Custom Web App Development Philippines</title>
  <meta name="description" content="Miyako Enterprises is a DTI &amp; BIR registered Philippine software company. We sell, rent, and build custom web applications for startups, SMEs, and enterprises. Get a free consultation today." />
  <meta name="keywords" content="software company Philippines, custom web application development, software for rent Philippines, buy software Philippines, web app developer Manila, SaaS Philippines, business software solutions, Miyako Enterprises" />
  <meta name="author" content="Miyako Enterprises" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="theme-color" content="#00f5ff" />
  <link rel="canonical" href="https://miyako-enterprises.com/" />

  <!-- ── Open Graph (Facebook, LinkedIn) ── -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://miyako-enterprises.com/" />
  <meta property="og:title" content="Miyako Enterprises | Software Sales, Rental &amp; Custom Web App Development" />
  <meta property="og:description" content="DTI &amp; BIR registered Philippine software company. We sell, rent, and build custom web applications tailored for your business. Free consultation available." />
  <meta property="og:image" content="https://miyako-enterprises.com/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Miyako Enterprises – Software &amp; Web Application Solutions" />
  <meta property="og:site_name" content="Miyako Enterprises" />
  <meta property="og:locale" content="en_PH" />

  <!-- ── Twitter / X Card ── -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://miyako-enterprises.com/" />
  <meta name="twitter:title" content="Miyako Enterprises | Software Sales, Rental &amp; Custom Web Apps" />
  <meta name="twitter:description" content="DTI &amp; BIR registered Philippine software company. Buy, rent, or have us build your custom web application. Free consultation." />
  <meta name="twitter:image" content="https://miyako-enterprises.com/og-image.png" />

  <!-- ── Geo / Local SEO ── -->
  <meta name="geo.region" content="PH-00" />
  <meta name="geo.placename" content="Manila, Metro Manila, Philippines" />
  <meta name="geo.position" content="14.5547;121.0244" />
  <meta name="ICBM" content="14.5547, 121.0244" />

  <!-- ── Structured Data: Organization ── -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Miyako Enterprises",
    "url": "https://miyako-enterprises.com",
    "logo": "https://miyako-enterprises.com/og-image.png",
    "description": "DTI and BIR registered Philippine software company offering custom web application development, software sales, and SaaS rental services.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manila",
      "addressRegion": "Metro Manila",
      "postalCode": "1013",
      "addressCountry": "PH"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+63-921-763-1194",
      "email": "owner@miyako-enterprises.com",
      "contactType": "customer service",
      "availableLanguage": ["English", "Filipino"]
    },
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Sales",
            "description": "Purchase fully-built, ready-to-deploy web applications with lifetime license."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Rental (SaaS)",
            "description": "Access enterprise-grade web applications on a flexible monthly or yearly subscription."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web App Development",
            "description": "Full-stack custom web application development tailored to your exact business needs."
          }
        }
      ]
    }
  }
  </script>

  <!-- ── Structured Data: WebSite (Sitelinks searchbox) ── -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Miyako Enterprises",
    "url": "https://miyako-enterprises.com"
  }
  </script>

  <!-- ── Structured Data: LocalBusiness ── -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Miyako Enterprises",
    "image": "https://miyako-enterprises.com/og-image.png",
    "url": "https://miyako-enterprises.com",
    "telephone": "+63-921-763-1194",
    "email": "owner@miyako-enterprises.com",
    "priceRange": "Custom",
    "currenciesAccepted": "PHP, USD",
    "paymentAccepted": "Cash, Bank Transfer, GCash",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manila",
      "addressRegion": "Metro Manila",
      "postalCode": "1013",
      "addressCountry": "PH"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "hasMap": "https://maps.google.com/?q=Manila+Metro+Manila+1013+Philippines"
  }
  </script>

  <!-- ── Favicon ── -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="alternate icon" href="/favicon.ico" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --primary:   #00f5ff;
      --primary-d: #00c8d4;
      --accent:    #0f3d26;
      --dark:      #0b0c10;
      --dark2:     #12141a;
      --dark3:     #1c1f2a;
      --border:    rgba(255,255,255,.08);
      --text:      #e2e8f0;
      --muted:     #8892a4;
      --white:     #ffffff;
      --rad:       14px;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--dark);
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* ── SCROLLBAR ── */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--dark); }
    ::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 99px; }

    /* ── NAVBAR ── */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 5%;
      height: 68px;
      background: rgba(11,12,16,.85);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid var(--border);
    }
    .nav-logo {
      display: flex; align-items: center; gap: 10px;
      font-size: 1.2rem; font-weight: 800; color: var(--white);
      text-decoration: none;
    }
    .nav-logo .logo-icon {
      width: 36px; height: 36px;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; font-weight: 900; color: #fff;
    }
    .nav-links { display: flex; gap: 32px; list-style: none; }
    .nav-links a {
      color: var(--muted); font-size: .9rem; font-weight: 500;
      text-decoration: none; transition: color .2s;
    }
    .nav-links a:hover { color: var(--white); }
    .nav-cta {
      background: #0f3d26;
      color: #fff !important;
      padding: 8px 20px;
      border-radius: 8px;
      font-weight: 600 !important;
      font-size: .875rem !important;
      transition: background .2s, transform .15s !important;
    }
    .nav-cta:hover { background: #0a2918 !important; transform: translateY(-1px); }

    /* ── HERO ── */
    .hero {
      min-height: 100vh;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center; text-align: center;
      padding: 100px 5% 80px;
      position: relative; overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 80% 60% at 50% 20%, rgba(0,245,255,.25) 0%, transparent 70%);
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(0,128,128,.18);
      border: 1px solid rgba(0,128,128,.35);
      color: #008b8b; font-size: .8rem; font-weight: 600;
      padding: 6px 16px; border-radius: 99px; margin-bottom: 28px;
      text-transform: uppercase; letter-spacing: .08em;
    }
    .hero-badge span { width: 6px; height: 6px; background: #ffffff; border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }
    .hero h1 {
      font-size: clamp(2.4rem, 6vw, 5rem);
      font-weight: 900; line-height: 1.1;
      color: var(--white); margin-bottom: 24px; position: relative;
    }
    .hero h1 .highlight {
      background: linear-gradient(90deg, var(--primary), var(--accent));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .hero p {
      font-size: clamp(1rem, 2.2vw, 1.25rem);
      color: var(--muted); max-width: 640px; margin: 0 auto 40px;
    }
    .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
    .btn-primary {
      background: #0f3d26;
      color: #fff; padding: 14px 32px; border-radius: var(--rad);
      font-size: 1rem; font-weight: 700; text-decoration: none;
      transition: transform .2s, box-shadow .2s;
      box-shadow: 0 4px 24px rgba(15,61,38,.4);
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(15,61,38,.55); }
    .btn-secondary {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text); padding: 14px 32px; border-radius: var(--rad);
      font-size: 1rem; font-weight: 600; text-decoration: none;
      transition: background .2s, border-color .2s;
    }
    .btn-secondary:hover { background: rgba(255,255,255,.05); border-color: rgba(255,255,255,.2); }
    .hero-stats {
      display: flex; gap: 48px; flex-wrap: wrap; justify-content: center;
      margin-top: 72px; position: relative;
    }
    .stat { text-align: center; }
    .stat .num { font-size: 2rem; font-weight: 900; color: var(--white); }
    .stat .num span { color: var(--accent); }
    .stat .label { font-size: .8rem; color: var(--muted); margin-top: 4px; text-transform: uppercase; letter-spacing: .06em; }

    /* ── SECTION SHARED ── */
    section { padding: 100px 5%; }
    .section-label {
      font-size: .75rem; font-weight: 700; color: var(--accent);
      text-transform: uppercase; letter-spacing: .12em; margin-bottom: 12px;
    }
    .section-title {
      font-size: clamp(1.8rem, 3.5vw, 2.8rem);
      font-weight: 800; color: var(--white); line-height: 1.2; margin-bottom: 16px;
    }
    .section-sub { font-size: 1.05rem; color: var(--muted); max-width: 560px; }
    .center { text-align: center; }
    .center .section-sub { margin: 0 auto; }

    /* ── SERVICES ── */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px; margin-top: 60px;
    }
    .service-card {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 36px 30px;
      transition: transform .25s, border-color .25s, box-shadow .25s;
      position: relative; overflow: hidden;
    }
    .service-card::after {
      content: '';
      position: absolute; top: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, var(--primary), var(--accent));
      opacity: 0; transition: opacity .25s;
    }
    .service-card:hover { transform: translateY(-6px); border-color: rgba(0,245,255,.35); box-shadow: 0 12px 40px rgba(0,0,0,.4); }
    .service-card:hover::after { opacity: 1; }
    .svc-icon {
      width: 56px; height: 56px; border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.5rem; margin-bottom: 20px;
    }
    .svc-icon.sell  { background: rgba(15,61,38,.15); }
    .svc-icon.rent  { background: rgba(0,212,170,.12); }
    .svc-icon.build { background: rgba(255,180,0,.1); }
    .service-card h3 { font-size: 1.2rem; font-weight: 700; color: var(--white); margin-bottom: 10px; }
    .service-card p  { font-size: .93rem; color: var(--muted); line-height: 1.7; }
    .svc-features { list-style: none; margin-top: 20px; display: flex; flex-direction: column; gap: 8px; }
    .svc-features li {
      display: flex; align-items: center; gap: 10px;
      font-size: .875rem; color: var(--text);
    }
    .svc-features li::before {
      content: '✓'; color: var(--accent); font-weight: 700; font-size: .85rem;
      flex-shrink: 0;
    }

    /* ── HOW IT WORKS ── */
    .how-wrap {
      display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
      align-items: center; margin-top: 60px;
    }
    .steps { display: flex; flex-direction: column; gap: 32px; }
    .step { display: flex; gap: 20px; }
    .step-num {
      width: 44px; height: 44px; flex-shrink: 0;
      background: #0f3d26;
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      font-size: .9rem; font-weight: 800; color: #fff;
    }
    .step-body h4 { font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: 6px; }
    .step-body p  { font-size: .9rem; color: var(--muted); line-height: 1.65; }
    .visual-box {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 24px; padding: 40px;
      display: flex; flex-direction: column; gap: 16px;
    }
    .mock-bar {
      height: 12px; border-radius: 99px;
      background: var(--dark3); overflow: hidden;
    }
    .mock-bar .fill {
      height: 100%; border-radius: 99px;
      background: linear-gradient(90deg, var(--primary), var(--accent));
    }
    .mock-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 8px; }
    .mock-card {
      background: var(--dark3); border-radius: 12px; padding: 16px;
      display: flex; flex-direction: column; gap: 8px;
    }
    .mock-card .mc-line { height: 8px; border-radius: 99px; background: rgba(255,255,255,.07); }
    .mock-card .mc-line.accent { width: 60%; background: rgba(0,245,255,.4); }
    .mock-label { font-size: .7rem; color: var(--muted); text-transform: uppercase; letter-spacing: .08em; }

    /* ── TECH STACK ── */
    .tech-section { background: var(--dark2); }
    .tech-grid {
      display: flex; flex-wrap: wrap; gap: 12px;
      margin-top: 48px; justify-content: center;
    }
    .tech-pill {
      background: var(--dark3); border: 1px solid var(--border);
      color: var(--text); font-size: .85rem; font-weight: 500;
      padding: 8px 18px; border-radius: 99px;
      transition: border-color .2s, color .2s;
    }
    .tech-pill:hover { border-color: var(--primary); color: var(--white); }

    /* ── PRICING ── */
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px; margin-top: 60px; max-width: 1060px; margin-inline: auto;
    }
    .price-card {
      background: var(--dark2);
      border: 1px solid var(--border);
      border-radius: 20px; padding: 36px 28px;
      transition: transform .25s;
      position: relative;
    }
    .price-card:hover { transform: translateY(-4px); }
    .price-card.featured {
      background: linear-gradient(160deg, rgba(15,61,38,.18) 0%, rgba(0,245,255,.08) 100%);
      border-color: rgba(15,61,38,.5);
    }
    .featured-badge {
      position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
      background: linear-gradient(90deg, var(--primary), var(--accent));
      color: #fff; font-size: .7rem; font-weight: 700; padding: 4px 16px;
      border-radius: 99px; text-transform: uppercase; letter-spacing: .08em;
      white-space: nowrap;
    }
    .plan-name { font-size: .8rem; font-weight: 700; color: var(--accent); text-transform: uppercase; letter-spacing: .1em; margin-bottom: 12px; }
    .plan-price { font-size: 2.6rem; font-weight: 900; color: var(--white); line-height: 1; }
    .plan-price sup { font-size: 1.1rem; vertical-align: top; margin-top: 10px; color: var(--muted); }
    .plan-price sub { font-size: .85rem; color: var(--muted); font-weight: 400; }
    .plan-desc { font-size: .875rem; color: var(--muted); margin: 12px 0 24px; }
    .plan-features { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
    .plan-features li { display: flex; align-items: center; gap: 10px; font-size: .875rem; color: var(--text); }
    .plan-features li .ok { color: var(--accent); font-weight: 700; }
    .plan-features li .no { color: #4a5568; }
    .plan-btn {
      display: block; text-align: center;
      padding: 12px; border-radius: 10px; font-weight: 700; font-size: .9rem;
      text-decoration: none; transition: all .2s;
    }
    .plan-btn.outline {
      border: 1px solid var(--border); color: var(--text);
    }
    .plan-btn.outline:hover { border-color: var(--primary); color: var(--white); }
    .plan-btn.filled {
      background: #0f3d26;
      color: #fff; box-shadow: 0 4px 20px rgba(15,61,38,.4);
    }
    .plan-btn.filled:hover { box-shadow: 0 6px 28px rgba(15,61,38,.6); transform: translateY(-1px); }

    /* ── TESTIMONIALS ── */
    .testimonials-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px; margin-top: 60px;
    }
    .testi-card {
      background: var(--dark2); border: 1px solid var(--border);
      border-radius: 16px; padding: 28px;
    }
    .stars { color: #f59e0b; font-size: .9rem; margin-bottom: 14px; }
    .testi-card p { font-size: .9rem; color: var(--text); line-height: 1.7; margin-bottom: 20px; font-style: italic; }
    .testi-author { display: flex; align-items: center; gap: 12px; }
    .avatar {
      width: 40px; height: 40px; border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; color: #fff; font-size: .85rem; flex-shrink: 0;
    }
    .author-name { font-weight: 600; color: var(--white); font-size: .9rem; }
    .author-role { font-size: .78rem; color: var(--muted); }

    /* ── CTA BANNER ── */
    .cta-banner {
      margin: 80px 5% 100px;
      background: linear-gradient(135deg, rgba(15,61,38,.25) 0%, rgba(0,245,255,.1) 100%);
      border: 1px solid rgba(15,61,38,.3);
      border-radius: 24px; padding: 120px 48px 72px; text-align: center;
      position: relative; overflow: hidden;
    }
    .cta-banner::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,245,255,.15) 0%, transparent 70%);
    }
    .cta-banner h2 { font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: var(--white); margin-bottom: 14px; position: relative; }
    .cta-banner p  { font-size: 1.05rem; color: var(--muted); margin-bottom: 36px; position: relative; }
    .cta-banner .hero-btns { position: relative; }

    /* ── CONTACT ── */
    .contact-wrap {
      display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-top: 60px;
    }
    .contact-info h3 { font-size: 1.4rem; font-weight: 700; color: var(--white); margin-bottom: 16px; }
    .contact-info p { font-size: .95rem; color: var(--muted); line-height: 1.7; margin-bottom: 32px; }
    .contact-item { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
    .ci-icon {
      width: 42px; height: 42px; background: rgba(15,61,38,.15); border-radius: 10px;
      display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;
    }
    .ci-text { font-size: .9rem; color: var(--text); }
    .ci-text span { color: var(--muted); font-size: .78rem; display: block; }
    form { display: flex; flex-direction: column; gap: 16px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    input, textarea, select {
      background: var(--dark3); border: 1px solid var(--border);
      color: var(--text); font-family: inherit; font-size: .9rem;
      padding: 12px 16px; border-radius: 10px; outline: none;
      transition: border-color .2s;
    }
    input:focus, textarea:focus, select:focus { border-color: var(--primary); }
    textarea { resize: vertical; min-height: 130px; }
    select option { background: var(--dark3); }
    .submit-btn {
      background: #0f3d26;
      color: #fff; border: none; cursor: pointer;
      padding: 14px 28px; border-radius: 10px;
      font-size: 1rem; font-weight: 700; font-family: inherit;
      transition: transform .2s, box-shadow .2s;
      box-shadow: 0 4px 20px rgba(15,61,38,.4);
    }
    .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(15,61,38,.55); }

    /* ── FOOTER ── */
    footer {
      background: var(--dark2);
      border-top: 1px solid var(--border);
      padding: 60px 5% 32px;
    }
    .footer-grid {
      display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 48px;
    }
    .footer-brand p { font-size: .875rem; color: var(--muted); line-height: 1.7; margin: 14px 0 24px; }
    .social-links { display: flex; gap: 12px; }
    .social-link {
      width: 36px; height: 36px; background: var(--dark3); border: 1px solid var(--border);
      border-radius: 8px; display: flex; align-items: center; justify-content: center;
      text-decoration: none; color: var(--muted); font-size: .85rem;
      transition: background .2s, color .2s, border-color .2s;
    }
    .social-link:hover { background: var(--primary); color: #fff; border-color: var(--primary); }
    .footer-col h4 { font-size: .9rem; font-weight: 700; color: var(--white); margin-bottom: 16px; }
    .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
    .footer-col ul li a { text-decoration: none; color: var(--muted); font-size: .875rem; transition: color .2s; }
    .footer-col ul li a:hover { color: var(--white); }
    .footer-bottom {
      display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
      border-top: 1px solid var(--border); padding-top: 28px;
      font-size: .8rem; color: var(--muted);
    }
    .footer-bottom a { color: var(--muted); text-decoration: none; }
    .footer-bottom a:hover { color: var(--white); }

    /* ── MODALS ── */
    .modal-overlay {
      position: fixed; inset: 0; z-index: 10000;
      background: rgba(0,0,0,.85); backdrop-filter: blur(4px);
      display: none; align-items: center; justify-content: center;
      padding: 20px; animation: fadeIn .2s;
    }
    .modal-overlay.active { display: flex; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .modal-content {
      background: var(--dark2); border: 1px solid var(--border);
      border-radius: 16px; max-width: 700px; width: 100%;
      max-height: 85vh; overflow-y: auto; padding: 40px;
      position: relative; animation: slideUp .3s;
    }
    @keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    .modal-close {
      position: absolute; top: 16px; right: 16px;
      background: var(--dark3); border: 1px solid var(--border);
      color: var(--muted); width: 36px; height: 36px;
      border-radius: 8px; font-size: 1.5rem; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: background .2s, color .2s;
    }
    .modal-close:hover { background: var(--primary); color: #fff; border-color: var(--primary); }
    #modal-body h2 {
      font-size: 2rem; font-weight: 800; color: var(--white);
      margin-bottom: 12px; line-height: 1.2;
    }
    #modal-body h3 {
      font-size: 1.3rem; font-weight: 700; color: var(--white);
      margin: 28px 0 12px; line-height: 1.3;
    }
    #modal-body p {
      color: var(--muted); line-height: 1.8; margin-bottom: 16px;
      font-size: .95rem;
    }
    #modal-body ul, #modal-body ol {
      color: var(--muted); line-height: 1.8; margin-bottom: 16px;
      padding-left: 24px;
    }
    #modal-body li { margin-bottom: 8px; }
    #modal-body strong { color: var(--white); font-weight: 600; }
    #modal-body a { color: var(--accent); text-decoration: none; }
    #modal-body a:hover { text-decoration: underline; }
    .modal-content::-webkit-scrollbar { width: 8px; }
    .modal-content::-webkit-scrollbar-track { background: var(--dark3); }
    .modal-content::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
    .modal-content::-webkit-scrollbar-thumb:hover { background: var(--primary); }

    /* ── RESPONSIVE ── */
    @media (max-width: 900px) {
      .how-wrap, .contact-wrap, .footer-grid { grid-template-columns: 1fr; gap: 40px; }
      nav .nav-links { display: none; }
    }
    @media (max-width: 600px) {
      section { padding: 70px 5%; }
      .form-row { grid-template-columns: 1fr; }
      .hero-stats { gap: 28px; }
      .cta-banner { padding: 48px 24px; }
    }
  </style>
</head>
<body>

<!-- ───────────── NAVBAR ───────────── -->
<nav>
  <a href="#" class="nav-logo">
    <div class="logo-icon">M</div>
    Miyako Enterprises
  </a>
  <ul class="nav-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#how">How It Works</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#contact" class="nav-cta">Get Started</a></li>
  </ul>
</nav>

<!-- ───────────── HERO ───────────── -->
<section class="hero" id="home">
  <div class="hero-badge">
    <span></span> Trusted Software Partner Since 2020
  </div>
  <h1>
    Build. Sell. Rent.<br />
    <span class="highlight">Software That Works.</span>
  </h1>
  <p>
    Miyako Enterprises delivers powerful custom web applications, ready-made software solutions,
    and flexible rental plans — tailored for startups, SMEs, and enterprises.
  </p>
  <div class="hero-btns">
    <a href="#services" class="btn-primary">Explore Services</a>
    <a href="#contact"  class="btn-secondary">Talk to Us →</a>
  </div>
  <div class="hero-stats">
    <div class="stat"><div class="num">120<span>+</span></div><div class="label">Projects Delivered</div></div>
    <div class="stat"><div class="num">98<span>%</span></div><div class="label">Client Satisfaction</div></div>
    <div class="stat"><div class="num">40<span>+</span></div><div class="label">Enterprise Clients</div></div>
    <div class="stat"><div class="num">6<span>+</span></div><div class="label">Years Experience</div></div>
  </div>

  <!-- Trust badges -->
  <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:36px;position:relative;">
    <div style="display:flex;align-items:center;gap:9px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:99px;padding:8px 20px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f3d26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22h18M6 18V10M10 18V10M14 18V10M18 18V10M2 10l10-7 10 7"/></svg>
      <span style="font-size:.8rem;font-weight:600;color:var(--text);">DTI Registered</span>
    </div>
    <div style="display:flex;align-items:center;gap:9px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:99px;padding:8px 20px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f3d26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
      <span style="font-size:.8rem;font-weight:600;color:var(--text);">BIR Registered</span>
    </div>
    <div style="display:flex;align-items:center;gap:9px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:99px;padding:8px 20px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f3d26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      <span style="font-size:.8rem;font-weight:600;color:var(--text);">Philippines-Based</span>
    </div>
  </div>
</section>

<!-- ───────────── SERVICES ───────────── -->
<section id="services">
  <div class="center">
    <div class="section-label">What We Offer</div>
    <h2 class="section-title">Three Ways We Serve You</h2>
    <p class="section-sub">Whether you need a ready-to-go product, a flexible subscription, or a fully custom solution — we've got you covered.</p>
  </div>
  <div class="services-grid">

    <div class="service-card">
      <div class="svc-icon sell"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
      <h3>Software Sales</h3>
      <p>Purchase fully-built, ready-to-deploy web applications and software systems. Own the product outright with lifetime license.</p>
      <ul class="svc-features">
        <li>One-time payment, lifetime access</li>
        <li>Full source code included</li>
        <li>Free deployment assistance</li>
        <li>6-month post-sale support</li>
        <li>Customizable branding</li>
      </ul>
    </div>

    <div class="service-card">
      <div class="svc-icon rent"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></div>
      <h3>Software Rental (SaaS)</h3>
      <p>Access enterprise-grade web applications on a flexible monthly or yearly subscription. No upfront cost, cancel anytime.</p>
      <ul class="svc-features">
        <li>Low monthly subscription cost</li>
        <li>Cloud-hosted & maintained</li>
        <li>Automatic updates & patches</li>
        <li>24/7 uptime monitoring</li>
        <li>Scale as you grow</li>
      </ul>
    </div>

    <div class="service-card">
      <div class="svc-icon build"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v6m0 12v-6M2 12h6m12 0h-6m9.1 9.1l-4.2-4.2M5.1 5.1l4.2 4.2m9.8 0l-4.2 4.2M5.1 18.9l4.2-4.2"/></svg></div>
      <h3>Custom Web App Development</h3>
      <p>Need something unique? Our team designs and builds web applications from scratch, tailored to your exact business needs.</p>
      <ul class="svc-features">
        <li>Full-stack development</li>
        <li>UI/UX design included</li>
        <li>Agile project management</li>
        <li>Post-launch maintenance</li>
        <li>API integrations & more</li>
      </ul>
    </div>

  </div>
</section>

<!-- ───────────── HOW IT WORKS ───────────── -->
<section id="how" style="background: var(--dark2);">
  <div class="section-label">Process</div>
  <h2 class="section-title">How It Works</h2>
  <p class="section-sub">From your first message to a live running product — a streamlined process that saves you time and money.</p>
  <div class="how-wrap">
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-body">
          <h4>Discovery &amp; Consultation</h4>
          <p>We start with a free consultation to understand your goals, users, and requirements — whether buying, renting, or building.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-body">
          <h4>Proposal &amp; Planning</h4>
          <p>We send a detailed proposal with scope, timeline, pricing, and tech stack. No hidden fees, no surprises.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-body">
          <h4>Build &amp; Review</h4>
          <p>Our developers build iteratively with regular demos so you can provide feedback at every stage.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-body">
          <h4>Launch &amp; Support</h4>
          <p>We deploy to production, provide documentation, training, and ongoing support to ensure your success.</p>
        </div>
      </div>
    </div>

    <div class="visual-box">
      <div class="mock-label">Project Dashboard</div>
      <div class="mock-bar"><div class="fill" style="width:85%"></div></div>
      <div class="mock-label" style="margin-top:4px">Backend API — 85% complete</div>
      <div class="mock-bar"><div class="fill" style="width:62%"></div></div>
      <div class="mock-label" style="margin-top:4px">Frontend UI — 62% complete</div>
      <div class="mock-bar"><div class="fill" style="width:40%"></div></div>
      <div class="mock-label" style="margin-top:4px">Testing — 40% complete</div>
      <div class="mock-cards">
        <div class="mock-card">
          <div class="mc-line accent"></div>
          <div class="mc-line"></div>
          <div class="mc-line" style="width:40%"></div>
        </div>
        <div class="mock-card">
          <div class="mc-line accent" style="width:50%"></div>
          <div class="mc-line"></div>
          <div class="mc-line" style="width:70%"></div>
        </div>
        <div class="mock-card">
          <div class="mc-line accent" style="width:80%"></div>
          <div class="mc-line"></div>
          <div class="mc-line" style="width:30%"></div>
        </div>
        <div class="mock-card">
          <div class="mc-line accent" style="width:45%"></div>
          <div class="mc-line"></div>
          <div class="mc-line" style="width:60%"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ───────────── TECH STACK ───────────── -->
<section class="tech-section" style="text-align:center;">
  <div class="section-label">Technology</div>
  <h2 class="section-title">Our Tech Stack</h2>
  <p class="section-sub" style="margin:0 auto">We use industry-leading technologies to build fast, scalable, and secure web applications.</p>
  <div class="tech-grid">
    <span class="tech-pill">React</span>
    <span class="tech-pill">Next.js</span>
    <span class="tech-pill">TypeScript</span>
    <span class="tech-pill">Python</span>
    <span class="tech-pill">Node.js</span>
    <span class="tech-pill">PostgreSQL</span>
    <span class="tech-pill">Redis</span>
    <span class="tech-pill">Docker</span>
    <span class="tech-pill">AWS / GCP</span>
    <span class="tech-pill">Cloudflare</span>
    <span class="tech-pill">Tailwind CSS</span>
    <span class="tech-pill">React Native</span>
    <span class="tech-pill">Supabase</span>
    <span class="tech-pill">Stripe</span>
    <span class="tech-pill">GraphQL</span>
    <span class="tech-pill">Prisma</span>
  </div>
</section>

<!-- ───────────── PRICING ───────────── -->
<section id="pricing">
  <div class="center">
    <div class="section-label">Pricing</div>
    <h2 class="section-title">Custom Pricing for Every Project</h2>
    <p class="section-sub">Every business is unique — we don't do one-size-fits-all pricing. Let's have a conversation first so we can give you a fair and accurate estimate.</p>
  </div>

  <div style="max-width:780px; margin: 60px auto 0; display:flex; flex-direction:column; gap:32px;">

    <!-- Big custom pricing card -->
    <div class="price-card featured" style="text-align:center; padding: 56px 48px;">
      <div class="featured-badge">All Services</div>
      <div style="font-size:4rem; margin: 24px 0 8px;"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
      <div class="plan-name" style="font-size:1rem;">Custom Pricing</div>
      <h3 style="font-size:2rem; font-weight:900; color:var(--white); margin:12px 0 16px;">Let's Talk First</h3>
      <p style="color:var(--muted); font-size:1rem; line-height:1.8; max-width:520px; margin:0 auto 36px;">
        Whether you want to <strong style="color:var(--text)">buy</strong>, <strong style="color:var(--text)">rent</strong>, or have us <strong style="color:var(--text)">build</strong> something for you —
        pricing depends on your specific requirements, scope, and timeline.
        We'll discuss your needs and provide a detailed, transparent quote with no hidden fees.
      </p>
      <ul class="plan-features" style="max-width:440px; margin:0 auto 36px; text-align:left;">
        <li><span class="ok">✓</span> Free initial consultation &amp; discovery call</li>
        <li><span class="ok">✓</span> Detailed written proposal &amp; scope of work</li>
        <li><span class="ok">✓</span> Transparent breakdown — no hidden charges</li>
        <li><span class="ok">✓</span> Flexible payment terms available</li>
        <li><span class="ok">✓</span> Quote tailored to your exact requirements</li>
      </ul>
      <a href="#contact" class="plan-btn filled" style="max-width:280px; margin:0 auto; display:block;">Book a Free Consultation →</a>
    </div>

    <!-- 3 mini info boxes -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px;">
      <div style="background:var(--dark2); border:1px solid var(--border); border-radius:16px; padding:24px; text-align:center;">
        <div style="font-size:1.8rem; margin-bottom:10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></div>
        <div style="font-weight:700; color:var(--white); margin-bottom:6px;">Software Sales</div>
        <div style="font-size:.85rem; color:var(--muted);">One-time purchase, full ownership. Price based on product complexity.</div>
      </div>
      <div style="background:var(--dark2); border:1px solid var(--border); border-radius:16px; padding:24px; text-align:center;">
        <div style="font-size:1.8rem; margin-bottom:10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></div>
        <div style="font-weight:700; color:var(--white); margin-bottom:6px;">SaaS Rental</div>
        <div style="font-size:.85rem; color:var(--muted);">Monthly or yearly subscription. Rate depends on features &amp; users needed.</div>
      </div>
      <div style="background:var(--dark2); border:1px solid var(--border); border-radius:16px; padding:24px; text-align:center;">
        <div style="font-size:1.8rem; margin-bottom:10px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v6m0 12v-6M2 12h6m12 0h-6m9.1 9.1l-4.2-4.2M5.1 5.1l4.2 4.2m9.8 0l-4.2 4.2M5.1 18.9l4.2-4.2"/></svg></div>
        <div style="font-weight:700; color:var(--white); margin-bottom:6px;">Custom Dev</div>
        <div style="font-size:.85rem; color:var(--muted);">Project-based pricing. Estimated after scoping your requirements together.</div>
      </div>
    </div>

  </div>
</section>

<!-- ───────────── TESTIMONIALS ───────────── -->
<section style="background: var(--dark2);">
  <div class="center">
    <div class="section-label">Testimonials</div>
    <h2 class="section-title">What Our Clients Say</h2>
  </div>
  <div class="testimonials-grid">
    <div class="testi-card">
      <div class="stars">★★★★★</div>
      <p>"Miyako Enterprises built our inventory management system in just 6 weeks. The quality was outstanding and the team was incredibly responsive throughout the entire project."</p>
      <div class="testi-author">
        <div class="avatar">RG</div>
        <div>
          <div class="author-name">Ramon Garcia</div>
          <div class="author-role">CEO, RetailPlus Inc.</div>
        </div>
      </div>
    </div>
    <div class="testi-card">
      <div class="stars">★★★★★</div>
      <p>"We rented their HR platform and it transformed how we manage our 200+ employees. The subscription model was perfect for our budget — we didn't need to buy expensive software upfront."</p>
      <div class="testi-author">
        <div class="avatar">SL</div>
        <div>
          <div class="author-name">Sofia Lim</div>
          <div class="author-role">HR Director, Nexora Corp.</div>
        </div>
      </div>
    </div>
    <div class="testi-card">
      <div class="stars">★★★★★</div>
      <p>"The e-commerce platform we purchased from Miyako was top-notch. We've processed over ₱5M in sales through it. Best investment we've made for our business."</p>
      <div class="testi-author">
        <div class="avatar">JM</div>
        <div>
          <div class="author-name">Jose Mendoza</div>
          <div class="author-role">Founder, ShopNation PH</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ───────────── CTA BANNER ───────────── -->
<div class="cta-banner">
  <h2>Ready to Power Your Business with Software?</h2>
  <p>Join 40+ companies that trust Miyako Enterprises for their digital solutions.</p>
  <div class="hero-btns">
    <a href="#contact" class="btn-primary">Start Your Project</a>
    <a href="#pricing" class="btn-secondary">How We Price →</a>
  </div>
</div>

<!-- ───────────── CONTACT ───────────── -->
<section id="contact">
  <div class="section-label">Contact Us</div>
  <h2 class="section-title">Let's Build Something Together</h2>
  <div class="contact-wrap">
    <div class="contact-info">
      <h3>Get in Touch</h3>
      <p>Have a project in mind, want to rent a solution, or just want to know more? Send us a message and our team will respond within 24 hours.</p>
      <div class="contact-item">
        <div class="ci-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div>
        <div class="ci-text">owner@miyako-enterprises.com<span>Email Us</span></div>
      </div>
      <div class="contact-item">
        <div class="ci-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
        <div class="ci-text">+63 921 763 1194<span>Call or WhatsApp</span></div>
      </div>
      <div class="contact-item">
        <div class="ci-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <div class="ci-text">Manila, Metro Manila 1013, Philippines<span>Our Office</span></div>
      </div>
      <div class="contact-item">
        <div class="ci-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <div class="ci-text">Mon – Fri, 9:00 AM – 6:00 PM PHT<span>Business Hours</span></div>
      </div>
    </div>

    <form onsubmit="handleSubmit(event)">
      <div class="form-row">
        <input type="text"  name="name"    placeholder="Your Name"    required />
        <input type="email" name="email"   placeholder="Email Address" required />
      </div>
      <input type="text" name="company" placeholder="Company / Organization (optional)" />
      <select name="service">
        <option value="" disabled selected>What are you interested in?</option>
        <option value="buy">Buy Software (One-Time)</option>
        <option value="rent">Rent Software (Subscription)</option>
        <option value="build">Custom Web App Development</option>
        <option value="consult">General Consultation</option>
      </select>
      <textarea name="message" placeholder="Tell us about your project or inquiry…" required></textarea>
      <button type="submit" class="submit-btn">Send Message →</button>
      <div id="form-msg" style="display:none; font-size:.875rem; color: var(--accent); margin-top:8px;"></div>
    </form>
  </div>
</section>

<!-- ───────────── FOOTER ───────────── -->
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="#" class="nav-logo" style="font-size:1rem;">
        <div class="logo-icon" style="width:32px;height:32px;">M</div>
        Miyako Enterprises
      </a>
      <p>Building digital products that drive real business results. Your trusted software partner from the Philippines to the world.</p>
      <div class="social-links">
        <a href="https://github.com/ldsalud/miyako-enterprises" target="_blank" rel="noopener noreferrer" class="social-link" title="View GitHub Page">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="#services">Software Sales</a></li>
        <li><a href="#services">SaaS Rentals</a></li>
        <li><a href="#services">Custom Development</a></li>
        <li><a href="#services">API Integration</a></li>
        <li><a href="#services">UI/UX Design</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="javascript:void(0)" data-modal="about">About Us</a></li>
        <li><a href="javascript:void(0)" data-modal="team">Our Team</a></li>
        <li><a href="javascript:void(0)" data-modal="portfolio">Portfolio</a></li>
        <li><a href="javascript:void(0)" data-modal="blog">Blog</a></li>
        <li><a href="#contact">Careers</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Legal</h4>
      <ul>
        <li><a href="javascript:void(0)" data-modal="privacy">Privacy Policy</a></li>
        <li><a href="javascript:void(0)" data-modal="terms">Terms of Service</a></li>
        <li><a href="javascript:void(0)" data-modal="cookies">Cookie Policy</a></li>
        <li><a href="javascript:void(0)" data-modal="sla">SLA</a></li>
        <li><a href="javascript:void(0)" data-modal="refund">Refund Policy</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Miyako Enterprises. All rights reserved.</span>
    <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 22h18M6 18V10M10 18V10M14 18V10M18 18V10M2 10l10-7 10 7"/></svg> Registered Business</span>
  </div>
</footer>

<!-- Modals -->
<div id="modal-overlay" class="modal-overlay">
  <div class="modal-content">
    <button class="modal-close">&times;</button>
    <div id="modal-body"></div>
  </div>
</div>

<script>
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
  // Modal system
  const modalData = {};
  modalData.about = {title:'About Miyako Enterprises',content:'<p>Miyako Enterprises is a DTI and BIR registered software company based in Manila, Metro Manila, Philippines. Founded in 2020, we specialize in providing comprehensive software solutions to businesses of all sizes.</p><h3>Our Mission</h3><p>To empower businesses with cutting-edge software solutions that drive growth, efficiency, and digital transformation.</p><h3>What We Do</h3><ul><li><strong>Software Sales:</strong> Licensed software solutions</li><li><strong>SaaS Rentals:</strong> Subscription-based access</li><li><strong>Custom Development:</strong> Tailored web applications</li></ul><h3>Why Choose Us</h3><ul><li>100% Philippine-based team</li><li>DTI & BIR registered</li><li>Modern tech stack</li><li>Free consultation</li></ul>'};
  modalData.team = {title:'Our Team',content:'<p>Miyako Enterprises is powered by a dedicated team of software engineers, designers, and business consultants based in the Philippines.</p><h3>Development Team</h3><p>Full-stack engineers with expertise in React, Next.js, TypeScript, Python, and PostgreSQL.</p><h3>Design Team</h3><p>UI/UX designers creating intuitive interfaces.</p><h3>Join Our Team</h3><p>Check our <a href="#contact">Careers section</a> for openings.</p>'};
  modalData.portfolio = {title:'Portfolio',content:'<p>Recent projects:</p><h3>Invoice Management System</h3><p>Comprehensive SaaS platform with recurring invoices, multi-currency support, PDF generation, and Stripe integration.</p><h3>School Management System</h3><p>Full-featured administration platform with enrollment, grades, attendance tracking.</p><h3>E-Commerce Platform</h3><p>Custom online store with inventory management and analytics.</p><h3>CRM System</h3><p>Lead tracking, sales pipeline, email automation.</p><h3>Booking System</h3><p>Appointment scheduling with automated reminders.</p><p><a href="#contact">Contact us</a> to discuss your project.</p>'};
  modalData.blog = {title:'Blog & Resources',content:'<p>Stay updated with software development trends.</p><h3>Recent Articles</h3><p><strong>Building Scalable SaaS Applications in 2026</strong><br>Best practices for multi-tenant platforms.</p><p><strong>Why Philippine Businesses Need Custom Software</strong><br>Competitive advantages in the digital economy.</p><p><strong>Next.js vs Traditional React</strong><br>Comprehensive comparison for modern web apps.</p><h3>Newsletter</h3><p><a href="#contact">Contact us</a> to subscribe.</p>'};
  modalData.privacy = {title:'Privacy Policy',content:'<p><strong>Effective:</strong> March 11, 2026</p><h3>1. Information We Collect</h3><p>Name, email, phone, business information, technical data.</p><h3>2. How We Use Your Information</h3><p>Respond to inquiries, provide support, improve services.</p><h3>3. Information Sharing</h3><p>We do not sell your information.</p><h3>4. Data Security</h3><p>Industry-standard security measures, encrypted data.</p><h3>5. Your Rights</h3><p>Access, correct, or delete your information. Email <a href="mailto:owner@miyako-enterprises.com">owner@miyako-enterprises.com</a></p><h3>6. Cookies</h3><p>See our <a href="javascript:void(0)" data-modal="cookies">Cookie Policy</a>.</p>'};
  modalData.terms = {title:'Terms of Service',content:'<p><strong>Effective:</strong> March 11, 2026</p><h3>1. Acceptance</h3><p>By using our services, you agree to these terms.</p><h3>2. Services</h3><p>Software sales, SaaS subscriptions, custom development, support.</p><h3>3. User Responsibilities</h3><p>Provide accurate info, use services lawfully, protect credentials, pay fees on time.</p><h3>4. Payment</h3><p>Fees in PHP or USD, due upon invoice.</p><h3>5. Intellectual Property</h3><p>All materials remain our IP unless transferred.</p><h3>6. Warranties</h3><p>Services provided as-is with reasonable quality efforts.</p><h3>7. Liability</h3><p>Limited to fees paid in 12 months.</p><h3>8. Termination</h3><p>30 days notice required.</p><h3>9. Law</h3><p>Governed by Philippine law.</p><p>Contact <a href="mailto:owner@miyako-enterprises.com">owner@miyako-enterprises.com</a></p>'};
  modalData.cookies = {title:'Cookie Policy',content:'<p><strong>Updated:</strong> March 11, 2026</p><h3>What Are Cookies?</h3><p>Small text files for better experience.</p><h3>Cookies We Use</h3><p><strong>Essential:</strong> Session, security, forms</p><p><strong>Performance:</strong> Analytics, monitoring</p><h3>Third-Party</h3><p>Google Fonts, Cloudflare</p><h3>Managing Cookies</h3><p>Control via browser settings.</p><p>Email <a href="mailto:owner@miyako-enterprises.com">owner@miyako-enterprises.com</a></p>'};
  modalData.sla = {title:'Service Level Agreement',content:'<p><strong>Effective:</strong> March 11, 2026</p><h3>1. Uptime</h3><p>99.9% for production</p><h3>2. Support Response</h3><p><strong>Critical:</strong> 1hr response, 4hr resolution</p><p><strong>High:</strong> 4hr response, 24hr resolution</p><p><strong>Medium:</strong> 8hr response, 72hr resolution</p><p><strong>Low:</strong> 24hr response</p><h3>3. Service Credits</h3><p>99-99.9%: 10% credit<br>95-98.9%: 25% credit<br>&lt;95%: 50% credit</p><h3>4. Custom Projects</h3><p>Timeline in proposal, weekly updates, milestone-based delivery</p><h3>5. Exclusions</h3><p>Third-party failures, client issues, force majeure</p><p>Contact <a href="mailto:owner@miyako-enterprises.com">owner@miyako-enterprises.com</a></p>'};
  modalData.refund = {title:'Refund Policy',content:'<p><strong>Effective:</strong> March 11, 2026</p><h3>Software Sales</h3><p><strong>30-Day Money-Back:</strong> Full refund within 30 days for unused licenses</p><h3>SaaS Subscriptions</h3><p><strong>Monthly:</strong> Cancel anytime, no partial refunds</p><p><strong>Annual:</strong> Pro-rated refund if cancelled within 60 days</p><h3>Custom Development</h3><p>Full refund before development starts, 50% during discovery, no refund for completed milestones</p><h3>How to Request</h3><p>Email <a href="mailto:owner@miyako-enterprises.com">owner@miyako-enterprises.com</a> with "Refund Request" subject, include order number</p><h3>Non-Refundable</h3><p>Setup fees, third-party fees, training hours, custom modifications</p>'};

  const overlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.modal-close');

  // Open modal
  const modalLinks = document.querySelectorAll('[data-modal]');
  
  modalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const modalId = link.getAttribute('data-modal');
      const data = modalData[modalId];
      if (data) {
        modalBody.innerHTML = '<h2>' + data.title + '</h2>' + data.content;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Re-attach modal link handlers for cross-links
        modalBody.querySelectorAll('[data-modal]').forEach(innerLink => {
          innerLink.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const innerId = innerLink.getAttribute('data-modal');
            const innerData = modalData[innerId];
            if (innerData) {
              modalBody.innerHTML = '<h2>' + innerData.title + '</h2>' + innerData.content;
              modalBody.scrollTop = 0;
            }
          });
        });
      }
      return false;
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Smooth active nav highlight
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const observer  = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + e.target.id
            ? 'var(--white)' : '';
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));

  // Scroll-reveal cards
  const cards = document.querySelectorAll('.service-card, .price-card, .testi-card, .step');
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.style.opacity = '1';
          e.target.style.transform = e.target.style.transform.replace('translateY(30px)', 'translateY(0)');
        }, i * 80);
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(c => {
    c.style.opacity = '0';
    c.style.transition = 'opacity .5s ease, transform .5s ease';
    c.style.transform = (c.style.transform || '') + ' translateY(30px)';
    revealObs.observe(c);
  });

  // Form submit
  async function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.submit-btn');
    const msg = document.getElementById('form-msg');

    const data = Object.fromEntries(new FormData(e.target).entries());

    btn.textContent = 'Sending…';
    btn.disabled = true;
    msg.style.display = 'none';

    try {
      const res = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.ok) {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = '#0f3d26';
        msg.style.color = 'var(--accent)';
        msg.textContent = "Thank you! We'll get back to you within 24 hours.";
        msg.style.display = 'block';
        e.target.reset();
      } else {
        throw new Error(result.error || 'Send failed');
      }
    } catch (err) {
      btn.textContent = '⚠ Failed — Try Again';
      btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
      msg.style.color = '#f87171';
      msg.textContent = 'Something went wrong. Please email us at owner@miyako-enterprises.com';
      msg.style.display = 'block';
    }

    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.disabled = false;
      btn.style.background = '';
      msg.style.display = 'none';
      msg.style.color = 'var(--accent)';
    }, 6000);
  }
  
  }); // End DOMContentLoaded
</script>
</body>
</html>`;

// Security helper functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function sanitizeString(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

async function handleContact(request, env) {
  try {
    // Security: Validate content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid content type' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Input validation
    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid name' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }
    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid email' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0 || message.length > 5000) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid message' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    const sanitizedName = sanitizeString(name.trim());
    const sanitizedEmail = sanitizeString(email.trim());
    const sanitizedCompany = company ? sanitizeString(company.trim().substring(0, 100)) : '';
    const sanitizedMessage = sanitizeString(message.trim());

    const serviceLabels = {
      buy:     'Buy Software (One-Time)',
      rent:    'Rent Software (Subscription)',
      build:   'Custom Web App Development',
      consult: 'General Consultation',
    };
    const serviceLabel = serviceLabels[service] || 'Not specified';

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0b0c10;color:#e2e8f0;border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#00f5ff,#0f3d26);padding:28px 32px;">
          <h2 style="margin:0;color:#fff;font-size:1.3rem;">New Inquiry — Miyako Enterprises</h2>
        </div>
        <div style="padding:32px;">
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;color:#8892a4;width:130px;">Name</td><td style="padding:8px 0;color:#fff;font-weight:600;">${sanitizedName}</td></tr>
            <tr><td style="padding:8px 0;color:#8892a4;">Email</td><td style="padding:8px 0;"><a href="mailto:${sanitizedEmail}" style="color:#00f5ff;">${sanitizedEmail}</a></td></tr>
            <tr><td style="padding:8px 0;color:#8892a4;">Company</td><td style="padding:8px 0;color:#e2e8f0;">${sanitizedCompany || 'N/A'}</td></tr>
            <tr><td style="padding:8px 0;color:#8892a4;">Interested In</td><td style="padding:8px 0;color:#0f3d26;font-weight:600;">${serviceLabel}</td></tr>
          </table>
          <div style="background:#1c1f2a;border-radius:8px;padding:20px;">
            <p style="margin:0 0 8px;color:#8892a4;font-size:.85rem;text-transform:uppercase;letter-spacing:.06em;">Message</p>
            <p style="margin:0;color:#e2e8f0;line-height:1.7;white-space:pre-wrap;">${sanitizedMessage}</p>
          </div>
          <p style="margin:24px 0 0;font-size:.8rem;color:#4a5568;">Sent via miyako-enterprises.com contact form</p>
        </div>
      </div>
    `;

    const resendPayload = {
      from: 'Miyako Enterprises <noreply@client.miyako-enterprises.com>',
      to: ['danielchiu26@gmail.com'],
      reply_to: sanitizedEmail,
      subject: `New Inquiry: ${serviceLabel} — ${sanitizedName}`,
      html,
    };

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resendPayload),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error('Resend error status:', res.status, errBody);
      return new Response(JSON.stringify({ ok: false, error: `Resend ${res.status}: ${errBody}` }), {
        status: 502, headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Contact handler error:', err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Security headers
    const securityHeaders = {
      'Content-Type': 'text/html; charset=UTF-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    };

    // Handle favicon
    if (url.pathname === '/favicon.ico' || url.pathname === '/favicon.svg') {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#00f5ff;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0f3d26;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="20" fill="url(#grad)"/>
        <text x="50" y="72" font-family="Arial, sans-serif" font-size="60" font-weight="900" fill="#fff" text-anchor="middle">M</text>
      </svg>`;
      return new Response(svg, {
        status: 200,
        headers: { 
          'Content-Type': 'image/svg+xml', 
          'Cache-Control': 'public, max-age=31536000',
          'X-Content-Type-Options': 'nosniff',
        },
      });
    }

    // Handle contact form POST
    if (url.pathname === '/contact' && request.method === 'POST') {
      return handleContact(request, env);
    }

    // Reject non-GET/HEAD for root
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method not allowed', { status: 405 });
    }

    // Serve the landing page for all routes
    return new Response(HTML, {
      status: 200,
      headers: securityHeaders,
    });
  },
};
