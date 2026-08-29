/**
 * app.js
 * Rendu des fiches projet à partir de projects-data.js,
 * + petites interactions (copier le pseudo Discord).
 */

const ICONS = {
  telescope: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 26 L20 8"/><path d="M14 14 L26 4 L29 7 L17 17"/><circle cx="8" cy="22" r="3.4"/><path d="M9 18 L6 12"/></svg>`,
  bot: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="7" y="12" width="18" height="14" rx="1"/><path d="M16 12 V7"/><circle cx="16" cy="5" r="1.6"/><circle cx="12.5" cy="19" r="1.6" fill="currentColor" stroke="none"/><circle cx="19.5" cy="19" r="1.6" fill="currentColor" stroke="none"/><path d="M7 17 H3 M29 17 H25"/></svg>`,
  book: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M16 8 C13 6 8 6 5 7 V24 C8 23 13 23 16 25 C19 23 24 23 27 24 V7 C24 6 19 6 16 8 Z"/><path d="M16 8 V25"/></svg>`,
  controller: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M9 12 H23 C27 12 28 20 25 22 C23 23.5 21.5 22 20 20 H12 C10.5 22 9 23.5 7 22 C4 20 5 12 9 12 Z"/><path d="M11 15 V19 M9 17 H13"/><circle cx="22" cy="16" r="1" fill="currentColor"/><circle cx="19.5" cy="18.5" r="1" fill="currentColor"/></svg>`,
};

function statusDotLabel(status) {
  return `<span class="card-status"><span class="status-dot"></span>${status}</span>`;
}

function renderCard(project) {
  const stackTags = project.stack
    .map((s) => `<span class="mono-tag">${s}</span>`)
    .join("");

  return `
    <article class="card-project">
      <div class="card-top">
        <div>
          <div class="card-ref">SPEC. ${project.ref}</div>
          <div class="card-category">${project.category}</div>
        </div>
        <div class="card-icon">${ICONS[project.icon] || ""}</div>
      </div>
      <h3 class="card-title">${project.title}</h3>
      <p class="card-summary">${project.summary}</p>
      <div class="card-stack">${stackTags}</div>
      ${statusDotLabel(project.status)}
    </article>
  `;
}

function mountProjects(targetSelector, { featuredOnly = false } = {}) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  const list = featuredOnly
    ? PROJECTS.filter((p) => p.featured)
    : PROJECTS;
  target.innerHTML = list.map(renderCard).join("");
}

function setupDiscordCopy() {
  const btn = document.querySelector("[data-copy-discord]");
  if (!btn) return;
  const value = btn.getAttribute("data-copy-discord");
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(value);
      const original = btn.textContent;
      btn.textContent = "Copié !";
      setTimeout(() => (btn.textContent = original), 1600);
    } catch (e) {
      btn.textContent = value;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupDiscordCopy();
});
