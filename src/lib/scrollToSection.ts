export function scrollToSection(href: string, updateHash = true) {
  if (typeof window === "undefined") return;

  const section = document.querySelector<HTMLElement>(href);
  if (!section) return;

  const nav = document.querySelector<HTMLElement>("nav");
  const navHeight = nav?.getBoundingClientRect().height ?? 0;
  const scrollAnchor =
    section.querySelector<HTMLElement>("[data-scroll-anchor]") ??
    section.querySelector<HTMLElement>(".eyebrow") ??
    section.querySelector<HTMLElement>("h1, h2") ??
    section;

  const top =
    scrollAnchor.getBoundingClientRect().top +
    window.scrollY -
    navHeight -
    24;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });

  if (updateHash) {
    window.history.replaceState(null, "", href);
  }
}
