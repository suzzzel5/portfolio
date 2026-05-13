const PORTFOLIO_CONFIG = {
  displayName: "Sujal Maharjan",
  email: "maharjansujal0@gmail.com",
  roles: [
    "BIM Student",
    "Data Analyst in the making",
    "Python & Jupyter",
    "Web Developer",
  ],
  stats: {
    dataProjects: 3,
    webProjects: 2,
  },
  social: {
    github: { label: "GitHub", url: "https://github.com/suzzzel5", icon: "⌘" },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sujal-maharjan-635675251/",
      icon: "in",
    },
    instagram: { label: "Instagram", url: "https://www.instagram.com/suzal_mhz/", icon: "◎" },
    facebook: { label: "Facebook", url: "https://www.facebook.com/sujalmhz11/", icon: "f" },
  },
};

const PROJECTS = [
  {
    id: "1",
    type: "data",
    title: "Marketing campaign analysis",
    description:
      "Python notebooks: cleaning, EDA, and visual storytelling on 1,260 customers—segments, channels, and campaign response with actionable recommendations.",
    link: "https://github.com/suzzzel5/Marketing-Campagain-Analysis",
  },
  {
    id: "2",
    type: "data",
    title: "E‑commerce customer analytics",
    description:
      "Revenue concentration, VIP segments, geography, and satisfaction drivers across 350 customers—insights framed with ROI-style recommendations.",
    link: "https://github.com/suzzzel5/E-Commerce-Customer-Analytics",
  },
  {
    id: "3",
    type: "data",
    title: "Amazon sales insights",
    description:
      "Exploratory analysis on 1,464 Amazon listings: categories, discount vs rating, pricing distributions, and a compact executive-style dashboard view.",
    link: "https://github.com/suzzzel5/Amazon-sales-insights",
  },
  {
    id: "4",
    type: "web",
    title: "Nexus Bags e‑commerce",
    description:
      "Full e‑commerce web app for a local bag store—browse, shop, and business flows brought online with PHP.",
    link: "https://github.com/suzzzel5/Ecommerce-webiste-for-Bag-store",
  },
  {
    id: "5",
    type: "web",
    title: "Gym management system",
    description:
      "Web-based gym operations: members, trainers, subscriptions, and payments—streamlined admin workflows.",
    link: "https://github.com/suzzzel5/Gym-Management-System",
  },
];

const SKILLS = [
  "Python",
  "Pandas",
  "NumPy",
  "Jupyter",
  "Matplotlib",
  "Seaborn",
  "EDA",
  "Data cleaning",
  "Git",
  "PHP",
  "HTML / CSS",
  "JavaScript",
  "Business insights",
  "Storytelling",
  "SQL",
];

function initCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let t = 0;
  let W = 0;
  let H = 0;
  let dpr = 1;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const blobs = [
    { x: 0.22, y: 0.32, r: 0.48, hue: 198, speed: 0.00038 },
    { x: 0.78, y: 0.22, r: 0.4, hue: 268, speed: -0.00033 },
    { x: 0.52, y: 0.72, r: 0.44, hue: 172, speed: 0.00028 },
  ];

  const particles = prefersReduced
    ? []
    : Array.from({ length: 36 }, () => ({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.00035,
        vy: (Math.random() - 0.5) * 0.00035,
        r: Math.random() * 1.4 + 0.35,
        a: Math.random() * 0.22 + 0.06,
      }));

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawFrame() {
    ctx.fillStyle = "#07080d";
    ctx.fillRect(0, 0, W, H);

    blobs.forEach((b, i) => {
      const ox = prefersReduced ? 0 : Math.sin(t * b.speed * 1000 + i) * 0.08;
      const oy = prefersReduced ? 0 : Math.cos(t * b.speed * 800 + i * 2) * 0.06;
      const cx = (b.x + ox) * W;
      const cy = (b.y + oy) * H;
      const rad = Math.min(W, H) * b.r;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
      g.addColorStop(0, `hsla(${b.hue}, 72%, 58%, 0.2)`);
      g.addColorStop(0.45, `hsla(${b.hue}, 58%, 42%, 0.06)`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    });

    if (!prefersReduced && particles.length) {
      ctx.save();
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        p.x = Math.min(1, Math.max(0, p.x));
        p.y = Math.min(1, Math.max(0, p.y));
        ctx.beginPath();
        ctx.fillStyle = `rgba(200, 230, 255, ${p.a})`;
        ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }

    t += 1;
  }

  function loop() {
    drawFrame();
    if (!prefersReduced) requestAnimationFrame(loop);
  }

  resize();
  window.addEventListener(
    "resize",
    () => {
      resize();
      if (prefersReduced) drawFrame();
    },
    { passive: true }
  );
  if (prefersReduced) drawFrame();
  else loop();
}

function typeRoles(phrases, el) {
  if (!el) return;
  let pi = 0;
  let ci = 0;
  let deleting = false;
  const typeSpeed = 55;
  const deleteSpeed = 35;
  const pauseEnd = 2000;
  const pauseStart = 400;

  function tick() {
    const full = phrases[pi];
    if (!deleting) {
      el.textContent = full.slice(0, ci + 1);
      ci++;
      if (ci === full.length) {
        deleting = true;
        return setTimeout(tick, pauseEnd);
      }
      return setTimeout(tick, typeSpeed);
    }
    ci--;
    el.textContent = full.slice(0, ci);
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      return setTimeout(tick, pauseStart);
    }
    return setTimeout(tick, deleteSpeed);
  }

  tick();
}

function buildSkillsTrack() {
  const track = document.getElementById("skills-track");
  if (!track) return;
  const doubled = [...SKILLS, ...SKILLS];
  track.innerHTML = doubled
    .map((s) => {
      const d = document.createElement("div");
      d.textContent = s;
      return `<span class="skill-chip">${d.innerHTML}</span>`;
    })
    .join("");
}

function buildProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map((p) => {
    const esc = (s) => {
      const d = document.createElement("div");
      d.textContent = s;
      return d.innerHTML;
    };
    const badge = p.type === "data" ? "data" : "web";
    const badgeLabel = p.type === "data" ? "Data" : "Web";
    return `
    <a class="project-card" href="${esc(p.link)}" data-type="${p.type}" data-tilt>
      <span class="project-badge project-badge--${badge}">${badgeLabel}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.description)}</p>
      <span class="project-arrow" aria-hidden="true">→</span>
    </a>`;
  }).join("");

  grid.querySelectorAll("[data-tilt]").forEach(bindTilt);
}

function bindTilt(card) {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    const my = ((e.clientY - r.top) / r.height) * 100;
    card.style.setProperty("--mx", `${mx}%`);
    card.style.setProperty("--my", `${my}%`);
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -8;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 10;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
}

function setupProjectFilter() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const f = tab.getAttribute("data-filter");
      tabs.forEach((t) => {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", String(t === tab));
      });
      document.querySelectorAll(".project-card").forEach((c) => {
        const type = c.getAttribute("data-type");
        const show = f === "all" || type === f;
        c.classList.toggle("is-filtered-out", !show);
      });
    });
  });
}

function buildSocial() {
  const host = document.getElementById("social-links");
  if (!host) return;
  const { social } = PORTFOLIO_CONFIG;
  const esc = (s) => {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  };
  host.innerHTML = Object.entries(social)
    .map(([key, { label, url, icon }]) => {
      const href = url && url !== "#" ? url : "#";
      const disabled = !url || url === "#";
      return `<a class="social-link${disabled ? " is-disabled" : ""}" href="${esc(href)}" ${
        disabled ? 'aria-disabled="true"' : 'target="_blank" rel="noopener noreferrer"'
      } data-social="${esc(key)}">
        <span aria-hidden="true">${icon}</span> ${esc(label)}
      </a>`;
    })
    .join("");

  if (host.dataset.socialBound) return;
  host.dataset.socialBound = "1";
  host.addEventListener("click", (e) => {
    const a = e.target.closest("a.is-disabled");
    if (a) e.preventDefault();
  });
}

function setupReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  els.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 0.06, 0.45)}s`;
    io.observe(el);
  });
}

function animateStats() {
  const wrap = document.getElementById("stats");
  if (!wrap) return;
  const nums = wrap.querySelectorAll(".stat-value");
  const [s0, s1, s2] = nums;
  if (s0) s0.setAttribute("data-target", String(PORTFOLIO_CONFIG.stats.dataProjects));
  if (s1) s1.setAttribute("data-target", String(PORTFOLIO_CONFIG.stats.webProjects));
  if (s2) s2.setAttribute("data-target", "100");

  let started = false;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || started) return;
        started = true;
        nums.forEach((node) => {
          const target = Number(node.getAttribute("data-target"));
          const suffix = node.getAttribute("data-suffix") || "";
          const duration = 1400;
          const start = performance.now();
          function frame(now) {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - (1 - t) ** 3;
            const val = Math.round(eased * target);
            node.textContent = `${val}${suffix}`;
            if (t < 1) requestAnimationFrame(frame);
          }
          requestAnimationFrame(frame);
        });
      });
    },
    { threshold: 0.4 }
  );
  io.observe(wrap);
}

function setupHeader() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const links = nav ? nav.querySelectorAll("a") : [];

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }
}

function setupMagnetic() {
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * 0.12}px, ${dy * 0.12}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

function setupCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  if (!glow || window.matchMedia("(pointer: coarse)").matches) return;
  document.body.classList.add("has-cursor-glow");
  let mx = 0;
  let my = 0;
  let gx = 0;
  let gy = 0;
  window.addEventListener(
    "mousemove",
    (e) => {
      mx = e.clientX;
      my = e.clientY;
    },
    { passive: true }
  );
  function loop() {
    gx += (mx - gx) * 0.08;
    gy += (my - gy) * 0.08;
    glow.style.left = `${gx}px`;
    glow.style.top = `${gy}px`;
    requestAnimationFrame(loop);
  }
  loop();
}

function setupToTop() {
  const btn = document.getElementById("to-top");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function applyConfig() {
  const { displayName, email, roles } = PORTFOLIO_CONFIG;
  const heroName = document.getElementById("hero-name");
  const footerName = document.getElementById("footer-name");
  const mailto = document.getElementById("mailto-link");
  const heroMail = document.getElementById("hero-mail-btn");
  if (heroName) heroName.textContent = displayName;
  if (footerName) footerName.textContent = displayName;
  if (mailto) {
    mailto.href = `mailto:${email}`;
    mailto.textContent = email;
  }
  if (heroMail) heroMail.href = `mailto:${email}`;
  typeRoles(roles, document.getElementById("role-typed"));
}

document.getElementById("year").textContent = String(new Date().getFullYear());
initCanvas();
buildSkillsTrack();
buildProjects();
setupProjectFilter();
buildSocial();
applyConfig();
setupReveal();
animateStats();
setupHeader();
setupMagnetic();
setupCursorGlow();
setupToTop();
