const socialProfiles = [
  {
    label: "LinkedIn",
    href: "https://au.linkedin.com/in/sumanjitsingh",
    color: "#0a66c2",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
  },
  {
    label: "Behance",
    href: "https://www.behance.net/Carbon_Black_Design",
    color: "#1769ff",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/behance.svg"
  }
];

function createSocialLinks(location) {
  const socialLinks = document.createElement("span");
  socialLinks.className = `ss-social-links ss-social-links--${location}`;
  socialLinks.setAttribute("aria-label", "Social profiles");

  socialProfiles.forEach(({ label, href, color, icon }) => {
    const link = document.createElement("a");
    link.className = "ss-social-link";
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.style.setProperty("--social-color", color);
    link.setAttribute("aria-label", label);
    link.innerHTML = `<img src="${icon}" alt="" aria-hidden="true">`;
    socialLinks.append(link);
  });

  return socialLinks;
}

const navInner = document.querySelector(".ss-nav-inner");
const brand = navInner?.querySelector(".ss-brand");
const footerInner = document.querySelector(".ss-footer-inner");
const footerBrand = footerInner?.querySelector(".ss-footer-brand");

if (brand || footerBrand) {
  const style = document.createElement("style");
  style.textContent = `
    .ss-nav-inner { display: grid !important; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 24px; padding: 14px 0; }
    .ss-footer-inner { display: grid !important; grid-template-columns: minmax(220px, 1fr) auto minmax(116px, 1fr); align-items: center; gap: 24px; }
    .ss-brand, .ss-footer-brand { justify-self: start; }
    .ss-brand strong, .ss-brand-text strong { font-size: clamp(24px, 2vw, 30px) !important; }
    .ss-nav-links { grid-column: 1 / -1; grid-row: 2; justify-self: start; }
    .ss-footer-links { justify-self: center; }
    .ss-social-links { display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
    .ss-social-links--header { grid-column: 2; grid-row: 1; justify-self: end; }
    .ss-social-links--footer { justify-self: end; }
    .ss-social-link { display: grid; width: 32px; height: 32px; padding: 0; place-items: center; color: #fff; background: var(--social-color); border: 1px solid var(--social-color); border-radius: 50%; text-decoration: none; transition: transform 0.16s ease, box-shadow 0.16s ease; }
    .ss-social-link:hover { color: #fff; transform: translateY(-2px); box-shadow: 0 5px 12px color-mix(in srgb, var(--social-color) 35%, transparent); }
    .ss-social-link::after { display: none !important; }
    .ss-social-link img { width: 16px; height: 16px; filter: invert(1); }
    .ss-social-links--footer .ss-social-link { width: 29px; height: 29px; }
    .ss-social-links--footer .ss-social-link img { width: 14px; height: 14px; }
    @media (max-width: 1100px) {
      .ss-footer-inner { grid-template-columns: 1fr auto; }
      .ss-footer-links { grid-column: 1 / -1; grid-row: 2; justify-self: start; }
      .ss-social-links--footer { grid-column: 2; grid-row: 1; }
    }
    @media (max-width: 640px) {
      .ss-social-link { width: 29px; height: 29px; }
      .ss-nav-inner, .ss-footer-inner { grid-template-columns: minmax(0, 1fr) auto; gap: 14px; }
      .ss-nav-links, .ss-footer-links { display: flex !important; width: 100%; gap: 14px !important; overflow-x: auto; padding-bottom: 5px; flex-wrap: nowrap !important; }
      .ss-nav-links a, .ss-footer-links a { flex: 0 0 auto; }
    }
  `;
  document.head.append(style);
}

if (brand && navInner) {
  navInner.append(createSocialLinks("header"));
}

if (footerBrand && footerInner) {
  footerInner.append(createSocialLinks("footer"));
}
