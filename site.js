/* Renders every page from window.SITE (content.js). No build step. */
(function () {
  "use strict";
  const S = window.SITE || {};
  const page = document.body.dataset.page || "home";
  const base = ""; // all links are relative; 404.html sets a <base> so they work at any depth

  /* ── helpers ─────────────────────────────────────────── */
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const isTodo = (s) => typeof s === "string" && /^TODO\b/.test(s);
  let todoCount = 0;

  const isExternal = (href) => /^https?:\/\//.test(href);
  const linkAttrs = (href) =>
    `href="${esc(href)}"` + (isExternal(href) ? ' target="_blank" rel="noopener noreferrer"' : "");

  // Text -> safe HTML. Supports [text](url) links and TODO placeholders.
  function t(s) {
    if (s == null || s === "") return "";
    if (isTodo(s)) {
      todoCount++;
      const body = String(s).replace(/^TODO:?\s*/, "") || "content needed";
      return `<span class="todo" title="placeholder: replace in content.js">${esc(body)}</span>`;
    }
    return esc(s).replace(/\[([^\]]+)\]\(((?:https?:\/\/|mailto:)[^)\s]+)\)/g, (_, txt, url) => {
      const href = url.replace(/&amp;/g, "&");
      return `<a ${linkAttrs(href)}>${txt}</a>`;
    });
  }

  // Name with optional link (link skipped while still a placeholder).
  const named = (text, url, cls = "inline-link") =>
    url && !isTodo(text) ? `<a class="${cls}" ${linkAttrs(url)}>${t(text)}</a>` : t(text);

  const list = (a) => (Array.isArray(a) ? a.filter((x) => x != null && x !== "") : []);

  /* ── icons ───────────────────────────────────────────── */
  const ICON = {
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.82-.26.82-.57v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .3"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.59-6.64 7.59H.47l8.6-9.83L0 1.15h7.6l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z"/></svg>',
    instagram: '<svg class="stroke" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="0.6" fill="currentColor"/></svg>',
    email: '<svg class="stroke" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
    "résumé": '<svg class="stroke" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5z"/><path d="M14 3v4.5h4.5M9 13h6M9 16.5h6"/></svg>',
    link: '<svg class="stroke" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/></svg>',
  };
  const NAV_ICON = {
    home: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z"/></svg>',
    experience: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3.5" y="7" width="17" height="13" rx="1.5"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3.5 12.5h17"/></svg>',
    projects: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m12 3 9 4.5-9 4.5-9-4.5z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/></svg>',
  };
  const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
  const CHEVRON = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg>';

  /* ── links (socials + optional résumé) ───────────────── */
  const allLinks = () => {
    const l = list(S.links).filter((x) => x.href);
    if (S.resume) l.push({ label: "résumé", href: S.resume, download: true });
    return l;
  };
  const linkTag = (l, inner, cls = "") =>
    `<a${cls ? ` class="${cls}"` : ""} ${linkAttrs(l.href)}${l.download ? " download" : ""}${
      cls ? ` aria-label="${esc(l.label)}"` : ""
    }>${inner}</a>`;

  /* ── chrome: nav bar, grain, progress, footer ────────── */
  function chrome() {
    const pages = [
      ["home", "index.html"],
      ["experience", "experience.html"],
      ["projects", "projects.html"],
    ];
    const tabs = pages
      .map(
        ([key, href]) =>
          `<li><a class="tab" href="${base}${href}"${key === page ? ' aria-current="page"' : ""}>${NAV_ICON[key]}<span>${key}</span></a></li>`
      )
      .join("");
    const icons = allLinks()
      .map((l) => linkTag(l, ICON[l.label] || ICON.link, "icon-link"))
      .join("");

    document.body.insertAdjacentHTML(
      "afterbegin",
      `<a class="skip" href="#main" onclick="event.preventDefault();document.getElementById('main').focus()">skip to content</a>
       <div class="progress" aria-hidden="true"></div>
       <div class="grain" aria-hidden="true"></div>
       <header class="bar">
         <a class="brand" href="${base}index.html">${esc(S.name || "")}</a>
         <nav aria-label="primary"><ul class="tabs">${tabs}</ul></nav>
         <div class="bar-icons">${icons}</div>
       </header>`
    );
    document.body.insertAdjacentHTML(
      "beforeend",
      `<footer class="site-foot"><p>© ${new Date().getFullYear()} ${esc(S.name || "")}</p></footer>`
    );
  }

  /* ── row builders ────────────────────────────────────── */
  let rowId = 0;
  function row({ title, sub, meta = [], links = [], image, details = [], expandable = false }) {
    const id = `row-${++rowId}`;
    const det = list(details);
    const canToggle = expandable && det.length > 0;
    const metaHtml = [
      ...meta.filter(Boolean).map((m) => `<span>${t(m)}</span>`),
      ...list(links)
        .filter((l) => l.href)
        .map((l) => `<a ${linkAttrs(l.href)}>${esc(l.label)}</a>`),
    ].join("");
    return `<li class="row">
      ${image ? `<div class="thumb"><img src="${esc(image)}" alt="" loading="lazy" decoding="async"></div>` : ""}
      <div class="row-body">
        <div class="row-head">
          <div>
            <h3 class="row-title">${title}</h3>
            ${sub ? `<p class="row-sub">${sub}</p>` : ""}
          </div>
          ${
            canToggle
              ? `<button class="toggle" type="button" aria-expanded="false" aria-controls="${id}" aria-label="show details">${CHEVRON}</button>`
              : ""
          }
        </div>
        ${metaHtml ? `<p class="meta">${metaHtml}</p>` : ""}
        ${
          canToggle
            ? `<div class="panel" id="${id}" data-open="false" inert><div><ul>${det.map((d) => `<li>${t(d)}</li>`).join("")}</ul></div></div>`
            : ""
        }
      </div>
    </li>`;
  }

  const roleTitle = (e) =>
    `${t(e.role)}${e.org ? ` <span class="org">· ${named(e.org, e.orgUrl)}</span>` : ""}`;

  const expRow = (e, full) =>
    row({
      title: roleTitle(e),
      sub: full ? t(e.summary) : "",
      meta: [e.dates, full ? e.location : null],
      details: e.bullets,
      expandable: full,
    });

  const projRow = (p, full) =>
    row({
      title: t(p.title),
      sub: t(p.tagline),
      meta: [p.role, p.dates],
      links: p.links,
      image: p.image,
      details: p.details,
      expandable: full,
    });

  const eduRow = (e) =>
    `<li class="row"><div class="row-body">
      <h3 class="row-title">${named(e.school, e.schoolUrl)}</h3>
      ${e.degree ? `<p class="row-sub">${t(e.degree)}</p>` : ""}
      ${e.dates ? `<p class="meta"><span>${t(e.dates)}</span></p>` : ""}
      ${list(e.notes).length ? `<ul class="edu-notes">${list(e.notes).map((n) => `<li>${t(n)}</li>`).join("")}</ul>` : ""}
    </div></li>`;

  const honorRow = (h) => row({ title: t(h.title), sub: t(h.note), meta: [h.issuer, h.date] });

  const section = (id, label, inner, more) =>
    `<section class="section" id="${id}" aria-labelledby="${id}-h">
      <h2 class="label" id="${id}-h">${label}</h2>
      ${inner}
      ${more ? `<p class="more"><a class="arrow-link" href="${more[1]}"><span>${more[0]}</span>${ARROW}</a></p>` : ""}
    </section>`;

  const draftNote = () =>
    `<p class="draft-note" role="note"><strong>draft</strong><span>highlighted items are placeholders, not real details. replace them in content.js.</span></p>`;

  /* ── pages ───────────────────────────────────────────── */
  function home() {
    const exp = list(S.experience);
    const proj = list(S.projects);
    const edu = list(S.education);
    const featured = proj.slice(0, S.featuredProjects || 3);
    const socials = allLinks()
      .map((l) => linkTag(l, esc(l.label)))
      .join("");

    let html = `<h1 class="name">${esc(S.name || "")}</h1>`;
    if (socials) html += `<nav class="socials" aria-label="links">${socials}</nav>`;
    if (list(S.intro).length) html += `<div class="prose">${list(S.intro).map((p) => `<p>${t(p)}</p>`).join("")}</div>`;
    const facts = list(S.offTheClock).filter((f) => f.label && f.text);
    if (facts.length)
      html += section("home-life", "off the clock",
        `<dl class="facts">${facts.map((f) => `<div><dt>${t(f.label)}</dt><dd>${t(f.text)}</dd></div>`).join("")}</dl>`);
    const photos = list(S.photos).filter((p) => p.src);
    if (photos.length)
      html += section("home-photos", "snapshots",
        `<ul class="photos">${photos
          .map(
            (p, i) => `<li><button class="photo" type="button" data-index="${i}" aria-label="enlarge photo: ${esc(p.alt || "")}">
              <img src="${esc(p.src)}" alt="${esc(p.alt || "")}"${p.w && p.h ? ` width="${+p.w}" height="${+p.h}"` : ""} loading="lazy" decoding="async">
              ${p.caption ? `<span class="photo-cap" aria-hidden="true">${esc(p.caption)}</span>` : ""}
            </button></li>`
          )
          .join("")}</ul>`);
    if (exp.length)
      html += section("home-experience", "experience",
        `<ul class="rows">${exp.slice(0, 3).map((e) => expRow(e, false)).join("")}</ul>`,
        ["full experience", "experience.html"]);
    if (featured.length)
      html += section("home-projects", "projects",
        `<ul class="rows">${featured.map((p) => projRow(p, false)).join("")}</ul>`,
        proj.length ? ["all projects", "projects.html"] : null);
    if (edu.length)
      html += section("home-education", "education", `<ul class="rows">${edu.map(eduRow).join("")}</ul>`);
    return html;
  }

  function experience() {
    const groups = [
      ["work", "experience", list(S.experience), (a) => `<ul class="rows">${a.map((e) => expRow(e, true)).join("")}</ul>`],
      ["leadership", "leadership", list(S.leadership), (a) => `<ul class="rows">${a.map((e) => expRow(e, true)).join("")}</ul>`],
      ["honors", "honors", list(S.honors), (a) => `<ul class="rows">${a.map(honorRow).join("")}</ul>`],
      ["education", "education", list(S.education), (a) => `<ul class="rows">${a.map(eduRow).join("")}</ul>`],
    ];
    const skills = S.skills && typeof S.skills === "object" ? Object.entries(S.skills).filter(([, v]) => list(v).length) : [];
    const interests = list(S.interests);
    const skillHtml =
      skills.length || interests.length
        ? `<dl class="skills">${[...skills, ...(interests.length ? [["interests", interests]] : [])]
            .map(([k, v]) => `<div><dt>${t(k)}</dt><dd>${list(v).map((s) => `<span class="chip">${t(s)}</span>`).join("")}</dd></div>`)
            .join("")}</dl>`
        : "";

    const present = groups.filter(([, , a]) => a.length);
    const rail = [...present.map(([id, label]) => [id, label]), ...(skillHtml ? [["skills", "skills"]] : [])];

    let html = `<h1 class="page-title">experience<span class="dot">.</span></h1>`;
    if (rail.length > 1)
      html += `<nav class="rail" aria-label="sections"><ul>${rail
        .map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`)
        .join("")}</ul></nav>`;
    html += `<div>${present.map(([id, label, a, render]) => section(id, label, render(a))).join("")}${
      skillHtml ? section("skills", "skills &amp; interests", skillHtml) : ""
    }</div>`;
    return html;
  }

  function projects() {
    const proj = list(S.projects);
    return `<h1 class="page-title">projects<span class="dot">.</span></h1>
      ${proj.length ? `<ul class="rows page-rows">${proj.map((p) => projRow(p, true)).join("")}</ul>` : ""}`;
  }

  function notFound() {
    return `<h1 class="page-title">not found<span class="dot">.</span></h1>
      <div class="prose" style="margin-top:1.5rem"><p>this page doesn't exist.</p></div>
      <p class="more"><a class="arrow-link" href="${base}index.html"><span>back home</span>${ARROW}</a></p>`;
  }

  /* ── mount ───────────────────────────────────────────── */
  chrome();
  const main = document.getElementById("main");
  const render = { home, experience, projects, "404": notFound }[page] || home;
  const body = render();
  main.innerHTML = `<div class="slab" data-enter>${todoCount ? draftNote() : ""}${body}</div>`;

  /* ── behaviour ───────────────────────────────────────── */
  // photo lightbox (native <dialog>: Esc closes, focus is trapped and restored)
  const photoList = list(S.photos).filter((p) => p.src);
  if (document.querySelector(".photo")) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<dialog class="lightbox" aria-label="photo viewer">
        <figure><img alt=""><figcaption></figcaption></figure>
        <button class="lb-btn lb-close" type="button" aria-label="close">${'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>'}</button>
        <button class="lb-btn lb-prev" type="button" aria-label="previous photo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg></button>
        <button class="lb-btn lb-next" type="button" aria-label="next photo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></button>
        <p class="lb-count" aria-live="polite"></p>
      </dialog>`
    );
    const dlg = document.querySelector(".lightbox");
    const img = dlg.querySelector("img");
    const cap = dlg.querySelector("figcaption");
    const count = dlg.querySelector(".lb-count");
    let idx = 0;
    const show = (i) => {
      idx = (i + photoList.length) % photoList.length;
      const p = photoList[idx];
      img.src = p.src;
      img.alt = p.alt || "";
      cap.textContent = p.caption || "";
      cap.hidden = !p.caption;
      count.textContent = `${idx + 1} / ${photoList.length}`;
    };
    main.addEventListener("click", (e) => {
      const b = e.target.closest(".photo");
      if (!b) return;
      show(+b.dataset.index);
      dlg.showModal();
    });
    dlg.querySelector(".lb-close").addEventListener("click", () => dlg.close());
    dlg.querySelector(".lb-prev").addEventListener("click", () => show(idx - 1));
    dlg.querySelector(".lb-next").addEventListener("click", () => show(idx + 1));
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); }); // click backdrop
    dlg.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  // expand / collapse rows
  main.addEventListener("click", (e) => {
    const btn = e.target.closest(".toggle");
    if (!btn) return;
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    const open = btn.getAttribute("aria-expanded") !== "true";
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "hide details" : "show details");
    panel.dataset.open = String(open);
    panel.toggleAttribute("inert", !open);
  });

  // scroll progress, top-bar border, section rail highlight
  const bar = document.querySelector(".bar");
  const progress = document.querySelector(".progress");
  const railLinks = [...document.querySelectorAll(".rail a")];
  const targets = railLinks.map((a) => document.querySelector(a.getAttribute("href")));
  let ticking = false;
  let locked = -1; // rail item the user just clicked; wins until they scroll themselves
  railLinks.forEach((a, i) => a.addEventListener("click", () => { locked = i; onScroll(); }));
  ["wheel", "touchstart", "keydown"].forEach((ev) => addEventListener(ev, () => { locked = -1; }, { passive: true }));
  function onScroll() {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    bar.dataset.scrolled = String(scrollY > 4);
    if (targets.length) {
      const line = (innerWidth >= 720 ? 48 : 0) + 44 + 24;
      let current = 0;
      targets.forEach((el, i) => { if (el && el.getBoundingClientRect().top <= line) current = i; });
      if (max > 0 && scrollY >= max - 2) current = targets.length - 1;
      if (locked > -1) current = locked;
      railLinks.forEach((a, i) => a.setAttribute("aria-current", String(i === current)));
    }
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();
})();
